import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getYelpReviews } from '../Actions/UI';
import YelpReviews from './Containers/YelpReviews';

const mapDispatchToProps = (dispatch) => ({
  onComponentMount: (showing) => dispatch(getYelpReviews(showing))
});

class App extends React.Component {
  componentDidMount() {
    this.props.onComponentMount();
  }
  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <h1>Hello World</h1>
        <YelpReviews />
      </div>);
  }
}

App.propTypes = {
  onComponentMount: PropTypes.func
};

export default connect(null, mapDispatchToProps)(App);
