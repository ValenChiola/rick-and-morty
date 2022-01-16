import React, { useState } from 'react';
import { GetAll } from './interfaces/rickandmorty';
import { Characters } from './components/Characters';
import { useQuery } from 'react-query';
import { getAll } from './pages/character/api';
import { Pagination } from './components/Pagination';

function App() {

  const pageState = useState(1)
  const [page] = pageState
  const { data, isLoading, isError } = useQuery<GetAll>(["characters", page], () => getAll(page))

  if (isLoading) return <div>Cargando...</div>

  if (isError) return <div>Hubo un error</div>

  if (!data) return <div>No hay Personajes</div>

  return (
    <div className="mt-4">
      <h1 className="mb-4 text-center">Rick and morty</h1>
      <Characters characters={data.results} />
      <Pagination info={data.info} pageState={pageState} />
    </div>
  );
}

export default App;
