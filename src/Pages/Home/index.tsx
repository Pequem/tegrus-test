import React, { useState, useEffect } from 'react'
import { useInjection } from 'inversify-react'
import {
  Modal,
  Space,
  Typography,
  Input
} from 'antd'
import IBreakingBadApi from '../../Interfaces/IBreakingBadApi'
import ICharacter from '../../Interfaces/ICharacter'
import Card from '../../Components/Card'
import Loading from '../../Components/LoadingWrapper'
import { Link } from 'react-router-dom'
import { useDebouncedCallback } from 'use-debounce'
import './styles.scss'

const Home: React.FC = () => {
  /* Essa é uma dependencia injetada, para manter um desacoplamento
  * entre a camada de Serviço e a camada de exibição com o objetivo
  * de possibilitar a implementação de testes que não dependam da API.
  * A definição do Container de dependencias está no arquivo DIContainer
  */
  const breakingBadApi: IBreakingBadApi = useInjection('IBreakingBadApi')
  const [characters, setCharacters] = useState<ICharacter[]>([])
  const [filteredCharacters, setFilteredCharacters] = useState<ICharacter[]>([])
  const [searchString, setSearchString] = useState<string>('')
  const [isBusy, setIsBusy] = useState<boolean>(false)

  /* Cria uma função pra evitar multiplas chamadas ao search quando o
  * usuario ainda estiver digitando
  */
  const debounceSearch = useDebouncedCallback(
    (value: string) => {
      setSearchString(value)
    },
    500
  )

  /*
  * Realiza a busca
  */
  const filterCharacters = () => {
    let filtered: ICharacter[] = []

    if (searchString.length === 0) {
      filtered = characters
    } else {
      filtered = characters.filter(character => (
        character.name.toLowerCase().indexOf(searchString.toLowerCase()) > -1 ||
        character.nickname.toLowerCase().indexOf(searchString.toLowerCase()) > -1
      ))
    }

    setFilteredCharacters(filtered)
  }

  // Recupera os personagens da api
  const fillCharacters = async () => {
    setIsBusy(true)
    try {
      const characters = await breakingBadApi.getAllCharacters()
      setCharacters(characters)
    } catch (e) {
      Modal.error({
        title: 'Ocorreu um erro.',
        content: e.message
      })
    }
    setIsBusy(false)
  }

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    debounceSearch(e.target.value.trim())
  }

  useEffect(() => {
    filterCharacters()
  }, [characters, searchString])

  useEffect(() => {
    fillCharacters()
  }, [])

  return (
    <section>
      <div className='head'>
        <Typography.Title level={1}>Characters</Typography.Title>
        <Input.Search disabled={isBusy} placeholder='Search' onChange={handleSearch} />
      </div>
      <Loading isLoading={isBusy}>
        <Space size={50} wrap className='content-cards'>
          {filteredCharacters.map(character =>
            <Link key={character.id} to={`/detail/${character.id}`}>
              <Card character={character} />
            </Link>
          )}
        </Space>
      </Loading>
    </section>
  )
}

export default Home
