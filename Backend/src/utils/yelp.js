import yelp from 'yelp-fusion';
import config from '../../config';

const client = yelp.client(config.YelpApiKey);

let yelpReviews;
let lastRetrieval;

const getReviews = () => new Promise((resolve) => {
  client.reviews('gary-danko-san-francisco').then(response => {
    yelpReviews = response.jsonBody.reviews;
    lastRetrieval = new Date(Date.now());
    resolve(yelpReviews);
  })
    .catch(e => {
      console.log(e); //eslint-disable-line no-console
      resolve(yelpReviews);
    });
});

export default {
  getYelpReviews: () => lastRetrieval && lastRetrieval > new Date(Date.now() - 30 /*minutes*/ * 60 * 1000) ?
    Promise.resolve(yelpReviews) : getReviews()
};
