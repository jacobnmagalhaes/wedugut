import {
  actionJourneyFirst,
  actionJourneysFifth,
  actionJourneysFourth,
  actionJourneysSecond,
  actionJourneysThird,
  featuredActionJourneys,
  shortsVideos,
  youtubeVideos,
} from '../data/main.data'

const actionJourneys = [
  ...actionJourneyFirst,
  ...actionJourneysFifth,
  ...actionJourneysFourth,
  ...actionJourneysSecond,
  ...actionJourneysThird,
  ...featuredActionJourneys,
]

export const getSearchedMainData = (searchTerm: string) => {
  return {
    journeys: actionJourneys.filter(
      ({ text, name }) =>
        text.toLowerCase().includes(searchTerm) || name.toLowerCase().includes(searchTerm),
    ),
    videos: youtubeVideos.filter(
      ({ name, text }) =>
        name.toLowerCase().includes(searchTerm) || text.toLowerCase().includes(searchTerm),
    ),
    shorts: shortsVideos.filter(({ name }) => name.toLowerCase().includes(searchTerm)),
  }
}
