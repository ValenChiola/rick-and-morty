import { useQueries } from "react-query"
import { Characters } from "../../../components/Characters"
import { Character } from "../../../interfaces/rickandmorty"
import { getIdOfUrl } from "../../../utils/getIdOfUrl"
import { getCharacter } from "../../character/api"

export const EpisodeCharacters = ({ charactersUrls }: { charactersUrls: string[] }) => {

  const characterQuery = useQueries(
    charactersUrls.map(url => {
      const id = getIdOfUrl(url)
      return {
        queryKey: ['character', url],
        queryFn: () => getCharacter(id)
      }
    })
  )

  const characters = characterQuery.map(({ data }) => data) as Character[]
  const isLoading = characterQuery.some(({ isLoading }) => isLoading)
  const isError = characterQuery.some(({ isError }) => isError)

  if (isLoading) {
    return <p>Cargando...</p>
  }

  if (isError) {
    return <p>Hubo un error al cargar los personajes</p>
  }

  return (
    <div className="mt-4">
      <h3>
        Personajes:
      </h3>
      <Characters characters={characters} />
    </div>
  )
}