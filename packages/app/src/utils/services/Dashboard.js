import * as actions from 'utils/actionTypes';
import { responseErrorValidator } from 'utils/helpers/other';
import authService from './auth';

const baseUrl = {
  videoWallCount: 'videoWallCount',
  allDeviceCount: 'allDeviceCount',
  allMediaCount: 'allMediaCount',
  projectCount: 'projectCount',
  clientCount: 'clientsCount',
};

const getVideoWallCount = async ({ dispatch }) => {
  try {
    const result = await authService.get(baseUrl.videoWallCount);
    if (result.status === 200) {
      return result.data;
    }
  } catch (err) {
    dispatch({
      type: actions.GLOBAL_SHOW_ALERT,
      payload: {
        message: responseErrorValidator(err),
        variant: 'error',
      },
    });
    return { activeVideoWallCount: 0, totalVideoWallCount: 0 };
  }
};

const getAllDeviceCount = async ({ dispatch }) => {
  try {
    const result = await authService.get(baseUrl.allDeviceCount);
    if (result.status === 200) {
      return result.data;
    }
  } catch (err) {
    dispatch({
      type: actions.GLOBAL_SHOW_ALERT,
      payload: {
        message: responseErrorValidator(err),
        variant: 'error',
      },
    });
    return { displayInUseCount: 0, totalDisplayCount: 0 };
  }
};

const getAllMediaCount = async ({ dispatch }) => {
  try {
    const result = await authService.get(baseUrl.allMediaCount);
    if (result.status === 200) {
      return result.data;
    }
  } catch (err) {
    dispatch({
      type: actions.GLOBAL_SHOW_ALERT,
      payload: {
        message: responseErrorValidator(err),
        variant: 'error',
      },
    });
    return { totalImagesCount: 0, totalVideosCount: 0 };
  }
};

const getProjectCount = async ({ dispatch }) => {
  try {
    const result = await authService.get(baseUrl.projectCount);
    if (result.status === 200) {
      return result.data;
    }
  } catch (err) {
    dispatch({
      type: actions.GLOBAL_SHOW_ALERT,
      payload: {
        message: responseErrorValidator(err),
        variant: 'error',
      },
    });
    return { liveProjectCount: 0, totalProjectCount: 0 };
  }
};

const getClientCount = async ({ dispatch }) => {
  try {
    const result = await authService.get(baseUrl.clientCount);
    if (result.status === 200) {
      return result.data;
    }
  } catch (err) {
    dispatch({
      type: actions.GLOBAL_SHOW_ALERT,
      payload: {
        message: responseErrorValidator(err),
        variant: 'error',
      },
    });
    return { totalActiveClients: 0, totalClients: 0 };
  }
};

const DashboardService = {
  getAllDeviceCount,
  getAllMediaCount,
  getProjectCount,
  getVideoWallCount,
  getClientCount,
};

export default DashboardService;
