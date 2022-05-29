import { combineReducers } from 'redux';

import { charactersListReducer } from '../components/CharactersList/charactersList.reducer';

export const reducer = combineReducers({
  charactersListReducer,
});
