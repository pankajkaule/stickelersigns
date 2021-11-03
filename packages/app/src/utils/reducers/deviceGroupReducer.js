import * as actions from '../actionTypes/index';
const deviceGroupReducer = (state, action) => {
  switch (action.type) {
    case actions.STORE_DEVICE_GROUP_DATA:
      return {
        ...state,
        ...action.payload,
        message: '',
        isError: false,
      };

    case actions.DEVICE_GROUP_ERROR:
      return {
        ...state,
        message: action.payload,
        isError: true,
      };

    case actions.SET_SELECTED_DEVICES:
      return {
        ...state,
        devices: {
          ...state.devices,
          selectedDevices: action.payload,
        },
      };

    case actions.STORE_DEVICE_GROUP_DEVICES:
      return {
        ...state,
        devices: {
          ...state.devices,
          ...action.payload,
        },
      };

    default:
      return state;
  }
};

export default deviceGroupReducer;
