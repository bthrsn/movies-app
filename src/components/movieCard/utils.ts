import { IGenre } from "models";

export const parsedRuntime = (runtime: number) => {
  const hours = Math.floor(runtime / 60);
  const minutes = runtime % 60;
  return `${hours}h ${minutes}min`;
};

export const parsedGenres = (genres: IGenre[]) => {
  return genres?.map(item => item.name).join(', ');
};
