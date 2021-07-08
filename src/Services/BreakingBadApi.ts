import IBreakingBadApi from '../Interfaces/IBreakingBadApi'
import ICharacter from '../Interfaces/ICharacter'
import axios from 'axios'
import { injectable } from 'inversify'
import container from '../DIContainer'
import 'reflect-metadata'

@injectable()
class BreakingBadApi implements IBreakingBadApi {
  // Recupera todos os personagens da API
  async fetchCharacters (): Promise<any[]> {
    try {
      const result = await axios.get('https://breakingbadapi.com/api/characters')
      if (result.data &&
        Array.isArray(result.data) &&
        result.data.length > 0) {
        return result.data
      } else {
        throw new Error('Cannot call the API')
      }
    } catch (e) {
      throw new Error('Cannot call the API')
    }
  }
  
  // Recupera um personagen da API
  async fetchCharacter (id: number): Promise<any> {
    try {
      const result = await axios.get('https://breakingbadapi.com/api/characters/' + id)
      if (result.data) {
        return result.data
      } else {
        throw new Error('Cannot call the API')
      }
    } catch (e) {
      throw new Error('Cannot call the API')
    }
  }

  parseDate (date: string): Date {
    const tokens: string[] = date.split('-')
    return new Date(`${tokens[2]}-${tokens[0]}-${tokens[1]}`)
  }

  // Converte o resposta da API em objeto do tipo ICharacter
  parseCharacterObject (object: any): ICharacter {
    const character: ICharacter = container.get<ICharacter>('ICharacter')

    character.id = object.char_id
    character.appearance = object.appearance
    character.birthdate = this.parseDate(object.birthday)
    character.img = object.img
    character.name = object.name
    character.nickname = object.nickname
    character.occupation = object.occupation
    character.portrayed = object.portrayed
    character.status = object.status

    return character
  }

  // Converte o resposta da API em objetos do tipo ICharacter
  parseCharacterObjects (objects: any[]): ICharacter[] {
    let characters: ICharacter[] = []

    characters = objects.map(o => this.parseCharacterObject(o))

    return characters
  }

  // Retorna um personagen
  async getCharacter (id: number): Promise<ICharacter> {
    return this.parseCharacterObject((await this.fetchCharacter(id))[0])
  }

  // Retorna todos os personagens
  async getAllCharacters (): Promise<ICharacter[]> {
    return this.parseCharacterObjects(await this.fetchCharacters())
  }

  async fetchEpisodes (): Promise<any[]> {
    try {
      const result = await axios.get('https://breakingbadapi.com/api/episodes')
      if (result.data &&
        Array.isArray(result.data) &&
        result.data.length > 0) {
        return result.data
      } else {
        throw new Error('Cannot call the API')
      }
    } catch (e) {
      throw new Error('Cannot call the API')
    }
  }

  async getApparences(charId: number)
}

export default BreakingBadApi
