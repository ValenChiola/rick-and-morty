import { useQueries } from "react-query"
import { getIdOfUrl } from "../../../utils/getIdOfUrl"
import { getEpisode } from "../../episode/api"
import { Episode } from './../../../interfaces/episode';
import { Link } from 'react-router-dom';

export const CharacterEpisodes = ({ episodeUrls }: { episodeUrls: string[] }) => {

  const episodeQuery = useQueries(
    episodeUrls.map(url => {
      const id = getIdOfUrl(url)
      return {
        queryKey: ['character', url],
        queryFn: () => getEpisode(id)
      }
    })
  )

  const episodes = episodeQuery.map(({ data }) => data) as Episode[]
  const isLoading = episodeQuery.some(({ isLoading }) => isLoading)
  const isError = episodeQuery.some(({ isError }) => isError)

  if (isLoading) {
    return <p>Cargando...</p>
  }

  if (isError) {
    return <p>Hubo un error al cargar los personajes</p>
  }

  return (
    <div>
      Episodios: {
        episodes.map(({ id, name }) => (
          <div key={id}>
            <Link to={`/episode/${id}`}>{name}</Link>
          </div>
        ))
      }
    </div>
  )
}