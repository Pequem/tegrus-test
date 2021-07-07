import { Container } from 'inversify'
import IBreakingBadApi from './Interfaces/IBreakingBadApi'
import BreakingBadApi from './Services/BreakingBadApi'

const containerDefinition = () => {
  const container = new Container()

  // Conecta o simbolo 'IBreakingBadApi' a implementação dele
  container.bind<IBreakingBadApi>('IBreakingBadApi').to(BreakingBadApi)

  return container
}

export default containerDefinition
