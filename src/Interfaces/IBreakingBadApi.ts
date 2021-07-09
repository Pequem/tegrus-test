import ICharacter from './ICharacter'
import IEpisode from './IEpisode'

interface IBreakingBadApi {
  getAllCharacters(): Promise<ICharacter[]>,
  getCharacter(id: number): Promise<ICharacter>,
  getAllEpisodes (): Promise<IEpisode[]>
}

export default IBreakingBadApi
