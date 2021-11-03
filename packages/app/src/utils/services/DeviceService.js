import authService from './auth';
import * as actions from 'utils/actionTypes';
import { deviceSuccessMessageEnum } from 'hooks/useDevices';
import { responseErrorValidator } from 'utils/helpers/other';

const deviceGroupDetails = 'deviceGroup/getDevices';
const deviceGroup = 'deviceGroup/';
const getModel = '/getModels';
const getBrands = '/getBrands';

const messages = {
  deleted: 'Device Deleted Successfully',
  update: 'Device Updated Successfully',
  createGroup: 'Device Group Created Successfully',
  deleteGroup: 'Device Group Deleted Successfully',
  deviceCommand: 'Device Command Generated Successfully',
  approve: 'Device Approved Successfully',
  reject: 'Device Rejected Successfully',
};

const getDeviceGroupDetails = async ({ postBody, dispatch }) => {
  try {
    dispatch({ type: actions.GLOBAL_SHOW_LOADER });
    const result = await authService.post(deviceGroupDetails, { ...postBody });
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

const updateDeviceGroupDetails = async ({ postBody, handleClose, dispatch }) => {
  try {
    dispatch({ type: actions.GLOBAL_SHOW_LOADER });
    const result = await authService.post(deviceGroup, { ...postBody });
    if (result.status === 200) {
      dispatch({ type: actions.GLOBAL_HIDE_LOADER });
      dispatch({
        type: actions.GLOBAL_SHOW_ALERT,
        payload: {
          message: result.data.message || deviceSuccessMessageEnum.updateGroup,
          variant: 'success',
        },
      });
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
    handleClose();
  }
};

const fetchAllDeviceGroups = async (postBody, dispatch) => {
  try {
    dispatch({ type: actions.GLOBAL_SHOW_LOADER });

    const result = await authService.post(`deviceGroup/getAll`, { ...postBody });
    if (result.status === 200) {
      dispatch({ type: actions.GLOBAL_HIDE_LOADER });
      return result.data.data;
    }
  } catch (err) {
    dispatch({
      type: actions.GLOBAL_SHOW_ALERT,
      payload: {
        message: responseErrorValidator(err),
        variant: 'error',
      },
    });
    dispatch({ type: actions.GLOBAL_HIDE_LOADER });
    return [];
  }
};

const fetchDeviceList = async ({ postBody, dispatch }) => {
  try {
    dispatch({ type: actions.GLOBAL_SHOW_LOADER });
    const result = await authService.post('device/list', { ...postBody });
    if (result.status === 200) {
      dispatch({ type: actions.GLOBAL_HIDE_LOADER });
      return result.data.data;
    }
  } catch (err) {
    dispatch({
      type: actions.GLOBAL_SHOW_ALERT,
      payload: {
        message: responseErrorValidator(err),
        variant: 'error',
      },
    });

    dispatch({ type: actions.GLOBAL_HIDE_LOADER });
    return [];
  }
};

const fetchUnApprovedDeviceList = async ({ postBody, dispatch }) => {
  try {
    dispatch({ type: actions.GLOBAL_SHOW_LOADER });
    const result = await authService.post('list/unapprovedDevices', { ...postBody });
    if (result.status === 200) {
      dispatch({ type: actions.GLOBAL_HIDE_LOADER });
      return result.data.data;
    }
  } catch (err) {
    dispatch({
      type: actions.GLOBAL_SHOW_ALERT,
      payload: {
        message: responseErrorValidator(err),
        variant: 'error',
      },
    });

    dispatch({ type: actions.GLOBAL_HIDE_LOADER });
    return [];
  }
};

const getDeviceModel = async (dispatch) => {
  try {
    dispatch({ type: actions.GLOBAL_SHOW_LOADER });
    const result = await authService.get(getModel);
    if (result.status === 200) {
      dispatch({ type: actions.GLOBAL_HIDE_LOADER });
    }
    return result.data;
  } catch (err) {
    dispatch({
      type: actions.GLOBAL_SHOW_ALERT,
      payload: {
        message: responseErrorValidator(err),
        variant: 'error',
      },
    });
    dispatch({ type: actions.GLOBAL_HIDE_LOADER });
  }
};

const getDeviceBrands = async (dispatch) => {
  try {
    dispatch({ type: actions.GLOBAL_SHOW_LOADER });
    const result = await authService.get(getBrands);
    if (result.status === 200) {
      dispatch({ type: actions.GLOBAL_HIDE_LOADER });
    }
    return result.data;
  } catch (err) {
    dispatch({
      type: actions.GLOBAL_SHOW_ALERT,
      payload: {
        message: responseErrorValidator(err),
        variant: 'error',
      },
    });
    dispatch({ type: actions.GLOBAL_HIDE_LOADER });
  }
};

const getDeviceDetailsById = async (deviceId, dispatch, clientId) => {
  try {
    dispatch({ type: actions.GLOBAL_SHOW_LOADER });
    const result = await authService.get(`device/${deviceId}/${clientId}`);
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
    return {};
  }
};

// Delete Device Command
const deleteDevice = async ({ deviceId, dispatch, handleClose }) => {
  try {
    dispatch({ type: actions.GLOBAL_SHOW_LOADER });
    const result = await authService.delete(`device/${deviceId}`);
    if (result.status === 200) {
      dispatch({ type: actions.GLOBAL_HIDE_LOADER });
      dispatch({
        type: actions.GLOBAL_SHOW_ALERT,
        payload: {
          message: result.data.message || messages.deleted,
          variant: 'success',
        },
      });
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

// Update Device details for a specific device
const updateDevice = async ({ postBody, dispatch }) => {
  try {
    dispatch({ type: actions.GLOBAL_SHOW_LOADER });
    const result = await authService.post(`updateDeviceDetails`, { ...postBody });
    if (result.status === 200) {
      dispatch({ type: actions.GLOBAL_HIDE_LOADER });
      dispatch({
        type: actions.GLOBAL_SHOW_ALERT,
        payload: {
          message: result.data.message || messages.update,
          variant: 'success',
        },
      });
      return true;
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
    return false;
  }
};

const createDeviceGroup = async ({ postBody, dispatch, handleClose }) => {
  try {
    dispatch({ type: actions.GLOBAL_SHOW_LOADER });
    const result = await authService.post(`deviceGroup/`, { ...postBody });
    if (result.status === 200) {
      dispatch({ type: actions.GLOBAL_HIDE_LOADER });
      dispatch({
        type: actions.GLOBAL_SHOW_ALERT,
        payload: {
          message: result.data.message || messages.createGroup,
          variant: 'success',
        },
      });
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

// Delete device group
const deleteDeviceGroup = async ({ postBody, dispatch, handleClose }) => {
  try {
    dispatch({ type: actions.GLOBAL_SHOW_LOADER });
    const result = await authService.delete(`deviceGroup/`, {
      data: { ...postBody },
    });
    if (result.status === 200) {
      dispatch({ type: actions.GLOBAL_HIDE_LOADER });
      dispatch({
        type: actions.GLOBAL_SHOW_ALERT,
        payload: {
          message: result.data.message || messages.deleteGroup,
          variant: 'success',
        },
      });
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
    handleClose();
  }
};

// Get latest app version
const getLatestAppVersion = async ({ postBody, dispatch }) => {
  try {
    dispatch({ type: actions.GLOBAL_SHOW_LOADER });
    const result = await authService.post(`application/latest`, {
      data: { ...postBody },
    });
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
    return {};
  }
};

const addDeviceCommand = async ({
  deviceId = null,
  commandName = null,
  commandParameters = [],
  attemptsUntilTimeout = 3,
  dispatch,
}) => {
  if (deviceId && commandName) {
    dispatch({ type: actions.GLOBAL_SHOW_LOADER });
    try {
      const postBody = {
        deviceId: deviceId,
        deviceCommands: [
          {
            command: commandName,
            statusAttemptsUntilTimeout: attemptsUntilTimeout,
            commandParameters: commandParameters,
          },
        ],
      };
      const result = await authService.post(`addDeviceCommand`, { ...postBody });
      if (result.status === 200) {
        dispatch({ type: actions.GLOBAL_HIDE_LOADER });
        dispatch({
          type: actions.GLOBAL_SHOW_ALERT,
          payload: {
            message: result.data.message || messages.deviceCommand,
            variant: 'success',
          },
        });
        return true;
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
      return false;
    }
  }
};

const getDeviceSettings = async ({ deviceId, dispatch }) => {
  try {
    dispatch({ type: actions.GLOBAL_SHOW_LOADER });
    const result = await authService.get(`getDeviceSettings/${deviceId}`);
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
    return {};
  }
};

const updateDeviceSettings = async ({ postBody, dispatch }) => {
  try {
    dispatch({ type: actions.GLOBAL_SHOW_LOADER });
    const result = await authService.post(`deviceSettings`, { ...postBody });
    if (result.status === 200) {
      dispatch({ type: actions.GLOBAL_HIDE_LOADER });
      dispatch({
        type: actions.GLOBAL_SHOW_ALERT,
        payload: {
          message: result.data.message || messages.deviceCommand,
          variant: 'success',
        },
      });
      return true;
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
    return false;
  }
};

const approveDevice = async ({ deviceId, dispatch, handleClose }) => {
  try {
    dispatch({ type: actions.GLOBAL_SHOW_LOADER });
    const result = await authService.post(`device/approve/${deviceId}`);
    handleClose();
    if (result.status === 200) {
      dispatch({ type: actions.GLOBAL_HIDE_LOADER });
      dispatch({
        type: actions.GLOBAL_SHOW_ALERT,
        payload: {
          message: result.data.message || messages.deviceCommand,
          variant: 'success',
        },
      });
      return true;
    }
  } catch (err) {
    handleClose();
    dispatch({ type: actions.GLOBAL_HIDE_LOADER });
    dispatch({
      type: actions.GLOBAL_SHOW_ALERT,
      payload: {
        message: responseErrorValidator(err),
        variant: 'error',
      },
    });
    return false;
  }
};

const rejectDevice = async ({ deviceId, dispatch, handleClose }) => {
  try {
    dispatch({ type: actions.GLOBAL_SHOW_LOADER });
    const result = await authService.post(`device/reject/${deviceId}`);
    handleClose();
    if (result.status === 200) {
      dispatch({ type: actions.GLOBAL_HIDE_LOADER });
      dispatch({
        type: actions.GLOBAL_SHOW_ALERT,
        payload: {
          message: result.data.message || messages.deviceCommand,
          variant: 'success',
        },
      });
      return true;
    }
  } catch (err) {
    handleClose();
    dispatch({ type: actions.GLOBAL_HIDE_LOADER });
    dispatch({
      type: actions.GLOBAL_SHOW_ALERT,
      payload: {
        message: responseErrorValidator(err),
        variant: 'error',
      },
    });
    return false;
  }
};

const getDeviceCommandList = async ({ postBody, dispatch }) => {
  try {
    dispatch({ type: actions.GLOBAL_SHOW_LOADER });
    const result = await authService.post(`deviceCommands/list`, { ...postBody });
    if (result.status === 200) {
      dispatch({ type: actions.GLOBAL_HIDE_LOADER });
      return result.data.data;
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
    return [];
  }
};

const getDeviceLogsList = async ({ postBody, dispatch }) => {
  try {
    dispatch({ type: actions.GLOBAL_SHOW_LOADER });
    const result = await authService.post(`deviceLogs/list`, { ...postBody });
    if (result.status === 200) {
      dispatch({ type: actions.GLOBAL_HIDE_LOADER });
      return result.data.data;
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
    return [];
  }
};

const addDevice = async ({ postBody, dispatch, handleClose }) => {
  try {
    const result = await authService.post(`device`, { ...postBody });
    if (result.status === 200) {
      dispatch({
        type: actions.GLOBAL_SHOW_ALERT,
        payload: {
          message: result.data.message || deviceSuccessMessageEnum.addDevice,
          variant: 'success',
        },
      });
      handleClose();
    }
  } catch (err) {
    dispatch({
      type: actions.DEVICE_DETAILS_ERROR,
      payload: {
        message: responseErrorValidator(err),
        variant: 'error',
      },
    });
  }
};

const DeviceServices = {
  getDeviceGroupDetails,
  updateDeviceGroupDetails,
  fetchAllDeviceGroups,
  fetchDeviceList,
  getDeviceModel,
  getDeviceBrands,
  getDeviceDetailsById,
  deleteDevice,
  updateDevice,
  createDeviceGroup,
  deleteDeviceGroup,
  fetchUnApprovedDeviceList,
  getLatestAppVersion,
  addDeviceCommand,
  getDeviceSettings,
  updateDeviceSettings,
  approveDevice,
  rejectDevice,
  getDeviceCommandList,
  getDeviceLogsList,
  addDevice,
};

export default DeviceServices;
