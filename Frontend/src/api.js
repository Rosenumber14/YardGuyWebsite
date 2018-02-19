import config from '../config';
import apiUtils from './utils/apiUtils';

export default {
  yelpApi: {
    getReviews: () => apiUtils.get(config.api + '/yelp')
  }
};
