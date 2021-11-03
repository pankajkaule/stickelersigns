import * as actions from '../actionTypes/index';
const userReducer = (state, action) => {
  switch (action.type) {
    case actions.STORE_USER_DATA:
      return {
        ...state,
        ...action.payload,
      };

    case actions.GLOBAL_SHOW_ALERT:
      return {
        ...state,
        show: true,
        ...action.payload,
      };

    case actions.GLOBAL_HIDE_ALERT:
      return {
        ...state,
        show: false,
        message: '',
        variant: 'success',
      };

    case actions.GLOBAL_SHOW_LOADER:
      return {
        ...state,
        globalLoader: true,
      };

    case actions.GLOBAL_HIDE_LOADER:
      return {
        ...state,
        globalLoader: false,
      };

    case actions.GLOBAL_FILTER_SHOW:
      return {
        ...state,
        globalFilter: true,
      };

    case actions.GLOBAL_FILTER_HIDE:
      return {
        ...state,
        globalFilter: false,
      };

    case actions.SET_GLOBAL_CLIENT_LIST:
      return {
        ...state,
        clientsContainer: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
