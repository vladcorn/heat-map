import { GET_WEATHER } from '@root/constants';
import { getWeatherFromGeolocation } from '@root/api';

export function getWeather() {
  return function(dispatch) {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        getWeatherFromGeolocation(
          pos.coords.latitude,
          pos.coords.longitude
        ).then((data) => dispatch({ type: GET_WEATHER, data: data }));
      },
      (err) => {
        console.error(err);
      },
    );
  };
}
