import React, { useCallback, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { SSDrawer, SSTabs } from '@ss/ui-components';
import drawerTheme from 'themes/drawer.theme';
import { useLocation } from 'react-router';
import useDrawerAutoScroll from 'hooks/useDrawereAutoScroll';
import { Grid } from '@material-ui/core';
import useStyles from './index.styles';
import { tabsTheme } from 'themes/tabs.theme';
import { buttonTheme } from 'themes/button.theme';
import UserEdit from '../UserEdit';
import UserDetails from '../UserDetails';
import useQuery from 'hooks/useQuery';
import UserServices from 'utils/services/UsersServices';
import { UserContext } from 'context/user';
import * as actions from 'utils/actionTypes';
import { convertRolesIntoDropDown } from 'utils/helpers/dataConverters';
function UserEditContainer(props) {
  const { handleClose, theme, selectedBusiness } = props;
  const { userState, userDispatch } = useContext(UserContext);
  const { allRoles } = userState;
  const query = useQuery();
  const id = query.get('id');
  const location = useLocation();
  const [tabValue, setTabValue] = useState(0);
  const [userInfo, setUserInfo] = useState({});
  const { drawerTop } = useDrawerAutoScroll({ id: 'client-stepper-form' });
  const classes = useStyles();

  const fetchUserInfo = useCallback(async () => {
    const { getUserDetails } = UserServices;
    if (id) {
      const result = await getUserDetails(id, userDispatch);
      setUserInfo(result);
    }
  }, [id, userDispatch]);

  const fetchUserRoles = useCallback(async () => {
    const { getRoles } = UserServices;
    const result = await getRoles(userDispatch);
    userDispatch({
      type: actions.STORE_USER_DATA,
      payload: { allRoles: convertRolesIntoDropDown(result) },
    });
  }, [userDispatch]);

  useEffect(() => {
    fetchUserRoles();
  }, [fetchUserRoles]);

  useEffect(() => {
    fetchUserInfo();
  }, [fetchUserInfo]);

  const handleTabValue = (e, value) => setTabValue(value);

  const handleClosePopup = () => {
    handleClose();
    setTabValue(0);
  };

  return (
    <SSDrawer
      anchor="bottom"
      open={location.pathname === '/users/edit'}
      onClose={handleClosePopup}
      id={'client-stepper-form'}
      top={drawerTop}
      // loader={loader}
      {...drawerTheme(theme).drawer}>
      <Grid container justify="center" style={{ padding: '40px' }}>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          className={classes.container}
          style={{ margin: '0 0 40px 0' }}>
          <SSTabs
            value={tabValue}
            handleChange={handleTabValue}
            list={[
              {
                label: 'Account',
                component: (
                  <UserEdit
                    userInfo={userInfo}
                    userDispatch={userDispatch}
                    allRoles={allRoles}
                    selectedBusiness={selectedBusiness}
                    handleClose={handleClosePopup}
                    id={id}
                  />
                ),
              },
              {
                label: 'Details',
                component: (
                  <UserDetails
                    userInfo={userInfo}
                    userDispatch={userDispatch}
                    handleClose={handleClosePopup}
                  />
                ),
              },
            ]}
            {...tabsTheme(theme).secondary}
            buttonTheme={buttonTheme('dark').close}
            handleClick={handleClosePopup}
          />
        </Grid>
      </Grid>
    </SSDrawer>
  );
}

UserEditContainer.propTypes = {
  handleClose: PropTypes.func,
  theme: PropTypes.string,
};

UserEditContainer.defaultProps = {
  handleClose: () => {},
  theme: 'dark',
};

export default UserEditContainer;
