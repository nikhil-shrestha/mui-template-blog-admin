import { takeLatest, call, put, all } from 'redux-saga/effects';
import _ from 'lodash';

import * as actionTypes from './types';
import { fetchDataSuccess, fetchDataFail } from './actions';

export function* watchFetchDataAsync({ payload: { query, history } }) {
  if (!_.isEmpty(query)) {
    let queryStr = query.trim();
    try {
      const resp = yield fetch(
        'https://8gc7llwtwl.execute-api.us-east-1.amazonaws.com/dev/podcast/search',
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
        yield put(fetchDataSuccess(result.Items));
        history.push(`/search/?query=${encodeURI(query)}`);
      } else {
        console.error(result.message);
        yield put(fetchDataFail(result.message));
      }
    } catch (err) {
      console.error(err.message);
      yield put(fetchDataFail(err.message));
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
    yield put(fetchDataSuccess(result.Items));
    if (history) {
      history.push(`/search`);
    }
  } catch (err) {
    console.error(err.message);
    yield put(fetchDataFail(err.message));
  }
}

export function* watchFetchData() {
  yield takeLatest(actionTypes.FETCH_DATA_START, watchFetchDataAsync);
}

export default function* rootSaga() {
  yield all([call(watchFetchData)]);
}
