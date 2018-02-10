import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { setButtonShowing } from '../../Actions/UI';

const mapStateToProps = (state) => ({
  buttonShowing: state.UI.buttonShowing //TODO: use selectors
});

const mapDispatchToProps = (dispatch) => ({
  onClickButton: (showing) => dispatch(setButtonShowing(showing))
});

const ButtonManager = ({ buttonShowing, onClickButton }) => (
  <div onClick={() => onClickButton(!buttonShowing)} style={{ textAlign: 'center' }}>
    <h1>{'test'}{buttonShowing.toString()}</h1>
  </div>);

ButtonManager.propTypes = {
  buttonShowing: PropTypes.boolean,
  onClickButton: PropTypes.function
};

export default connect(mapStateToProps, mapDispatchToProps)(ButtonManager);
