import React, { Suspense, useCallback, useContext, useEffect } from 'react';
import { Backdrop, Grid, Snackbar } from '@material-ui/core';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Route, Switch } from 'react-router';
import { SSNotificationPopup, SSProgress } from '@ss/ui-components';
import { UserContext } from 'context/user';
import Header from 'containers/Header';
import ThemeStore from 'context/theme';
import useUserInfo from 'hooks/useUserInfo';
import { routes } from 'routes/routes';
import { absoluteRoutes } from 'utils/api/absoluteRoutes';
import { getAuthToken, setAuthToken } from 'utils/helpers/localstorage';
import useStyles from './App.styles';
import Authenticated from 'components/Authenticated';
import * as actions from 'utils/actionTypes';
import { progressTheme } from 'themes/progress.theme';
import UserServices from 'utils/services/UsersServices';
import { convertRolesIntoDropDown } from 'utils/helpers/dataConverters';

function App() {
  const classes = useStyles();
  const { userState, userDispatch } = useContext(UserContext);
  const { show, message, variant, globalLoader } = userState;
  const { fetchUserInfo } = useUserInfo(userDispatch);

  const routesContainer = routes.map((el) => (
    <Route exact={el.exact} path={el.path} component={el.component} />
  ));

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

  let isAuthenticated = getAuthToken();

  useEffect(() => {
    if (isAuthenticated) {
      setAuthToken(isAuthenticated);
      fetchUserInfo();
    }
  }, [fetchUserInfo, isAuthenticated]);

  let headerContent = isAuthenticated ? <Header absolutePaths={absoluteRoutes} /> : '';

  let globalLoaderContainer = (
    <Backdrop open={globalLoader} style={{ zIndex: 1302 }}>
      <Grid item xs={12} sm={12} md={12} lg={12} style={{ height: 'calc(100vh - 155px)' }}>
        <SSProgress
          variant="indeterminate"
          {...progressTheme('dark').primary}
          width="100%"
          margin="0"
          height="5px"
        />
        <Snackbar
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          open={globalLoader}
          message="Oh!. Hold on.."
          key={'data-fetch-snackbar'}
          className={classes.snackbar}
        />
      </Grid>
    </Backdrop>
  );

  return (
    <ThemeStore>
      <DndProvider backend={HTML5Backend}>
        <Grid className={classes.root} justify="center">
          {globalLoaderContainer}
          <Grid item xs={12} sm={12} md={12} lg={12} style={{ height: '100%' }}>
            <Grid container justify="center">
              <Grid item className={classes.breadCrumbContainer}>
                {headerContent}
              </Grid>
            </Grid>
            <Suspense fallback={() => <h1>Loading</h1>}>
              <Authenticated
                flag={isAuthenticated}
                authenticated={{ path: '/', to: '/dashboard', exact: true }}
                unAuthenticated={{ path: '*', to: '/login', exact: true }}
              />
              <Switch>{routesContainer}</Switch>
            </Suspense>
          </Grid>
          <SSNotificationPopup
            open={show}
            message={message}
            variant={variant}
            handleClose={() => userDispatch({ type: actions.GLOBAL_HIDE_ALERT })}
          />
        </Grid>
      </DndProvider>
    </ThemeStore>
  );
}

export default React.memo(App);
