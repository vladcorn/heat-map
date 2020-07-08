import { GET_WEATHER } from '@root/constants';

const initialState = {
  weatherData: {},
  weatherLoaded: false,
  weatherLoadedAt: null,
};

export default function(state = initialState, { type, data }) {
  switch (type) {
    case GET_WEATHER:
      return {
        ...state,
        weatherData: data,
        weatherLoaded: true,
        weatherLoadedAt: new Date(),
      };
    default:
      return state;
  }
}
