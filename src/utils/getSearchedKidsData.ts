import { kidsActionJourneysFirst, kidsShorts, kidsLongVideos } from '../data/kids.data'

export const getSearchedKidsData = (searchTerm: string) => {
  return {
    journeys: kidsActionJourneysFirst.filter(
      ({ text, name }) =>
        text.toLowerCase().includes(searchTerm) || name.toLowerCase().includes(searchTerm),
    ),
    videos: kidsLongVideos.filter(({ name }) => name.toLowerCase().includes(searchTerm)),
    shorts: kidsShorts.filter(({ name }) => name.toLowerCase().includes(searchTerm)),
  }
}
