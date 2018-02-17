import config from '../config';
import yelp from './utils/yelp';
import express from 'express';
const app = express()


app.get('/yelp', function (req, res) {
  yelp.getYelpReviews()
  .then((reviews) => {
    res.send(reviews);
  })
  .catch((e) => {
    res.send(e)
  })
})

app.listen(3000)
