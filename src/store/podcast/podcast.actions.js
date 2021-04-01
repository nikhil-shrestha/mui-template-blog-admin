import * as actionType from './podcast.types';

export const searchPodcastStart = (query, history) => ({
  type: actionType.SEARCH_PODCAST_START,
  payload: { query, history }
});

export const searchPodcastSuccess = (data) => ({
  type: actionType.SEARCH_PODCAST_SUCCESS,
  payload: data
});

export const searchPodcastFail = (error) => ({
  type: actionType.SEARCH_PODCAST_FAIL,
  payload: { error }
});

export const fetchPodcastStart = (page, size) => ({
  type: actionType.FETCH_PODCAST_START,
  payload: { page, size }
});

export const fetchPodcastSuccess = (data) => ({
  type: actionType.FETCH_PODCAST_SUCCESS,
  payload: data
});

export const fetchPodcastFail = (error) => ({
  type: actionType.FETCH_PODCAST_FAIL,
  payload: { error }
});
export const setCurrentPodcast = (data) => ({
  type: actionType.SET_CURRENT_PODCAST,
  payload: data
});
