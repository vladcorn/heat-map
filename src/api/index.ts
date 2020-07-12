import axios from 'axios';

const API_KEY = process.env.API_KEY;
const API_BASE_URL = process.env.API_BASE_URL;

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    Accept: 'application/json;charset=UTF-8',
    'Content-Type': 'application/json;charset=UTF-8',
    'Access-Control-Allow-Origin': '*',
    'X-Requested-With': 'XMLHttpRequest',
    'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE',
  },
});

const weatherApi = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/weather',
});

export const getWeatherFromGeolocation = (lat, long) => {
  return weatherApi
    .get(`?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`)
    .then((r) => r.data);
};

export const getTraining = () => {
  return api.get('/api/training').then((r) => r.data);
};

export const postTraining = (data) => {
  return api.post('/api/training', data).then((r) => r.data);
};
