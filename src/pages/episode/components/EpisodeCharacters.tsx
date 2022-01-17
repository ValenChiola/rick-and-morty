import { useState } from "react"
import { useQueries } from "react-query"
import { Characters } from "../../../components/Characters"
import { Filter } from "../../../components/Filter"
import { Character } from "../../../interfaces/rickandmorty"
import { getIdOfUrl } from "../../../utils/getIdOfUrl"
import { getCharacter } from "../../character/api"

export const EpisodeCharacters = ({ charactersUrls }: { charactersUrls: string[] }) => {

  const [name, setName] = useState('')

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
  const filteredCharacters = characters.filter(character =>
    character && character.name.toLowerCase().includes(name.toLowerCase())
  )
  const isLoading = characterQuery.some(({ isLoading }) => isLoading)
  const isError = characterQuery.some(({ isError }) => isError)

  if (isLoading) return <p>Cargando...</p>


  if (isError) return <p>Hubo un error al cargar los personajes</p>


  return (
    <div className="mt-4">
      <h3>
        Personajes:
      </h3>
      <div className="mt-3">
        <Filter onChange={(ref) => setName(ref.current?.value || '')} />
        <Characters characters={filteredCharacters} />
      </div>
    </div>
  )
}