import { POST_TRAINING } from '@root/constants';
import { postTraining } from '@root/api';

export function createTraining(data) {
  return function(dispatch) {
    postTraining(data)
      .then((data) => {
        console.log('ACTION_DATA', data);
        return dispatch({ type: POST_TRAINING, data: data });
      })
      .then((err) => console.error(err));
  };
}
