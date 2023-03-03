import { allActionJourneys, allFeaturedActionJourneys } from '../data/journeys.data'

export const getSearchedJourneysData = (searchTerm: string) => {
  return {
    journeys: allActionJourneys.filter(
      ({ text, name }) =>
        text.toLowerCase().includes(searchTerm) || name.toLowerCase().includes(searchTerm),
    ),
    featuredJourneys: allFeaturedActionJourneys.filter(
      ({ text, name }) =>
        text.toLowerCase().includes(searchTerm) || name.toLowerCase().includes(searchTerm),
    ),
  }
}
