
import GAME_DISPLAY_CONSTANTS from 'store/actionTypes/gameDisplayConstants';

const initialState = {
  isError: false,
  gameOptions: null,
  selectedGameValue: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GAME_DISPLAY_CONSTANTS.SET_GAME_OPTIONS:
      return {
        ...state,
        gameOptions: action.data,
      };
    case GAME_DISPLAY_CONSTANTS.SET_GAME_VALUES:
      return {
        ...state,
        selectedGameValue: state.gameOptions[action.data],
      };
    case GAME_DISPLAY_CONSTANTS.ERROR:
      return {
        ...state,
        isError: true,
      };
    default: return state;
  }
};
