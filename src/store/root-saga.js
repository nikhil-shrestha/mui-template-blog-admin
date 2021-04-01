import { all, call } from 'redux-saga/effects';

import { podcastSagas } from './podcast/podcast.sagas';

export default function* rootSaga() {
  yield all([call(podcastSagas)]);
}
