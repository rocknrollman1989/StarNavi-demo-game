import api from './api';
import GAME_DISPLAY_ACTIONS from './actionCreators';

export const getGameOptions = () => (dispatch) => {
  api.getGameOptions()
    .then((res) => {
      const { data } = res;
      return dispatch(GAME_DISPLAY_ACTIONS.SET_GAME_OPTIONS(data));
    })
    .catch(() => dispatch(GAME_DISPLAY_ACTIONS.ERROR()));
};

export const setGameValue = (gameValue) => GAME_DISPLAY_ACTIONS.SET_GAME_VALUE(gameValue);
