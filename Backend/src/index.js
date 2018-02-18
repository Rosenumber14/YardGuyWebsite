import express from 'express';
import cors from 'cors';
import yelp from './utils/yelp';

const app = express();

app.use(cors());

app.get('/yelp', (req, res) => {
  yelp.getYelpReviews()
    .then((reviews) => {
      res.send(reviews);
    })
    .catch((e) => {
      res.send(e);
    });
});

app.listen(3000);
