import axios from 'axios';
import * as actions from 'utils/actionTypes';
import { getAuthToken } from 'utils/helpers/localstorage';
import { responseErrorValidator } from 'utils/helpers/other';
import authService from './auth';

const all_user_endpoint = 'user/all/users';
const create_user_endpoint = 'user/register';
const update_user_endpoint = 'user/updateUser';
const user_info_endpoint = (id) => `user/getUser/${id}`;
const roles_endpoint = '/role/allRoles';
const user_deactivate_endpoint = (id) => `user/deactivate/${id}`;
const user_delete_endpoint = (id) => `user/delete/${id}`;
const user_reactivate_endpoint = (id) => `user/reactivate/${id}`;
const user_reset_password = 'user/user/reset-password';
const user_activate = 'user/user/activate-user';

const userMessageEnum = {
  update: 'User updated successfully',
  deactivate: 'User deactivated successfully',
  reset: 'User Password reset successfully',
  activate: 'User Activated successfully',
};

// Method to fetchUserInfo;

const getAllUsers = async ({ postBody = {}, dispatch = () => {} }) => {
  try {
    dispatch({ type: actions.GLOBAL_SHOW_LOADER });
    const result = await authService.post(all_user_endpoint, { ...postBody });
    if (result.status === 200) {
      dispatch({ type: actions.GLOBAL_HIDE_LOADER });
      return result;
    }
  } catch (err) {
    dispatch({ type: actions.GLOBAL_HIDE_LOADER });

    dispatch({ type: actions.GLOBAL_HIDE_LOADER });
    dispatch({
      type: actions.GLOBAL_SHOW_ALERT,
      payload: {
        message: responseErrorValidator(err),
        variant: 'error',
      },
    });
  }
};

const createUsers = async (formData, dispatch, handleClose) => {
  try {
    dispatch({ type: actions.GLOBAL_SHOW_LOADER });
    const result = await authService.post(create_user_endpoint, formData);
    if (result.status === 200) {
      handleClose();
      dispatch({
        type: actions.GLOBAL_SHOW_ALERT,
        payload: {
          message: result.data.message,
        },
      });
      dispatch({ type: actions.GLOBAL_HIDE_LOADER });
    }
  } catch (err) {
    dispatch({ type: actions.GLOBAL_HIDE_LOADER });

    dispatch({
      type: actions.GLOBAL_SHOW_ALERT,
      payload: {
        message: responseErrorValidator(err),
        variant: 'error',
      },
    });
  }
};

const updateUsers = async (formData, dispatch, handleClose) => {
  try {
    dispatch({ type: actions.GLOBAL_SHOW_LOADER });
    const result = await authService.post(update_user_endpoint, formData);
    if (result.status === 200) {
      dispatch({
        type: actions.GLOBAL_SHOW_ALERT,
        payload: {
          message: result.data.message || userMessageEnum.update,
        },
      });
      handleClose();
      dispatch({ type: actions.GLOBAL_HIDE_LOADER });
    }
  } catch (err) {
    dispatch({ type: actions.GLOBAL_HIDE_LOADER });

    dispatch({
      type: actions.GLOBAL_SHOW_ALERT,
      payload: {
        message: responseErrorValidator(err),
        variant: 'error',
      },
    });
  }
};

const getUserDetails = async (id, dispatch) => {
  try {
    dispatch({ type: actions.GLOBAL_SHOW_LOADER });
    const result = await authService.get(user_info_endpoint(id));
    if (result.status === 200) {
      dispatch({ type: actions.GLOBAL_HIDE_LOADER });
      return result.data;
    }
  } catch (err) {
    dispatch({ type: actions.GLOBAL_HIDE_LOADER });
    dispatch({
      type: actions.GLOBAL_SHOW_ALERT,
      payload: {
        message: responseErrorValidator(err),
        variant: 'error',
      },
    });
  }
};

const getRoles = async (dispatch) => {
  if (getAuthToken()) {
    try {
      dispatch({ type: actions.GLOBAL_SHOW_LOADER });
      const result = await authService.get(roles_endpoint);
      if (result.status === 200) {
        dispatch({ type: actions.GLOBAL_HIDE_LOADER });
        return result.data;
      }
    } catch (err) {
      dispatch({ type: actions.GLOBAL_HIDE_LOADER });
      dispatch({
        type: actions.GLOBAL_SHOW_ALERT,
        payload: {
          message: responseErrorValidator(err),
          variant: 'error',
        },
      });
    }
  }
};

