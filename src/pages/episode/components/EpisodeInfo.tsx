import React from 'react'
import { Link } from 'react-router-dom'
import { Episode } from '../../../interfaces/episode'

export const EpisodeInfo = ({ name, air_date, episode }: Episode) => (
  <>
    <Link className="btn btn-primary mb-4" to={'/'}>Ir al Inicio</Link>
    <h3>Nombre: {name}</h3>
    <h3>Fecha de emisión: {air_date}</h3>
    <h3>Episodio: {episode}</h3>
  </>
)