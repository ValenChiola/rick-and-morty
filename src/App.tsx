import React, { useState } from 'react';
import { GetAll } from './interfaces/rickandmorty';
import { Characters } from './components/Characters';
import { useQuery } from 'react-query';
import { getAll } from './pages/character/api';
import { Pagination } from './components/Pagination';
import { Filter } from './components/Filter';

function App() {

  const pageState = useState(1)
  const [page] = pageState
  const [name, setName] = useState('')
  const { data, isLoading, isError } = useQuery<GetAll>(["characters", page, name], () => getAll({ page, name }))

  const onSubmit = (ref: React.RefObject<HTMLInputElement>) => {
    if (!ref.current) return
    setName(ref.current.value)
    ref.current.value = ''
  }

  if (isLoading) return <div>Cargando...</div>

  if (isError) return <div>Hubo un error</div>

  if (data?.error) return <div>No hay Personajes </div>

  if (!data) return null

  return (
    <div className="mt-4">
      <h1 className="mb-4 text-center">Rick and morty</h1>
      <div className="d-flex justify-content-center">
        <Filter onSubmit={onSubmit} style={{ width: '90.5%' }} />
      </div>
      <Characters characters={data.results} />
      <Pagination info={data.info} pageState={pageState} />
    </div>
  );
}

export default App;
