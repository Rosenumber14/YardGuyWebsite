const initialState = {
  buttonShowing: true
};

const UIReducer = (state, action) => {
  if (typeof state === 'undefined') {
    return initialState;
  }

  switch (action.type) {
    case 'SET_BUTTON_SHOWING':
      return {
        buttonShowing: action.buttonShowing
      };
    default:
      return state;
  }
};

export default UIReducer;
