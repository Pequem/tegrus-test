import ICharacter from './ICharacter'

interface IBreakingBadApi{
    getAllCharacters(): Promise<ICharacter[]>
}

export default IBreakingBadApi
