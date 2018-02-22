import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../styles/styles.less';

import { getYelpReviews } from '../Actions/UI';
import Header from './Containers/Header';

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
      <div className={'app'}>
        <Header />
        <div className='bar' style={{ backgroundColor: '#a1ce92' }}>
          <YelpReviews />
        </div>
        <div className='bar' style={{ backgroundColor: '#92c0ce' }}>
          <YelpReviews />
        </div>
      </div>);
  }
}

App.propTypes = {
  onComponentMount: PropTypes.func
};

export default connect(null, mapDispatchToProps)(App);
