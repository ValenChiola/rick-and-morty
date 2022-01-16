import React from 'react'
import { Character } from '../interfaces/rickandmorty'
import { CharacterCard } from './CharacterCard'

export const Characters = ({ characters }: Props) => (
  <div style={{ display: 'grid', gridTemplateColumns: 'auto auto auto auto', gap: 10, justifyContent: 'center' }}>
    {
      characters.map(character => (
        <CharacterCard key={character.id} {...character} seeMore />
      ))
    }
  </div>
)


interface Props {
  characters: Character[]
}
