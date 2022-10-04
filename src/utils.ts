import { Genre } from "./models";

const parsedGenres = (genres: Genre[]) => genres.map((item) => item.name).join(", ");

const parsedRuntime = (runtime: number) => {
  const hours = Math.floor(runtime / 60);
  const minutes = runtime % 60;
  return `${hours}h ${minutes}min`;
};

export { parsedGenres, parsedRuntime };
