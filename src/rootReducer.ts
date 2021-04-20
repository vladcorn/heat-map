import { combineReducers } from 'redux';
import weather from '@components/atoms/weatherUI/reducer';
import training from '@pages/CreateTraining/reducer';

const rootReducer = combineReducers({
  weather,
  training,
});

export default rootReducer;
