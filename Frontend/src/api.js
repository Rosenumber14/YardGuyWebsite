import apiUtils from './utils/apiUtils';

export default {
  yelpApi: {
    getReviews: () => apiUtils.get('http://localhost:3000/yelp')
  }
};
