import React from 'react'
import { Character } from '../../../interfaces/rickandmorty'
import { CharacterEpisodes } from './CharacterEpisodes';

export const CharacterInfo = ({ origin, location, episode }: Character) => {
  return (
    <div className="mx-4">
      <p>Origin: {origin.name}</p>
      <p>Location: {location.name}</p>
      <div>
        <CharacterEpisodes episodeUrls={episode} />
      </div>
    </div>
  )
}
