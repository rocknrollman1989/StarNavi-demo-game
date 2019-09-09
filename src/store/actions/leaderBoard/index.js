
import api from './api';
import LEADER_BOARD_ACTIONS from './actionCreators';

export const getLeaderList = () => (dispatch) => {
  api.getLeaderlist()
    .then((res) => {
      const { data } = res;
      return dispatch(LEADER_BOARD_ACTIONS.SET_DATA(data));
    })
    .catch(() => dispatch(LEADER_BOARD_ACTIONS.ERROR()));
};

export default getLeaderList;
