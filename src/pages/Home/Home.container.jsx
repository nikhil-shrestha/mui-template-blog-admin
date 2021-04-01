import { connect } from 'react-redux';

import {
  searchPodcastStart,
  fetchPodcastStart,
  setCurrentPodcast
} from 'src/store/podcast/podcast.actions';

const mapStateToProps = (state) => ({
  items: state.podcast.items,
  isLoading: state.podcast.loading,
  podcastIDs: state.podcast.podcastIDs,
  podcasts: state.podcast.podcasts
});

const mapDispatchToProps = (dispatch) => ({
  onFetchDataStart: (query, history) =>
    dispatch(searchPodcastStart(query, history)),
  onFetchPodcastStart: (page, size) => dispatch(fetchPodcastStart(page, size)),
  onSetCurrentPodcast: (page, size) => dispatch(setCurrentPodcast(page, size))
});

const container = connect(mapStateToProps, mapDispatchToProps);

export default container;
