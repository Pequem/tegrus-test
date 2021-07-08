import { injectable } from 'inversify'
import ICharacter from '../Interfaces/ICharacter'
import 'reflect-metadata'

@injectable()
class Character implements ICharacter {
  public id: number = 0
  public name: string = ''
  public birthdate: Date = new Date()
  public occupation: string[] = []
  public img: string = ''
  public status: string = ''
  public appearance: number[] = []
  public nickname: string = ''
  public portrayed: string = ''

  get age (): number {
    const ageDifMs = Date.now() - this.birthdate.getTime()
    const ageDate = new Date(ageDifMs) // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970)
  }
}

export default Character
