import api from '../api';

export const RECEIVED_REVIEWS = 'RECEIVED_REVIEWS';

export const getYelpReviews = () => (dispatch) => {
  api.yelpApi.getReviews()
    .then((response) => {
      console.log(response); //eslint-disable-line no-console
      dispatch({
        type: RECEIVED_REVIEWS,
        reviews: response.body
      });
    });
};
