import React, { useState, useEffect } from 'react'
import { useInjection } from 'inversify-react'
import {
  Modal,
  Typography
} from 'antd'
import IBreakingBadApi from '../../Interfaces/IBreakingBadApi'
import ICharacter from '../../Interfaces/ICharacter'
import Loading from '../../Components/LoadingWrapper'
import { useParams } from 'react-router'
import CardDetail from '../../Components/CardDetail'

interface IParams {
  id: string
}

const Home: React.FC = () => {
  const breakingBadApi: IBreakingBadApi = useInjection('IBreakingBadApi')
  const [character, setCharacter] = useState<ICharacter|null>(null)
  const params = useParams<IParams>()

  const loadingData = async () => {
    try {
      setCharacter(await breakingBadApi.getCharacter(parseInt(params.id)))
    } catch (e) {
      Modal.error({
        title: 'Ocorreu um erro.',
        content: e.message
      })
    }
  }

  console.log(character)

  useEffect(() => {
    loadingData()
  }, [])

  return (
    <>
    <section>
      <div className='head'>
        <Typography.Title level={1}>{character?.nickname}</Typography.Title>
      </div>
      <Loading isLoading={character === null}>
        {character && <CardDetail character={character} />}
      </Loading>
    </section>
    <section>
      <div className='head'>
        <Typography.Title level={1}>Apparitions</Typography.Title>
      </div>
    </section>
    </>
  )
}

export default Home
