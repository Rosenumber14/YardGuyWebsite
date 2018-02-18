import React from 'react';
import R from 'ramda';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const mapStateToProps = (state) => ({
  yelpReviews: state.UI.yelpReviews
});

const YelpReviews = ({ yelpReviews }) =>
  <div>{R.map((review) => <div key={review.id}>{review.text}</div>, yelpReviews)}</div>;

YelpReviews.propTypes = {
  yelpReviews: PropTypes.array
};

export default connect(mapStateToProps)(YelpReviews);
