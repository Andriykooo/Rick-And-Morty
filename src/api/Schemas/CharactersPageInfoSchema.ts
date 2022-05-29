export interface CharactersPageInfoSchema {
  count: number,
  pages: number,
  next: string,
  prev: string,
}

export type CharactersPageInfoTypes = {
  results: CharactersPageInfoSchema,
}
