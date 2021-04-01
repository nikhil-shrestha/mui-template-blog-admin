import { takeLatest, call, put, all } from 'redux-saga/effects';
import _ from 'lodash';

import * as actionTypes from './podcast.types';
import * as actions from './podcast.actions';

export function* listPodcastAsync({ payload: { page = 0, size = 25 } }) {
  const url = new URL('http://localhost:8080/api/v1/podcast');
  const params = { page, size };
  url.search = new URLSearchParams(params).toString();

  try {
    const resp = yield fetch(url);
    const result = yield resp.json();
    console.log(result);
    if (result.length) {
      yield put(actions.fetchPodcastSuccess(result));
    } else {
      yield put(actions.fetchPodcastFail({ message: 'Podcast Not Found' }));
    }
  } catch (err) {
    console.error(err.message);
    yield put(actions.fetchPodcastFail(err.message));
  }
  return;
}

export function* searchPodcastAsync({ payload: { query, history } }) {
  if (!_.isEmpty(query)) {
    let queryStr = query.trim();
    try {
      const resp = yield fetch(
        'http://8gc7llwtwl.execute-api.us-east-1.amazonaws.com/dev/podcast/search',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            query: queryStr
          })
        }
      );
      const result = yield resp.json();
      if (result.Items) {
        console.log(result);
        yield put(actions.searchPodcastSuccess(result.Items));
        history.push(`/search/?query=${encodeURI(query)}`);
      } else {
        console.error(result.message);
        yield put(actions.searchPodcastFail(result.message));
      }
    } catch (err) {
      console.error(err.message);
      yield put(actions.searchPodcastFail(err.message));
    }
    return;
  }

  try {
    const resp = yield fetch(
      'https://8gc7llwtwl.execute-api.us-east-1.amazonaws.com/dev/podcast/list',
      {
        method: 'GET'
      }
    );
    // const result = JSON.parse(resp);
    const result = yield resp.json();
    yield put(actions.searchPodcastSuccess(result.Items));
    if (history) {
      history.push(`/search`);
    }
  } catch (err) {
    console.error(err.message);
    yield put(actions.searchPodcastFail(err.message));
  }
}

export function* watchSearchPodcast() {
  yield takeLatest(actionTypes.SEARCH_PODCAST_START, searchPodcastAsync);
}

export function* watchListPodcast() {
  yield takeLatest(actionTypes.FETCH_PODCAST_START, listPodcastAsync);
}

export function* podcastSagas() {
  yield all([call(watchSearchPodcast), call(watchListPodcast)]);
}
