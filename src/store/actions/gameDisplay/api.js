import axios from 'axios';

export default {
  getGameOptions: () => axios.get('/game-settings'),
  postWinnerResault: (data) => axios.post('/winners', data),
};
