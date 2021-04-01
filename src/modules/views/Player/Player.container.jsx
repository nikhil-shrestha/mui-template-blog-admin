import { connect } from 'react-redux';

import {
  setPlayerCurrentTrack,
  togglePlayPause
} from 'src/store/player/player.actions';

const mapStateToProps = (state) => ({
  currentEpisode: state.player.currentTrack,
  podcast: state.podcast.currentPodcast
});

const mapDispatchToProps = (dispatch) => ({
  onTogglePlayPause: (value) => dispatch(togglePlayPause(value)),
  onSetPlayerCurrentTrack: (id) => dispatch(setPlayerCurrentTrack(id))
});

const container = connect(mapStateToProps, mapDispatchToProps);

export default container;
