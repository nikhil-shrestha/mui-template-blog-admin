import { connect } from 'react-redux';

import {
  searchPodcastStart,
  fetchPodcastStart
} from 'src/store/podcast/podcast.actions';

import { setPlayerCurrentTrack } from 'src/store/player/player.actions';
import { selectPodcastForPreview } from 'src/store/podcast/podcast.selectors';

const mapStateToProps = (state, props) => ({
  items: state.items,
  podcast: selectPodcastForPreview(props.match.params.id)(state)
});

const mapDispatchToProps = (dispatch) => ({
  onFetchDataStart: (query, history) =>
    dispatch(searchPodcastStart(query, history)),
  onFetchPodcastStart: (page, size) => dispatch(fetchPodcastStart(page, size)),
  onSetPlayerCurrentTrack: (episode) => dispatch(setPlayerCurrentTrack(episode))
});

const container = connect(mapStateToProps, mapDispatchToProps);

export default container;
