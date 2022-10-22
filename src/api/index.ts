import axios from "axios";
import { IMovieCard, IServerResponse } from "models";

export async function fetchMovieList(url: string) {
  const {data}: {data: IServerResponse} = await axios.get(url)
  return data.results
}
export async function fetchMovieCard(url: string) {
  const {data}: {data: IMovieCard} = await axios.get(url)
  return data
}
