import { useCallback, useContext } from 'react';
import authService from 'utils/services/auth';
import * as actions from 'utils/actionTypes/index';
import { UserContext } from 'context/user';
import { responseErrorValidator } from 'utils/helpers/other';

export const deviceSuccessMessageEnum = {
  updateDevice: 'Device updated successfully',
  addDevice: 'Display request created successfully',
  deleteDevice: 'Device deleted successfully',
  createGroup: 'Device group created successfully',
  deleteGroup: 'Device group deleted successfully',
  updateGroup: 'Device group updated successfully',
};

const useDevices = (dispatch) => {
  const { userDispatch } = useContext(UserContext);
  // Fetch device list
  const fetchDeviceList = useCallback(
    async (key = '', searchTerm = '', init = false, selectedBusiness) => {
      try {
        dispatch({ type: actions.STORE_DEVICE_GROUP_DATA, payload: { loader: true } });
        userDispatch({ type: actions.GLOBAL_SHOW_LOADER });
        if (init) {
          dispatch({ type: actions.STORE_DEVICE_DATA, payload: { data: [] } });
        }
        const postBody = {
          searchCriterias: [
            {
              criteriaName: 'client',
              value: selectedBusiness,
            },
            {
              criteriaName: key,
              value: searchTerm,
            },
          ],
          pageRequest: {
            page: 0,
            size: 10,
          },
        };

        const result = await authService.post('device/list', { ...postBody });
        if (result.status === 200) {
          userDispatch({ type: actions.GLOBAL_HIDE_LOADER });
          dispatch({ type: actions.STORE_DEVICE_DATA, payload: result.data });
          dispatch({ type: actions.STORE_DEVICE_GROUP_DEVICES, payload: result.data });
          dispatch({ type: actions.STORE_DEVICE_GROUP_DATA, payload: { loader: false } });
        }
      } catch (err) {
        userDispatch({
          type: actions.DEVICE_ERROR,
          payload: {
            message: responseErrorValidator(err),
            variant: 'error',
          },
        });
        userDispatch({ type: actions.GLOBAL_HIDE_LOADER });
      }
    },
    [dispatch, userDispatch],
  );

  // Fetch device details by device ID
  const fetchDeviceDetailsById = useCallback(
    async (deviceId) => {
      try {
        dispatch({ type: actions.SET_DEVICE_DETAILS_LOADER, payload: true });
        const result = await authService.get(`device/${deviceId}`);
        if (result.status === 200) {
          dispatch({ type: actions.SET_DEVICE_DETAILS_LOADER, payload: false });
          dispatch({ type: actions.STORE_DEVICE_DETAILS_DATA, payload: result.data });
        }
      } catch (err) {
        dispatch({ type: actions.SET_DEVICE_DETAILS_LOADER, payload: false });
        userDispatch({
          type: actions.DEVICE_DETAILS_ERROR,
          payload: {
            message: responseErrorValidator(err),
            variant: 'error',
          },
        });
      }
    },
    [dispatch, userDispatch],
  );

  // Update Device details for a specific device
  const updateDevice = useCallback(
    async (postBody, tabVal = null) => {
      try {
        dispatch({ type: actions.SET_DEVICE_DETAILS_LOADER, payload: true });
        const result = await authService.post(`device`, { ...postBody });
        if (result.status === 200) {
          dispatch({ type: actions.STORE_DEVICE_DETAILS_DATA, payload: postBody });
          dispatch({ type: actions.DEVICE_DETAILS_CHANGED, payload: false });
          dispatch({ type: actions.SET_DEVICE_DETAILS_LOADER, payload: false });
          userDispatch({
            type: actions.GLOBAL_SHOW_ALERT,
            payload: {
              message: result.data.message || deviceSuccessMessageEnum.updateDevice,
              variant: 'success',
            },
          });
          if (tabVal && tabVal >= 0) {
            dispatch({ type: actions.DEVICE_TAB_VALUE, payload: tabVal });
            dispatch({ type: actions.TOGGLE_DEVICE_CHANGES_CONFIRMATION_DIALOG, payload: false });
            dispatch({ type: actions.SAVE_DEVICE_DETAILS_CHANGES, payload: false });
            dispatch({ type: actions.CANCEL_DEVICE_DETAILS_CHANGES, payload: false });
            dispatch({ type: actions.DEVICE_TAB_VALUE_TO_BE, payload: null });
            dispatch({ type: actions.TOGGLE_DEVICE_CHANGES_CONFIRMATION_DIALOG, payload: false });
          }
        }
      } catch (err) {
        userDispatch({
          type: actions.DEVICE_DETAILS_ERROR,
          payload: {
            message: responseErrorValidator(err),
            variant: 'error',
          },
        });
        dispatch({ type: actions.SET_DEVICE_DETAILS_LOADER, payload: false });
        if (tabVal) {
          dispatch({ type: actions.DEVICE_TAB_VALUE, payload: tabVal });
          dispatch({ type: actions.TOGGLE_DEVICE_CHANGES_CONFIRMATION_DIALOG, payload: false });
          dispatch({ type: actions.SAVE_DEVICE_DETAILS_CHANGES, payload: false });
          dispatch({ type: actions.CANCEL_DEVICE_DETAILS_CHANGES, payload: false });
          dispatch({ type: actions.DEVICE_DETAILS_CHANGED, payload: false });
          dispatch({ type: actions.DEVICE_TAB_VALUE_TO_BE, payload: null });
          dispatch({ type: actions.TOGGLE_DEVICE_CHANGES_CONFIRMATION_DIALOG, payload: false });
        }
      }
    },
    [dispatch, userDispatch],
  );

  // Register a request to add new device
  const addDevice = useCallback(
    async (postBody, handleClose = () => {}, userDispatch) => {
      try {
        const result = await authService.post(`device`, { ...postBody });
        if (result.status === 200) {
          userDispatch({
            type: actions.GLOBAL_SHOW_ALERT,
            payload: {
              message: result.data.message || deviceSuccessMessageEnum.addDevice,
              variant: 'success',
            },
          });
          handleClose();
          fetchDeviceList();
        }
      } catch (err) {
        userDispatch({
          type: actions.DEVICE_DETAILS_ERROR,
          payload: {
            message: responseErrorValidator(err),
            variant: 'error',
          },
        });
      }
    },
    [fetchDeviceList],
  );

  // // Add Device Command
  const addDeviceCommand = useCallback(
    async (
      deviceId = null,
      commandName = null,
      commandParameters = [],
      attemptsUntilTimeout = 3,
    ) => {
      if (deviceId && commandParameters.length && commandName) {
        try {
          dispatch({ type: actions.SET_DEVICE_DETAILS_LOADER, payload: true });
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
          console.log(postBody);
          // const result = await authService.post(`addDeviceCommand`, { ...postBody });
          // if (result.status === 200) {
          //   console.log('Command send');
          //   dispatch({ type: actions.SET_DEVICE_DETAILS_LOADER, payload: false });
          // }
        } catch (err) {
          dispatch({ type: actions.SET_DEVICE_DETAILS_LOADER, payload: false });
        }
      }
    },
    [dispatch],
  );

  // Delete Device Command
  const deleteDevice = useCallback(
    async (deviceId, handleClose = () => {}) => {
      try {
        dispatch({ type: actions.SET_DEVICE_DETAILS_LOADER, payload: true });
        const result = await authService.delete(`device/${deviceId}`);
        if (result.status === 200) {
          userDispatch({
            type: actions.GLOBAL_SHOW_ALERT,
            payload: {
              message: result.data.message || deviceSuccessMessageEnum.deleteDevice,
              variant: 'success',
            },
          });
          handleClose();
          dispatch({ type: actions.SET_DEVICE_DETAILS_LOADER, payload: false });
        }
      } catch (err) {
        dispatch({ type: actions.SET_DEVICE_DETAILS_LOADER, payload: false });
        userDispatch({
          type: actions.DEVICE_DETAILS_ERROR,
          payload: {
            message: responseErrorValidator(err),
            variant: 'error',
          },
        });
      }
    },
    [dispatch, userDispatch],
  );

  // Fetch all device groups
  const fetchAllDeviceGroups = useCallback(
    async (searchKey = '', searchTerm = '') => {
      try {
        userDispatch({ type: actions.GLOBAL_SHOW_LOADER });
        const postBody = {
          searchCriterias: [
            {
              criteriaName: searchKey,
              value: searchTerm,
            },
          ],
          pageRequest: {
            page: 0,
            size: 1000,
          },
        };
        const result = await authService.post(`deviceGroup/getAll`, { ...postBody });
        if (result.status === 200) {
          userDispatch({ type: actions.GLOBAL_HIDE_LOADER });
          dispatch({ type: actions.STORE_DEVICE_GROUP_DATA, payload: { groups: result.data } });
          return result.data;
        }
      } catch (err) {
        userDispatch({
          type: actions.DEVICE_GROUP_ERROR,
          payload: {
            message: responseErrorValidator(err),
            variant: 'error',
          },
        });
        userDispatch({ type: actions.GLOBAL_HIDE_LOADER });
      }
    },
    [dispatch, userDispatch],
  );

  // Device Group creation service
  const createDeviceGroup = useCallback(
    async (postBody, history) => {
      try {
        dispatch({ type: actions.STORE_DEVICE_GROUP_DATA, payload: { loader: true } });
        const result = await authService.post(`deviceGroup/`, { ...postBody });
        if (result.status === 200) {
          userDispatch({
            type: actions.GLOBAL_SHOW_ALERT,
            payload: {
              message: result.data.message || deviceSuccessMessageEnum.createGroup,
              variant: 'success',
            },
          });
          fetchAllDeviceGroups();
          dispatch({ type: actions.STORE_DEVICE_GROUP_DATA, payload: { loader: false } });
          history.push('/displays/groups');
        }
      } catch (err) {
        userDispatch({
          type: actions.DEVICE_GROUP_ERROR,
          payload: {
            message: responseErrorValidator(err),
            variant: 'error',
          },
        });
        dispatch({ type: actions.STORE_DEVICE_GROUP_DATA, payload: { loader: false } });
      }
    },
    [dispatch, fetchAllDeviceGroups, userDispatch],
  );

  // Delete device group
  const deleteDeviceGroup = useCallback(
    async (history, postBody) => {
      try {
        dispatch({ type: actions.STORE_DEVICE_GROUP_DATA, payload: { loader: true } });
        const result = await authService.delete(`deviceGroup/`, {
          data: { ...postBody },
        });
        if (result.status === 200) {
          userDispatch({
            type: actions.GLOBAL_SHOW_ALERT,
            payload: {
              message: result.data.message || deviceSuccessMessageEnum.deleteGroup,
              variant: 'success',
            },
          });
          fetchAllDeviceGroups();
          dispatch({ type: actions.STORE_DEVICE_GROUP_DATA, payload: { loader: false } });
          history.push('/displays/groups');
        }
      } catch (err) {
        userDispatch({
          type: actions.DEVICE_GROUP_ERROR,
          payload: {
            message: responseErrorValidator(err),
            variant: 'error',
          },
        });
        dispatch({ type: actions.STORE_DEVICE_GROUP_DATA, payload: { loader: false } });
      }
    },
    [dispatch, fetchAllDeviceGroups, userDispatch],
  );

  return {
    fetchDeviceList,
    fetchDeviceDetailsById,
    updateDevice,
    addDevice,
    createDeviceGroup,
    fetchAllDeviceGroups,
    deleteDeviceGroup,
    addDeviceCommand,
    deleteDevice,
  };
};

export default useDevices;
