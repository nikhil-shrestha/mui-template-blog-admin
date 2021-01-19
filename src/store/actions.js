import * as actionType from './types';

export const fetchDataStart = (query, history) => ({
  type: actionType.FETCH_DATA_START,
  payload: { query, history }
});

export const fetchDataSuccess = (data) => ({
  type: actionType.FETCH_DATA_SUCCESS,
  payload: data
});

export const fetchDataFail = (error) => ({
  type: actionType.FETCH_DATA_FAIL,
  payload: { error }
});
