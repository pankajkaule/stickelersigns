import React, { useCallback, useContext, useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import { ReactSortable } from 'react-sortablejs';
import { useHistory } from 'react-router';
import useStyles from './index.styles';
import LocationWeatherCard from 'containers/cards/LocationWeather';
import MediaCard from 'containers/cards/Media';
import DisplaysCard from 'containers/cards/Displays';
import ProjectsCard from 'containers/cards/Projects';
import SchedulerCard from 'containers/cards/Scheduler';
import ScreenSaverCard from 'containers/cards/Screensaver';
import SettingsCard from 'containers/cards/Settings';
import ProfileCard from 'containers/cards/Profile';
import EditorCard from 'containers/cards/Editor';
import ClientsCard from 'containers/cards/Clients';
import DisplayAppsCard from 'containers/cards/DisplayAppUpdates';
import NotificationCard from 'containers/cards/Notifications';
import RolesPermissionsCard from 'containers/cards/RolesPermission';
import PlansPaymentCard from 'containers/cards/PlansPayment';
import { ThemeContext } from 'context/theme';
import * as actions from 'utils/actionTypes';
import VideoWallsCard from 'containers/cards/VideoWalls';
import { getDashboardFromRole } from 'utils/helpers/permissions';
import { UserContext } from 'context/user';
import UserCard from 'containers/cards/User';
import MediaSmallCard from 'containers/cards/MediaSmall';
import UserServices from 'utils/services/UsersServices';
import { convertRolesIntoDropDown } from 'utils/helpers/dataConverters';
import { getAuthToken, setAuthToken } from 'utils/helpers/localstorage';
import useUserInfo from 'hooks/useUserInfo';

const list = [
  {
    component: LocationWeatherCard,
    key: 'LocationWeatherCard',
  },
  {
    component: MediaCard,
    key: 'MediaCard',
  },
  {
    component: DisplaysCard,
    key: 'DisplaysCard',
  },
  {
    component: ProjectsCard,
    key: 'ProjectsCard',
  },
  {
    component: SchedulerCard,
    key: 'SchedulerCard',
  },
  {
    component: ScreenSaverCard,
    key: 'ScreenSaverCard',
  },
  {
    component: SettingsCard,
    key: 'SettingsCard',
  },
  {
    component: ProfileCard,
    key: 'ProfileCard',
  },
  {
    component: EditorCard,
    key: 'EditorCard',
  },
  {
    component: ClientsCard,
    key: 'ClientsCard',
  },
  {
    component: DisplayAppsCard,
    key: 'DisplayAppsCard',
  },
  {
    component: NotificationCard,
    key: 'NotificationCard',
  },
  {
    component: RolesPermissionsCard,
    key: 'RolesPermissionsCard',
  },
  {
    component: PlansPaymentCard,
    key: 'PlansPaymentCard',
  },
  {
    component: VideoWallsCard,
    key: 'VideoWallsCard',
  },
  {
    component: UserCard,
    key: 'UsersCard',
  },
  {
    component: MediaSmallCard,
    key: 'MediaSmallCard',
  },
];

function Dashboard(props) {
  const { themeState, themeDispatch } = useContext(ThemeContext);
  const { userState, userDispatch } = useContext(UserContext);
  const { theme } = themeState;
  const [cardsList, setCardsList] = useState([]);
  const [isDraggable] = useState(true);
  const classes = useStyles(props);
  const history = useHistory();
  const { fetchUserInfo } = useUserInfo(userDispatch);

  const cardsContent = cardsList.map((item) => <item.component theme={theme} />);

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

  useEffect(() => {
    if (userState.roles.length) {
      setCardsList(getDashboardFromRole(list, null, userState.roles[0].name));
    }
  }, [userState]);

  const conditionalCardsRendering = () => {
    if (isDraggable) {
      return (
        <ReactSortable
          list={cardsList}
          setList={setCardsList}
          animation={200}
          delayOnTouchStart={true}
          style={{ width: '100%', height: '100%' }}
          delay={2}>
          {cardsContent}
        </ReactSortable>
      );
    }
    return cardsContent;
  };

  useEffect(() => {
    if (history.location.pathname === '/dashboard') {
      themeDispatch({ type: actions.SET_COMPONENT_RENDER, payload: true });
    }
  }, [history, themeDispatch]);

  return (
    // <Slide
    //   direction="right"
    //   timeout={{ enter: 1000, exit: 400 }}
    //   in={render}
    //   mountOnEnter
    //   unmountOnExit>
    <Grid container>
      <Grid item xs={12} sm={12} md={12} lg={12} style={{ height: 'calc(100% - 80px)' }}>
        <Grid container justify="center" style={{ height: '100%' }}>
          <div className={classes.cardsHolder}>{conditionalCardsRendering()}</div>
        </Grid>
      </Grid>
    </Grid>
    // </Slide>
  );
}

export default React.memo(Dashboard);
