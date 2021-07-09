import { Container } from 'inversify'
import IBreakingBadApi from './Interfaces/IBreakingBadApi'
import ICharacter from './Interfaces/ICharacter'
import IEpisode from './Interfaces/IEpisode'
import Character from './Models/Character'
import Episode from './Models/Episode'
import BreakingBadApi from './Services/BreakingBadApi'

const container = new Container()

// Conecta o simbolo 'IBreakingBadApi' a implementação dele
container.bind<IBreakingBadApi>('IBreakingBadApi').to(BreakingBadApi)
container.bind<ICharacter>('ICharacter').to(Character)
container.bind<IEpisode>('IEpisode').to(Episode)

export default container
