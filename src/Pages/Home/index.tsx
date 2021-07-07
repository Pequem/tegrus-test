import React, { useState, useEffect } from 'react'
import { useInjection } from 'inversify-react'
import {
  Modal,
  Space
} from 'antd'
import IBreakingBadApi from '../../Interfaces/IBreakingBadApi'
import ICharacter from '../../Interfaces/ICharacter'
import Card from '../../Components/Card'
import Loading from '../../Components/LoadingWrapper'
import { Link } from 'react-router-dom'
import './styles.scss'

const Home: React.FC = () => {
  /* Essa é uma dependencia injetada, para manter um desacoplamento
  * entre a camada de Serviço e a camada de exibição com o objetivo
  * de possibilitar a implementação de testes que não dependam da API.
  * A definição do Container de dependencias está no arquivo DIContainer
  */
  const breakingBadApi: IBreakingBadApi = useInjection('IBreakingBadApi')
  const [characters, setCharacters] = useState<ICharacter[]>([])

  const fillCharacters = async () => {
    try {
      setCharacters(await breakingBadApi.getAllCharacters())
    } catch (e) {
      Modal.error({
        title: 'Ocorreu um erro.',
        content: e.message
      })
    }
  }

  useEffect(() => {
    fillCharacters()
  }, [])

  return (
    <Loading isLoading={characters.length === 0}>
      <Space size={50} wrap className='content-cards'>
        {characters.map(character =>
          <Link key={character.id} to={`/detail/${character.id}`}>
            <Card character={character} />
          </Link>
        )}
      </Space>
    </Loading>
  )
}

export default Home
