import LEADER_BOARD from 'store/actionTypes/leaderBoardConstants';

export default {
  ERROR: () => ({ type: LEADER_BOARD.ERROR_LOAD }),
  SET_DATA: (data) => ({ type: LEADER_BOARD.SET_DATA, data: [...data] }),
};
