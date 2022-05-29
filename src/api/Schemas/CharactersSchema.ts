import { type } from "os";

export interface CharacterSchema {
  created: string,
  episode: string[],
  gender: string,
  id: number,
  image: string,
  location: Location,
  name: string,
  origin: Origin,
  species: string,
  status: string,
  type: string,
  url: string,
}

type Location = {
  name: string,
  url: string,
};

type Origin = {
  name: string,
  url: string,
};

export type CharacterTypes = {
  results: CharacterSchema,
}
