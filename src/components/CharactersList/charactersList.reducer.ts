import { ActionTypes, CharacterListActions } from "./charactersList.actions";

const initialState = {
  favouriteCharactersIds: [],
  favouriteCharacters: [],
}

export const charactersListReducer = (state = initialState, action: CharacterListActions) => {
  switch (action.type) {
    case ActionTypes.ADD_FAVOURITE_CHARACTER:
      return {
        ...state,
        favouriteCharactersIds: [...state.favouriteCharactersIds, action.payload]
      }
    case ActionTypes.REMOVE_FAVOURITE_CHARACTER:
      return {
        ...state,
        favouriteCharactersIds: state.favouriteCharactersIds.filter(characterId => characterId !== action.payload)
      }
    case ActionTypes.SET_FAVOURITE_CHARACTERS:
      return {
        ...state,
        favouriteCharacters: action.payload,
      }
    default:
      return state;
  }
}
