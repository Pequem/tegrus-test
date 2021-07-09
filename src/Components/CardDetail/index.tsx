import React from 'react'
import {
  Card as AntCard,
  Typography
} from 'antd'
import ICharacter from '../../Interfaces/ICharacter'
import './styles.scss'

interface IProps {
  character: ICharacter
}

// Seção de detalhes da pagina detail
const CardDetail: React.FC<IProps> = ({ character }: IProps) => {
  return (
    <div className='card-detail'>
      <div className='image'>
        <img src={character.img} />
      </div>
      <AntCard className='card-detail-character'>
        <div className='infos'>
          <div className='detail'>
            <div className='info-group'>
              <Typography.Title level={4}>Name</Typography.Title>
              <Typography.Text>{character.name}</Typography.Text>
            </div>
            <div className='info-group'>
              <Typography.Title level={4}>Occupation</Typography.Title>
              <div className='occupation-list'>
                {character.occupation.map((occupation, index) => (
                  <Typography.Text key={index}>{occupation}</Typography.Text>
                ))}
              </div>
            </div>
            <div className='info-group'>
              <Typography.Title level={4}>Birthdate</Typography.Title>
              <Typography.Text>
                {character.getBirthdateString()} ({isNaN(character.age) ? 'Unknown' : character.age + ' old'})
              </Typography.Text>
            </div>
            <div className='info-group'>
              <Typography.Title level={4}>Portrayer</Typography.Title>
              <Typography.Text>{character.portrayed}</Typography.Text>
            </div>
            <div className='info-group'>
              <Typography.Title level={4}>Status</Typography.Title>
              <Typography.Text>{character.status}</Typography.Text>
            </div>
          </div>
        </div>
      </AntCard>
    </div>
  )
}

export default CardDetail
