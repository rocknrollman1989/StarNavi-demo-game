import axios from 'axios';

export default {
  getLeaderlist: () => (
    axios.get('/winners')
  ),
};
