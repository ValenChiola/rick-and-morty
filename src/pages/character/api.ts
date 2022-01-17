export const getAll = async ({ page = 1, name = "" }: ParamValues) => {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character?page=${page}&name=${name}`
  );
  return await response.json();
};

export const getCharacter = async (id: string) => {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/${id}`
  );
  return await response.json();
};

interface ParamValues {
  page?: number;
  name?: string;
}
