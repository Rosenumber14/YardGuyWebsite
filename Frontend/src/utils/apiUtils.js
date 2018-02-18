import xhr from 'xhr-promise-redux';

const get = (url) => xhr.get(url, {
  responseType: 'json'
});

export default {
  get
};
