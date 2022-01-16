import { Episode } from "../../interfaces/episode";

export const getEpisode = async (id: string): Promise<Episode> => {
  const response = await fetch(`https://rickandmortyapi.com/api/episode/${id}`);
  return await response.json();
};
