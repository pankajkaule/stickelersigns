const themeReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_THEME': {
      return {
        ...state,
        theme: action.payload,
      };
    }

    case 'SET_COMPONENT_RENDER': {
      return {
        ...state,
        render: action.payload,
      };
    }

    default:
      return state;
  }
};

export default themeReducer;
