import React from 'react'
import {
  Card as AntCard,
  Typography
} from 'antd'
import ICharacter from '../../Interfaces/ICharacter'
import './styles.scss'

interface IPropsOccupation {
  occupation: string[],
  full: Boolean
}

interface IProps {
  character: ICharacter,
  full: boolean
}

const Occupation = ({ occupation, full }: IPropsOccupation) => {
  if (full) {
    return (
      <div className='info-group'>
        <Typography.Title level={4}>Occupation</Typography.Title>
        {occupation.map((o, index) => (
          <Typography.Text key={index}>{ o }</Typography.Text>
        ))}
      </div>
    )
  } else {
    return (
      <div className='info-group'>
        <Typography.Title level={4}>Occupation</Typography.Title>
        <Typography.Text>{ occupation[0] }</Typography.Text>
      </div>
    )
  }
}

const Card: React.FC<IProps> = ({ character, full }: IProps) => {
  return (
    <AntCard className='card-character'>
      <div className='image'>
        <img src={character.img} />
      </div>
      <div className='infos'>
        <Typography.Title level={3}>{ character.nickname }</Typography.Title>
        <div className='detail'>
          <div className='info-group'>
            <Typography.Title level={4}>Name</Typography.Title>
            <Typography.Text>{ character.name }</Typography.Text>
          </div>
          <Occupation occupation={character.occupation} full={full} />
          <div className='info-group'>
            <Typography.Title level={4}>Age</Typography.Title>
            <Typography.Text>{ isNaN(character.age) ? 'Unknown' : character.age }</Typography.Text>
          </div>
          <div className='info-group'>
            <Typography.Title level={4}>Status</Typography.Title>
            <Typography.Text>{ character.status }</Typography.Text>
            </div>
        </div>
      </div>
    </AntCard>
  )
}

export default Card
