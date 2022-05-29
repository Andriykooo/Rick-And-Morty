export interface CharacterLocationSchema {
  id: number,
  name: string,
  type: string,
  dimension: string,
  residents: string[],
  url: string,
  created: string,
}

export type CharacterLocationTypes = {
  results: CharacterLocationSchema,
}
