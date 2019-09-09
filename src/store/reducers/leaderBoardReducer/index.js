import LEADER_BOARD from 'store/actionTypes/leaderBoardConstants';

const initialState = {
  leaderList: null,
  isError: false,
};

const leaderBoardReducer = (state = initialState, action) => {
  switch (action.type) {
    case LEADER_BOARD.SET_DATA:
      return {
        ...state,
        leaderList: [...action.data],
        isError: false,
      };
    case LEADER_BOARD.ERROR:
      return {
        ...state,
        isError: true,
      };
    default:
      return state;
  }
};

export default leaderBoardReducer;
