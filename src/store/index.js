import {
  createStore, applyMiddleware, combineReducers, compose,
} from 'redux';
import thunk from 'redux-thunk';
import leaderBoardReducer from './reducers/leaderBoardReducer';
import gameDisplayReducer from './reducers/gameDisplayReducer';

const reducers = combineReducers({
  leaderBoard: leaderBoardReducer,
  gameDisplay: gameDisplayReducer,
});
/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  composeEnhancers(
    applyMiddleware(thunk),
  ),
);

export default store;
