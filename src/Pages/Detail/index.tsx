import React, { useState, useEffect } from 'react'
import { useInjection } from 'inversify-react'
import {
  Modal,
  Typography
} from 'antd'
import { useParams } from 'react-router'
import IBreakingBadApi from '../../Interfaces/IBreakingBadApi'
import ICharacter from '../../Interfaces/ICharacter'
import Loading from '../../Components/LoadingWrapper'
import CardDetail from '../../Components/CardDetail'
import IEpisode from '../../Interfaces/IEpisode'
import TableApparitions from '../../Components/TableApparitions'

interface IParams {
  id: string
}

const Home: React.FC = () => {
  const breakingBadApi: IBreakingBadApi = useInjection('IBreakingBadApi')
  const [character, setCharacter] = useState<ICharacter|null>(null)
  const [episodes, setEpisodes] = useState<IEpisode[]>([])
  const params = useParams<IParams>()

  // carrega os dados iniciais
  const loadingData = async () => {
    try {
      setCharacter(await breakingBadApi.getCharacter(parseInt(params.id)))
      setEpisodes(await breakingBadApi.getAllEpisodes())
    } catch (e) {
      Modal.error({
        title: 'Ocorreu um erro.',
        content: e.message
      })
    }
  }

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
      <Loading isLoading={character === null}>
        {character && <TableApparitions episodes={episodes} character={character} />}
      </Loading>
    </section>
    </>
  )
}

export default Home
