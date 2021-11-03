import * as actions from '../actionTypes/index';
const deviceReducer = (state, action) => {
  switch (action.type) {
    case actions.STORE_DEVICE_DATA:
      return {
        ...state,
        ...action.payload,
        message: '',
        isError: false,
      };

    case actions.DEVICE_ERROR:
      return {
        ...state,
        message: action.payload,
        isError: true,
      };

    case actions.SET_SELECTED_DEVICE_INDEX:
      return {
        ...state,
        selectedIndex: action.payload,
      };

    default:
      return state;
  }
};

export default deviceReducer;
