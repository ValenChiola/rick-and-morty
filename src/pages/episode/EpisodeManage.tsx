import React from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import { Episode } from '../../interfaces/episode'
import { getEpisode } from './api'
import { EpisodeCharacters } from './components/EpisodeCharacters'
import { EpisodeInfo } from './components/EpisodeInfo'

export const EpisodeManage = () => {

  const { id = '' } = useParams()
  const { data, isLoading, isError } = useQuery<Episode>(["episode", id], () => getEpisode(id))

  if (isLoading) return <div>Cargando...</div>

  if (isError) return <div>Hubo un error</div>

  if (!data) return <div>No hay existe un episodio con el id {id}</div>

  return (
    <div style={{ margin: '2em 4.5em' }}>
      <EpisodeInfo {...data} />
      <EpisodeCharacters charactersUrls={data.characters} />
    </div>
  )
}
