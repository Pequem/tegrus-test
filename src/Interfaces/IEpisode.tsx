interface IEpisode {
  id: number,
  title: string,
  season: number,
  episode: number,
  airDate: Date,
  charactersNames: string[]
}

export default IEpisode
