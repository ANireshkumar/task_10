import axios from 'axios';

/* to make requests to the movie database */
const instance = axios.create({
  baseURL: 'http://www.omdbapi.com',
});

export default instance;
