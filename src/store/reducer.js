import * as actionTypes from './types';

const INITIAL_STATE = {
  items: [],
  query: '',
  loading: false
};

const reducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case actionTypes.FETCH_DATA_START:
      return {
        ...state,
        loading: true
      };

    case actionTypes.FETCH_DATA_SUCCESS:
      return {
        ...state,
        items: payload,
        loading: false
      };

    case actionTypes.FETCH_DATA_FAIL:
      return {
        ...state,
        loading: false
      };

    default:
      return state;
  }
};

export default reducer;
