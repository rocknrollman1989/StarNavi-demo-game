import axios from 'axios';

export default () => {
  axios.defaults.baseURL = 'https://starnavi-frontend-test-task.herokuapp.com/';
};
