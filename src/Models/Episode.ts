import { injectable } from 'inversify'
import IEpisode from '../Interfaces/IEpisode'
import 'reflect-metadata'

@injectable()
class Episode implements IEpisode {
  public id: number = 0
  public title: string = ''
  public season: number = 0
  public episode: number = 0
  public airDate: Date = new Date()
  public charactersNames: string[] = []
}

export default Episode
