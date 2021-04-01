import * as actionTypes from './podcast.types';

const INITIAL_STATE = {
  podcasts: {},
  podcastIDs: [],
  currentPodcast: {},
  items: [],
  query: '',
  loading: false,
  error: {}
};

const reducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  let updatedState;

  switch (type) {
    case actionTypes.FETCH_PODCAST_START:
    case actionTypes.SEARCH_PODCAST_START:
      return {
        ...state,
        loading: true
      };

    case actionTypes.SEARCH_PODCAST_SUCCESS:
      return {
        ...state,
        items: payload,
        loading: false
      };

    case actionTypes.FETCH_PODCAST_SUCCESS:
      updatedState = {
        ...state,
        loading: false
      };

      payload.forEach((podcast) => {
        updatedState.podcasts[podcast.collectionId] = podcast;
      });
      const podcastIDs = payload.map((podcast) => podcast.collectionId);
      updatedState.podcastIDs = podcastIDs;

      return updatedState;

    case actionTypes.FETCH_PODCAST_FAIL:
    case actionTypes.SEARCH_PODCAST_FAIL:
      return {
        ...state,
        loading: false
      };

    case actionTypes.SET_CURRENT_PODCAST:
      return {
        ...state,
        currentPodcast: payload
      };

    default:
      return state;
  }
};

export default reducer;
