import * as actions from 'utils/actionTypes';
import { responseErrorValidator } from 'utils/helpers/other';
import authService from './auth';

const clientMessageEnum = {
  created: 'Company created successfully',
  adminCreated: 'Admin created successfully',
  reset: 'Reset password link is sent to your email address successfully',
  update: 'Company information updated successfully',
  deactivate: 'Company deactivated successfully',
  delete: 'Company deleted successfully',
};

const createAdmin = async (data, filesContainer, dispatch, clientId, handleClosePopup) => {
  try {
    dispatch({ type: actions.GLOBAL_SHOW_LOADER });
    const postBody = {
      userName: data.adminUserName,
      firstName: data.adminFName,
      lastName: data.adminLName,
      email: data.adminEmail,
      clientId: clientId,
      roles: [
        {
          name: 'ROLE_CLIENT_ADMIN',
          displayName: 'Client Admin',
        },
      ],
    };
    const formData = new FormData();
    let adminProfilePic = filesContainer.hasOwnProperty('adminProfileFile')
      ? filesContainer.adminProfileFile
      : null;
    formData.append('content', JSON.stringify(postBody));
    formData.append('file', adminProfilePic);
    const result = await authService.post('user/register', formData);
    if (result.status === 200) {
      dispatch({ type: actions.GLOBAL_HIDE_LOADER });

      handleClosePopup();
      dispatch({
        type: actions.GLOBAL_SHOW_ALERT,
        payload: {
          message: result.data.message || clientMessageEnum.adminCreated,
          variant: 'success',
        },
      });
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

const createCompany = async (data, filesContainer, dispatch, handleClosePopup) => {
  try {
    dispatch({ type: actions.GLOBAL_SHOW_LOADER });
    const postBody = {
      name: data.companyName,
      address: data.companyAddress,
      city: data.companyCity,
      zipcode: data.companyZipCode,
      state: data.companyState,
      country: data.companyCountry,
      contactNumber: data.companyContact.split('-')[1].split(' ').join(''),
      email: data.companyEmail,
      websiteUrl: data.companyWebsite,
      description: data.companyDescription,
    };
    const formData = new FormData();
    formData.append('content', JSON.stringify(postBody));
    formData.append('file', filesContainer.companyProfileFile);
    const result = await authService.post('client', formData);
    if (result.status === 200) {
      dispatch({ type: actions.GLOBAL_HIDE_LOADER });

      dispatch({
        type: actions.GLOBAL_SHOW_ALERT,
        payload: {
          message: result.data.message || clientMessageEnum.created,
          variant: 'success',
        },
      });
      createAdmin(data, filesContainer, dispatch, result.data.id, handleClosePopup);
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

const getClientList = async (postBody, dispatch) => {
  try {
    dispatch({ type: actions.GLOBAL_SHOW_LOADER });
    const result = await authService.post('all/client', postBody);
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
    return { data: [] };
  }
};

const getClientDetails = async (clientId, dispatch) => {
  try {
    dispatch({ type: actions.GLOBAL_SHOW_LOADER });
    const result = await authService.get(`client/${clientId}`);
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

const updateCompany = async (data, filesContainer, dispatch, id, handelClose) => {
  try {
    dispatch({ type: actions.GLOBAL_SHOW_LOADER });

    const postBody = {
      id,
      name: data.companyName,
      address: data.companyAddress,
      city: data.companyCity,
      zipcode: data.companyZipCode,
      state: data.companyState,
      country: data.companyCountry,
      contactNumber: data.companyContact.split('-')[1].split(' ').join(''),
      email: data.companyEmail,
      websiteUrl: data.companyWebsite,
      description: data.companyDescription,
    };

    let companyProfileFile = filesContainer.hasOwnProperty('companyProfileFile')
      ? filesContainer.companyProfileFile
      : null;

    const formData = new FormData();
    formData.append('content', JSON.stringify(postBody));
    formData.append('file', companyProfileFile);
    const result = await authService.patch('client', formData);
    if (result.status === 200) {
      dispatch({ type: actions.GLOBAL_HIDE_LOADER });

      handelClose();
      dispatch({
        type: actions.GLOBAL_SHOW_ALERT,
        payload: {
          message: result.data.message || clientMessageEnum.update,
          variant: 'success',
        },
      });
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

const forgetPassword = async (userEmail, dispatch, handleClose) => {
  try {
    dispatch({ type: actions.GLOBAL_SHOW_LOADER });
    const result = await authService.post(`user/forgotPassword/${userEmail}`);
    if (result.status === 200) {
      dispatch({ type: actions.GLOBAL_HIDE_LOADER });

      handleClose();
      dispatch({
        type: actions.GLOBAL_SHOW_ALERT,
        payload: {
          message: result.data.message || clientMessageEnum.reset,
          variant: 'success',
        },
      });
    }
  } catch (err) {
    dispatch({ type: actions.GLOBAL_HIDE_LOADER });

    handleClose();
    dispatch({
      type: actions.GLOBAL_SHOW_ALERT,
      payload: {
        message: responseErrorValidator(err),
        variant: 'error',
      },
    });
  }
};

const deactivateClient = async (id, dispatch, handleClose) => {
  try {
    dispatch({ type: actions.GLOBAL_SHOW_LOADER });
    const result = await authService.post(`client/deactivate/${id}`);
    if (result.status === 200) {
      dispatch({
        type: actions.GLOBAL_SHOW_ALERT,
        payload: {
          message: result.data.message || clientMessageEnum.deactivate,
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

const activateClient = async (id, dispatch, handleClose) => {
  try {
    dispatch({ type: actions.GLOBAL_SHOW_LOADER });
    const result = await authService.patch(`client/reactivate/${id}`);
    if (result.status === 200) {
      dispatch({
        type: actions.GLOBAL_SHOW_ALERT,
        payload: {
          message: result.data.message || clientMessageEnum.deactivate,
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

const deleteClient = async (id, dispatch, handleClose) => {
  try {
    dispatch({ type: actions.GLOBAL_SHOW_LOADER });
    const result = await authService.delete(`client/delete/${id}`);
    if (result.status === 200) {
      dispatch({
        type: actions.GLOBAL_SHOW_ALERT,
        payload: {
          message: result.data.message || clientMessageEnum.delete,
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

const ClientServices = {
  createCompany,
  createAdmin,
  getClientList,
  getClientDetails,
  updateCompany,
  forgetPassword,
  deactivateClient,
  deleteClient,
  activateClient,
};

export default ClientServices;
