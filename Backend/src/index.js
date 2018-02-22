import path from 'path';
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

app.get('/images/:filename', (req, res) => {
  res.sendFile(path.join(__dirname + '/images/' + req.params.filename));
});

app.get('/index_bundle.js', (req, res) => {
  res.sendFile(path.join(__dirname + '/../../Frontend/dist/index_bundle.js'));
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/../../Frontend/dist/index.html'));
});

app.listen(3000);
