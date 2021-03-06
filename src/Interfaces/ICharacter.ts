interface ICharacter {
  id: number,
  name: string,
  birthdate: Date,
  age: number,
  occupation: string[],
  img: string,
  status: string,
  appearance: number[],
  nickname: string,
  portrayed: string,
  getBirthdateString(): string
}

export default ICharacter
