import React from 'react'
import { Card } from 'antd'
import ICharacter from '../../Interfaces/ICharacter'
import IEpisode from '../../Interfaces/IEpisode'
import './styles.scss'

interface IProps {
  episodes: IEpisode[],
  character: ICharacter
}

const TableApparitions = ({ episodes, character }: IProps) => {
  const getSizeOfBiggestSeason = (): number => {
    return episodes.reduce<number>(
      (current, episode) => (current > episode.episode ? current : episode.episode),
      0
    )
  }

  const getSeasonCount = (): number => {
    return episodes.reduce<number>(
      (current, episode) => (current > episode.season ? current : episode.season),
      0
    )
  }

  const getEpisodesBySeason = (season: number): (IEpisode|null)[] => {
    return episodes.filter(epidose => epidose.season === season).sort((a, b) => a.episode - b.episode)
  }

  const checkApparition = (episode: IEpisode) => {
    return episode.charactersNames.filter(charName => {
      return character.name.localeCompare(charName) === 0
    }).length > 0
  }

  console.log(getSizeOfBiggestSeason())
  console.log(episodes)

  return (
    <div className='align-center'>
      <Card className='table-apparitions'>
        <table>
          <thead>
            <tr>
              <th key={0}></th>
              {
                Array(getSizeOfBiggestSeason()).fill(0).map((_, index) => (
                    <th key={index + 1}>EP {index + 1}</th>
                ))
              }
            </tr>
          </thead>
          <tbody>
            {
              Array(getSeasonCount()).fill(0).map((_, indexSeason) => (
                <tr key={indexSeason}>
                  <td>Season {indexSeason + 1}</td>
                  {
                    Array(getSizeOfBiggestSeason()).fill(0).map((_, index) => (
                      getEpisodesBySeason(indexSeason + 1)[index]
                        ? checkApparition(getEpisodesBySeason(indexSeason + 1)[index]!)
                          ? <td className='yes'>Yes</td>
                          : <td className='no'>No</td>
                        : <td className='no-ep'>-</td>
                    ))
                  }
                </tr>
              ))
            }
          </tbody>
        </table>
      </Card>
    </div>
  )
}

export default TableApparitions
