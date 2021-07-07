import React from 'react'
import {
  Card as AntCard
} from 'antd'
import ICharacter from '../../Interfaces/ICharacter'
import './styles.scss'

interface IProps {
  character: ICharacter
}

const Card: React.FC<IProps> = ({ character }: IProps) => {
  return (
    <AntCard className='card-character'>
      <img src={character.img} />
    </AntCard>
  )
}

export default Card
