import { CharacterSchema } from "../../api/Schemas/CharactersSchema"

interface Actions {
  type: ActionTypes,
}

interface ActionsWithPayload<T> extends Actions {
  payload: T
}

export enum ActionTypes {
  ADD_FAVOURITE_CHARACTER = "[CharactersList] add favourite character",
  REMOVE_FAVOURITE_CHARACTER = "[CharactersList] remove favourite character",
  SET_FAVOURITE_CHARACTERS = "[CharactersList] set favourite characters",
  TRIGGER_FAVOURITE_CHARACTERS = "[CharactersList] trigger favourite character",
}

export const addFavouriteCharacter = (payload: number): ActionsWithPayload<number> => ({ type: ActionTypes.ADD_FAVOURITE_CHARACTER, payload })
export const removeFavouriteCharacter = (payload: number): ActionsWithPayload<number> => ({ type: ActionTypes.REMOVE_FAVOURITE_CHARACTER, payload })

export const setFavouriteCharacters = (payload: CharacterSchema[]): ActionsWithPayload<CharacterSchema[]> => ({ type: ActionTypes.SET_FAVOURITE_CHARACTERS, payload })
export const triggerFavouriteCharacters = (payload: number[]): ActionsWithPayload<number[]> => ({ type: ActionTypes.TRIGGER_FAVOURITE_CHARACTERS, payload })

export type trigger = ReturnType<typeof triggerFavouriteCharacters>;

export type CharacterListActions = trigger
  | ReturnType<typeof removeFavouriteCharacter>
  | ReturnType<typeof setFavouriteCharacters>
  | ReturnType<typeof triggerFavouriteCharacters>
