import ICharacter from './ICharacter'

interface IBreakingBadApi{
    getAllCharacters(): Promise<ICharacter[]>,
    getCharacter(id: number): Promise<ICharacter>
}

export default IBreakingBadApi
