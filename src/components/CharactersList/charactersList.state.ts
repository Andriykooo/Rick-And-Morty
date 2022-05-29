import { CharacterSchema } from "../../api/Schemas/CharactersSchema";

export interface CharactersListState {
  favouriteCharactersIds: number[],
  favouriteCharacters: CharacterSchema[],
}
