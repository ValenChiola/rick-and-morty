export const getAll = async (page: number = 1) => {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character?page=${page}`
  );
  return await response.json();
};

export const getCharacter = async (id: string) => {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/${id}`
  );
  return await response.json();
};
