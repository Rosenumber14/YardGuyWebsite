import { RECEIVED_REVIEWS } from '../Actions/UI';

const initialState = {
  yelpReviews: []
};

const UIReducer = (state, action) => {
  if (typeof state === 'undefined') {
    return initialState;
  }

  switch (action.type) {
    case RECEIVED_REVIEWS:
      return {
        yelpReviews: action.reviews
      };
    default:
      return state;
  }
};

export default UIReducer;
