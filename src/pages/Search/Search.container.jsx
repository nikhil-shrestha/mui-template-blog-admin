import { connect } from 'react-redux';

import { searchPodcastStart } from 'src/store/podcast/podcast.actions';

const mapStateToProps = (state) => ({
  items: state.podcast.items
});

const mapDispatchToProps = (dispatch) => ({
  onFetchDataStart: () => dispatch(searchPodcastStart())
});

const container = connect(mapStateToProps, mapDispatchToProps);

export default container;