const deactivateUser = async (id, dispatch, handleClose) => {
  try {
    dispatch({ type: actions.GLOBAL_SHOW_LOADER });
    const result = await authService.patch(user_deactivate_endpoint(id));
    if (result.status === 200) {
      dispatch({
        type: actions.GLOBAL_SHOW_ALERT,
        payload: {
          message: result.data.message || userMessageEnum.deactivate,
        },
      });
      dispatch({ type: actions.GLOBAL_HIDE_LOADER });

      handleClose();
    }
  } catch (err) {
    dispatch({ type: actions.GLOBAL_HIDE_LOADER });

    dispatch({
      type: actions.GLOBAL_SHOW_ALERT,
      payload: {
        message: responseErrorValidator(err),
        variant: 'error',
      },
    });
  }
};

const deleteUser = async (id, dispatch, handleClose) => {
  try {
    dispatch({ type: actions.GLOBAL_SHOW_LOADER });
    const result = await authService.delete(user_delete_endpoint(id));
    if (result.status === 200) {
      dispatch({
        type: actions.GLOBAL_SHOW_ALERT,
        payload: {
          message: result.data.message || userMessageEnum.deactivate,
        },
      });
      dispatch({ type: actions.GLOBAL_HIDE_LOADER });

      handleClose();
    }
  } catch (err) {
    dispatch({ type: actions.GLOBAL_HIDE_LOADER });

    dispatch({
      type: actions.GLOBAL_SHOW_ALERT,
      payload: {
        message: responseErrorValidator(err),
        variant: 'error',
      },
    });
  }
};

const reactivateUser = async (id, dispatch, handleClose) => {
  try {
    dispatch({ type: actions.GLOBAL_SHOW_LOADER });
    const result = await authService.patch(user_reactivate_endpoint(id));
    if (result.status === 200) {
      dispatch({
        type: actions.GLOBAL_SHOW_ALERT,
        payload: {
          message: result.data.message || userMessageEnum.deactivate,
        },
      });
      dispatch({ type: actions.GLOBAL_HIDE_LOADER });

      handleClose();
    }
  } catch (err) {
    dispatch({ type: actions.GLOBAL_HIDE_LOADER });

    dispatch({
      type: actions.GLOBAL_SHOW_ALERT,
      payload: {
        message: responseErrorValidator(err),
        variant: 'error',
      },
    });
  }
};

const resetUserPassword = async ({ postBody, dispatch, handleClose }) => {
  try {
    dispatch({ type: actions.GLOBAL_SHOW_LOADER });
    const result = await authService.post(user_reset_password, { ...postBody });
    if (result.status === 200) {
      dispatch({
        type: actions.GLOBAL_SHOW_ALERT,
        payload: {
          message: result.data.message || userMessageEnum.reset,
        },
      });
      dispatch({ type: actions.GLOBAL_HIDE_LOADER });
      handleClose();
    }
  } catch (err) {
    dispatch({ type: actions.GLOBAL_HIDE_LOADER });
    dispatch({
      type: actions.GLOBAL_SHOW_ALERT,
      payload: {
        message: responseErrorValidator(err),
        variant: 'error',
      },
    });
  }
};

const activateUser = async ({ postBody, dispatch, handleClose }) => {
  try {
    dispatch({ type: actions.GLOBAL_SHOW_LOADER });
    const result = await authService.post(user_activate, { ...postBody });
    if (result.status === 200) {
      dispatch({
        type: actions.GLOBAL_SHOW_ALERT,
        payload: {
          message: result.data.message || userMessageEnum.activate,
        },
      });
      dispatch({ type: actions.GLOBAL_HIDE_LOADER });
      handleClose();
    }
  } catch (err) {
    dispatch({ type: actions.GLOBAL_HIDE_LOADER });
    dispatch({
      type: actions.GLOBAL_SHOW_ALERT,
      payload: {
        message: responseErrorValidator(err),
        variant: 'error',
      },
    });
  }
};

const getUserCity = async (lat, long) => {
  const result = await axios.get(
    ` https://us1.locationiq.com/v1/reverse.php?key=pk.3c91a3bab92bfe805d63f35833872550&lat=${lat}&lon=${long}&format=json`,
  );
  if (result.status === 200) {
    let address = result.data.address;
    const { county, country } = address;
    return `${county}, ${country}`;
  }
};

const UserServices = {
  getAllUsers,
  getUserDetails,
  updateUsers,
  createUsers,
  getRoles,
  deactivateUser,
  deleteUser,
  reactivateUser,
  resetUserPassword,
  activateUser,
  getUserCity,
};

export default UserServices;
