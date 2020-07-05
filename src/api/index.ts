import axios from 'axios';
const API_KEY = '9774c2f5a696054eec0c5631cb81665a';

const api = axios.create({
  baseURL: 'http://localhost:8000',
});

const weatherApi = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/weather',
});

export const getWeatherFromGeolocation = (lat, long) => {
  return weatherApi
    .get(`?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`)
    .then((r) => r.data);
};
