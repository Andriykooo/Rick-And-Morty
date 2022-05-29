import { CharacterSchema } from "../../api/Schemas/CharactersSchema";
import { AppState } from "../../store/state";

export const getFavouriteCharactersIds = ({ charactersListReducer: { favouriteCharactersIds } }: AppState): number[] => favouriteCharactersIds;
export const getFavouriteCharacters = ({ charactersListReducer: { favouriteCharacters } }: AppState): CharacterSchema[] => favouriteCharacters;
