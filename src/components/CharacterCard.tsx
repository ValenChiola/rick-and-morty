import React from 'react'
import { useNavigate } from 'react-router'
import { Character } from '../interfaces/rickandmorty'


export const CharacterCard = ({ id, name, gender, species, image, seeMore }: Props) => {

  const navigate = useNavigate()

  return (
    <div className="card" style={{ width: '21rem', maxHeight: (!seeMore && 425) || '' }}>
      <img src={image} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{species} - {gender}</p>
        {seeMore && <button className="btn btn-primary" onClick={() => navigate(`/character/${id}`)}>Ver</button>}
      </div>
    </div>
  )
}

type Props = Character & {
  seeMore?: boolean
}
