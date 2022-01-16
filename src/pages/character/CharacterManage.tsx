import React from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from 'react-query';
import { getCharacter } from './api';
import { Character } from '../../interfaces/rickandmorty';
import { CharacterCard } from '../../components/CharacterCard';
import { CharacterInfo } from './components/CharacterInfo';
import { Link } from 'react-router-dom';

export const CharacterManage = () => {

  const { id = '' } = useParams()
  const { data, isLoading, isError } = useQuery<Character>(['character', id], () => getCharacter(id))

  if (isLoading) return <div>Cargando...</div>

  if (isError) return <div>Hubo un error</div>

  if (!data) return <div>No hay existe un personaje con el id {id}</div>

  return (
    <div className="container mt-3">
      <Link className="btn btn-primary mb-4" to={'/'}>Ir al Inicio</Link>
      <div className="d-flex" style={{ maxHeight: 500, wordBreak: 'break-word' }}>
        <CharacterCard {...data} />
        <CharacterInfo {...data} />
      </div>
    </div>
  )
}
