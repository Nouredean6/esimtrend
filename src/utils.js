import axios from 'axios';

const fetchAPI = axios.create({
  baseURL: 'https://resellerapi.montyesim.com/api/v0',
});

// Add a request interceptor to include the access token in the headers
fetchAPI.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      config.headers['Access-Token'] = accessToken;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default fetchAPI;
