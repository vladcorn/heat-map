import { combineReducers } from 'redux';
import weather from '@components/atoms/weatherUI/reducer';

const rootReducer = combineReducers({
  weather,
});

export default rootReducer;
