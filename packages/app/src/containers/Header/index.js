import React, { useContext, useEffect, useRef, useState } from 'react';
// import PropTypes from 'prop-types';
import { Badge, Grid } from '@material-ui/core';
import { SSAccountPopover, SSBreadCrumb, SSButton, SSTypography } from '@ss/ui-components';
import { useHistory } from 'react-router';
import headerTheme from './index.theme';
import { ThemeContext } from 'context/theme';
import themeConstants from 'themes/constants';
import { getHeaderDetailsFromPath } from 'utils/helpers/routesHelper';
import useStyles from 'App.styles';
import NotificationIcon from 'components/icons/Notification';
import { UserContext } from 'context/user';
import { typographyTheme } from 'themes/typography.theme';

import * as actions from 'utils/actionTypes';
import userStore from 'utils/stores/userStore';
import { convertIntoBase64Image } from 'utils/helpers/dataConverters';

function Header(props) {
  const { absolutePaths } = props;
  const [linksContainer, setLinksContainer] = useState([]);
  const [absolute, setAbsolute] = useState(false);
  const { themeState, themeDispatch } = useContext(ThemeContext);
  const { userState, userDispatch } = useContext(UserContext);
  const { firstName, lastName, roles, photo } = userState;
  const { theme } = themeState;
  const [openProfilePopover, setOpenProfilePopover] = useState(false);
  const history = useHistory();
  const pathName = history.location.pathname;
  const headerClasses = useStyles();
  const profilePopOverRef = useRef(null);

  let absoluteStyle = {
    zIndex: 1301,
    background: themeConstants[theme].colorBGDark,
    position: 'absolute',
    top: 0,
    width: '100vw',
    border: 0,
    right: 0,
    left: 0,
    padding: '20px 0 0 0px',
    textAlign: 'center',
    height: '84px',
    justifyContent: 'center',
  };

  useEffect(() => {
    setLinksContainer(getHeaderDetailsFromPath(pathName));
    if (absolutePaths.includes(pathName)) {
      setAbsolute(true);
    } else {
      setAbsolute(false);
    }
  }, [absolutePaths, pathName]);

  const handleLogout = () => {
    localStorage.clear();
    userDispatch({ type: actions.STORE_USER_DATA, payload: userStore });
    history.push('/');
  };

  const handleOpenProfileInfo = () => {
    setOpenProfilePopover(true);
  };

  const handleCloseProfileInfo = () => {
    setOpenProfilePopover(false);
  };

  const handleManageAccount = () => {
    history.push('/account/manageAccount');
    handleCloseProfileInfo();
  };
  const linksContent = linksContainer.map((el, index) => (
    <SSTypography
      color={
        el.path === pathName
          ? themeConstants[theme].colorBlueHighlights
          : themeConstants[theme].colorGreyHighlights
      }
      size="14px"
      font={el.path === pathName ? 'Typold ExtraBold' : 'Typold Book'}
      label={el.label}
      margin={index ? '0px 30px ' : '0px 30px 0 0'}
      cursor="pointer"
      onClick={() => {
        themeDispatch({ type: 'SET_COMPONENT_RENDER', payload: false });
        setTimeout(() => {
          history.push(el.path);
        }, 100);
      }}
    />
  ));

  let styles = absolute ? absoluteStyle : { height: '44px', margin: '20px 0px' };

  const userInitials =
    firstName && firstName !== undefined && lastName && lastName !== undefined
      ? `${firstName[0]}${lastName[0]}`
      : '';

  const userName =
    firstName && firstName !== undefined && lastName && lastName !== undefined
      ? `${firstName} ${lastName}`
      : '';

  const headerContent = absolute ? (
    <>
      <Grid item xs={12} sm={12} md={12} lg={12} style={{ ...styles }}>
        <Grid container justify="center">
          <Grid item xs={11} sm={11} md={11} lg={11} className={headerClasses.breadCrumbContainer}>
            <Grid container justify="space-between" alignItems="center">
              <Grid item>
                <SSBreadCrumb font="14px" color="#8c8c8c">
                  {linksContent}
                </SSBreadCrumb>
              </Grid>
              <Grid item>
                <SSButton {...headerTheme(theme).notificationBtn}>
                  <Badge
                    color="secondary"
                    variant="dot"
                    classes={{ badge: headerClasses.badgeStyle }}>
                    <NotificationIcon />
                  </Badge>
                </SSButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  ) : (
    <Grid item xs={12} sm={12} md={12} lg={12} style={{ ...styles }}>
      <Grid container justify="center">
        <Grid item xs={12} sm={12} md={12} lg={12} className={headerClasses.breadCrumbContainer}>
          <Grid container justify="space-between" alignItems="center">
            <Grid item>
              <SSBreadCrumb font="14px" color="#8c8c8c">
                {linksContent}
              </SSBreadCrumb>
            </Grid>
            <Grid item>
              <Grid container spacing={2} alignItems="center">
                <Grid item>
                  <SSTypography
                    label={roles && roles.length ? roles[0].displayName : ''}
                    {...typographyTheme(theme).secondary}
                  />
                </Grid>
                <Grid item>
                  <SSButton {...headerTheme(theme).notificationBtn}>
                    <Badge
                      color="secondary"
                      variant="dot"
                      classes={{ badge: headerClasses.badgeStyle }}>
                      <NotificationIcon />
                    </Badge>
                  </SSButton>
                </Grid>
                <Grid item>
                  <SSButton
                    onClick={openProfilePopover ? handleCloseProfileInfo : handleOpenProfileInfo}
                    {...headerTheme(theme, openProfilePopover).notificationBtn}
                    ref={profilePopOverRef}>
                    {userInitials}
                  </SSButton>
                  <SSAccountPopover
                    open={openProfilePopover}
                    id="profile-popover"
                    anchorEl={profilePopOverRef.current}
                    userName={userName}
                    handleClose={handleCloseProfileInfo}
                    role={roles && roles.length ? roles[0].displayName : ''}
                    handleManageAccount={handleManageAccount}
                    handleLogout={handleLogout}
                    profileUrl={convertIntoBase64Image(photo)}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );

  return <>{headerContent}</>;
}

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
