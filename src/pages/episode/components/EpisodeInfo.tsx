import React from 'react'
import { Link } from 'react-router-dom'
import { Episode } from '../../../interfaces/episode'
import { EpisodeCharacters } from './EpisodeCharacters'

export const EpisodeInfo = ({ name, air_date, episode, characters }: Episode) => (
  <>
    <nav className="navbar" style={{ backgroundColor: '#9c33ff', color: '#fff' }}>
      <div className="container-fluid justify-content-center">
        <span className="navbar-brand mb-0 h1" style={{ fontWeight: 'bold' }}>{name}</span>
      </div>
    </nav>
    <div className="container m-5">
      <Link className="btn btn-primary mb-4" to={'/'}>Ir al Inicio</Link>
      <h3>Fecha de emisión: {air_date}</h3>
      <h3>Episodio: {episode}</h3>
      <EpisodeCharacters charactersUrls={characters} />
    </div>
  </>
)