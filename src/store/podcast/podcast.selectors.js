import { createSelector } from 'reselect';
import _ from 'lodash';

const podcastSelector = (state) => state.podcast;

export const podcastCollections = createSelector(
  [podcastSelector],
  (state) => state.podcasts
);

export const selectPodcastForPreview = (podcastID) =>
  createSelector([podcastCollections], (podcastCollections) => {
    return !_.isEmpty(podcastCollections) ? podcastCollections[podcastID] : {};
  });
