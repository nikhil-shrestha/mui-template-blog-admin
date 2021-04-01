import { combineReducers } from 'redux';

import podcastReducer from './podcast/podcast.reducer';
import playerReducer from './player/player.reducer';

const rootReducer = combineReducers({
  podcast: podcastReducer,
  player: playerReducer
});

export default rootReducer;
