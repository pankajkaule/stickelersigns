import { useCallback } from 'react';
import authService from 'utils/services/auth';
import * as actions from 'utils/actionTypes/index';
import { responseErrorValidator } from 'utils/helpers/other';
const useUserInfo = (dispatch) => {
  const fetchUserInfo = useCallback(async () => {
    try {
      dispatch({ type: actions.GLOBAL_SHOW_LOADER });
      const result = await authService.get('user');
      if (result.status === 200) {
        dispatch({ type: actions.GLOBAL_HIDE_LOADER });
        dispatch({ type: actions.STORE_USER_DATA, payload: result.data });
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
  }, [dispatch]);

  return { fetchUserInfo };
};

export default useUserInfo;
