import { put, takeEvery, all, call } from 'redux-saga/effects';
import { SagaIterator } from "@redux-saga/types";

import { loadData } from '../../api/Characters/CharactersReposittory';
import * as charactersListActions from './charactersList.actions';



function* getCharactersWorker(action: charactersListActions.trigger): SagaIterator {
  const characters = yield call(loadData.getFavouriteCharacters, action.payload);

  yield put(charactersListActions.setFavouriteCharacters(characters));
};

export function* getCharactersWatchers(): SagaIterator {
  yield all([
    takeEvery(charactersListActions.ActionTypes.TRIGGER_FAVOURITE_CHARACTERS, getCharactersWorker),
  ])
};
