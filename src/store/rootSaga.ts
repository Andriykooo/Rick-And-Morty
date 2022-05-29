import { all, fork } from "redux-saga/effects";
import { getCharactersWatchers } from '../components/CharactersList/charactersList.sagas';

export default function* rootSaga(): Generator {
  yield all([fork(getCharactersWatchers)]);
}
