import React from 'react'
import { Character } from '../../../interfaces/rickandmorty'

export const CharacterInfo = ({ origin, location, episode }: Character) => {
  return (
    <>
      <p>Origin: {origin.name}</p>
      <p>Location: {location.name}</p>
    </>
  )
}
