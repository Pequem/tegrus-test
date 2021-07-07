import IBreakingBadApi from '../Interfaces/IBreakingBadApi'
import ICharacter from '../Interfaces/ICharacter'
import axios from 'axios'
import { injectable } from 'inversify'
import 'reflect-metadata'

@injectable()
class BreakingBadApi implements IBreakingBadApi {
  // Recupera os caracteres da API
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

  // Converte o resposta da API em objetos do tipo ICharacter
  parseCharacterObjects (objects: any[]): ICharacter[] {
    let characters: ICharacter[] = []

    characters = objects.map(o => {
      o.id = o.char_id
      delete o.char_id
      return <ICharacter> o
    })

    return characters
  }

  // Retorna todos os personagens
  async getAllCharacters (): Promise<ICharacter[]> {
    return this.parseCharacterObjects(await this.fetchCharacters())
  }
}

export default BreakingBadApi
