import { POST_TRAINING } from '@root/constants';

const initialState = {
  date: new Date().getTime(),
  exercises: [],
};

export default function(state = initialState, { type, data }) {
  switch (type) {
    case POST_TRAINING:
      return {
        ...data,
      };
    default:
      return state;
  }
}
