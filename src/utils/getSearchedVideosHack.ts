import { videosHackLongsVideos, videosHackShorts } from '../data/videoshack.data'

export const getSearchedVideosHack = (searchTerm: string) => {
  return {
    videos: videosHackLongsVideos.filter(
      ({ name, text }) =>
        name.toLowerCase().includes(searchTerm) || text.toLowerCase().includes(searchTerm),
    ),
    shorts: videosHackShorts.filter(({ name }) => name.toLowerCase().includes(searchTerm)),
  }
}
