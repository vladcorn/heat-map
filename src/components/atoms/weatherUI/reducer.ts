import { GET_WEATHER } from '@root/constants';

const initialState = {
  weather: {},
  weatherLoaded: false,
  weatherLoadedAt: null,
};

export default function(state = initialState, { type, data }) {
  switch (type) {
    case GET_WEATHER:
      return {
        ...state,
        weather: data,
        weatherLoaded: true,
        weatherLoadedAt: new Date(),
      };
    default:
      return state;
  }
}
