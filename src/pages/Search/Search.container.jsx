import { connect } from 'react-redux';

import { fetchDataStart } from 'src/store/actions';

const mapStateToProps = (state) => ({
  items: state.items
});

const mapDispatchToProps = (dispatch) => ({
  onFetchDataStart: () => dispatch(fetchDataStart())
});

const container = connect(mapStateToProps, mapDispatchToProps);

export default container;
