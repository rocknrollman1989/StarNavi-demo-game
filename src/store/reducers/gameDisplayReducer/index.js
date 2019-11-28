
import GAME_DISPLAY_CONSTANTS from 'store/actionTypes/gameDisplayConstants';

const initialState = {
  isError: false,
  gameOptions: null,
  selectedGameValue: null,
  activeCell: 2,
  winner: '',
  gamerName: '',
};

export default (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case GAME_DISPLAY_CONSTANTS.SET_GAME_OPTIONS:
      return {
        ...state,
        gameOptions: action.data,
      };
    case GAME_DISPLAY_CONSTANTS.SET_GAME_VALUES:
      return {
        ...state,
        selectedGameValue: state.gameOptions[action.data.gameMode],
        gamerName: action.data.userName,
      };
    case GAME_DISPLAY_CONSTANTS.ERROR:
      return {
        ...state,
        isError: true,
      };
    case GAME_DISPLAY_CONSTANTS.SET_ACTIVE_CELL:
      return {
        ...state,
        activeCell: action.data,
      };
    case GAME_DISPLAY_CONSTANTS.SET_WINNER:
      return {
        ...state,
        winner: action.data,
      };
    default: return state;
  }
};
