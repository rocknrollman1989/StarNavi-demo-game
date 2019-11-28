import moment from 'moment';
import api from './api';
import GAME_DISPLAY_ACTIONS from './actionCreators';
import { getLeaderList } from '../leaderBoard';

export const getGameOptions = () => (dispatch) => {
  api.getGameOptions()
    .then((res) => {
      const { data } = res;
      return dispatch(GAME_DISPLAY_ACTIONS.SET_GAME_OPTIONS(data));
    })
    .catch(() => dispatch(GAME_DISPLAY_ACTIONS.ERROR()));
};

export const setWinner = (value) => (dispatch) => {
  const momentDate = moment().format('HH:mm; DD MMMM YYYY');

  const gamerDataToSend = {
    winner: value,
    date: momentDate,
  };
  api.postWinnerResault(gamerDataToSend)
    .then(() => {
      dispatch(getLeaderList());
      return dispatch(GAME_DISPLAY_ACTIONS.SET_WINNER(value));
    })
    .catch(() => {
      dispatch(GAME_DISPLAY_ACTIONS.ERROR());
    });
};

export const setGameValue = (gameValue) => GAME_DISPLAY_ACTIONS.SET_GAME_VALUE(gameValue);
export const setActiveCell = (value) => GAME_DISPLAY_ACTIONS.SET_ACTIVE_CELL(value);
export const clearWinner = () => GAME_DISPLAY_ACTIONS.CLEAR_WINNER_NAME();
