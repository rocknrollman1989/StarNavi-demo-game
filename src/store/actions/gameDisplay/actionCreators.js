import GAME_DISPLAY_CONSTANTS from 'store/actionTypes/gameDisplayConstants';

export default {
  ERROR: () => ({ type: GAME_DISPLAY_CONSTANTS.ERROR }),
  SET_GAME_OPTIONS: (data) => ({ type: GAME_DISPLAY_CONSTANTS.SET_GAME_OPTIONS, data }),
  SET_GAME_VALUE: (data) => ({ type: GAME_DISPLAY_CONSTANTS.SET_GAME_VALUES, data }),
  SET_ACTIVE_CELL: (data) => ({ type: GAME_DISPLAY_CONSTANTS.SET_ACTIVE_CELL, data }),
  SET_WINNER: (data) => ({ type: GAME_DISPLAY_CONSTANTS.SET_WINNER, data }),
};
