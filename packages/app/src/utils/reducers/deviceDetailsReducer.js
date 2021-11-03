import deviceDetailsStore from 'utils/stores/deviceDetailsStore';
import * as actions from '../actionTypes/index';
const deviceDetailsReducer = (state, action) => {
  switch (action.type) {
    case actions.STORE_DEVICE_DETAILS_DATA:
      return {
        ...state,
        device: { ...state.device, ...action.payload },
        message: '',
        isError: false,
      };

    case actions.DEVICE_DETAILS_ERROR:
      return {
        ...state,
        message: action.payload,
        isError: true,
      };

    case actions.TOGGLE_DEVICE_CHANGES_CONFIRMATION_DIALOG:
      return {
        ...state,
        showConfirmationDialog: action.payload,
      };

    case actions.DEVICE_DETAILS_CHANGED:
      return {
        ...state,
        isChanged: action.payload,
      };

    case actions.SAVE_DEVICE_DETAILS_CHANGES:
      return {
        ...state,
        isSaveChanges: action.payload,
      };

    case actions.CANCEL_DEVICE_DETAILS_CHANGES:
      return {
        ...state,
        isCancelChanges: action.payload,
      };

    case actions.DEVICE_TAB_VALUE:
      return {
        ...state,
        tabValue: action.payload,
      };

    case actions.DEVICE_TAB_VALUE_TO_BE:
      return {
        ...state,
        tabValueToBeSet: action.payload,
      };

    case actions.INITIALIZE_DEVICE_DETAILS:
      return {
        ...deviceDetailsStore,
      };

    case actions.SET_DEVICE_DETAILS_LOADER:
      return {
        ...state,
        loader: action.payload,
      };

    default:
      return state;
  }
};

export default deviceDetailsReducer;
