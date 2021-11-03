import React from 'react';
import PropTypes from 'prop-types';
import { Avatar, Grid } from '@material-ui/core';
import Popover from '../Popover';
import Button from '../Button';
import Divider from '../Divider';
import Typography from '../Typography';
import useStyles from './index.styles';

function AccountPopover(props) {
  const {
    open,
    anchorEl,
    anchorOrigin,
    transformOrigin,
    id,
    userName,
    role,
    handleManageAccount,
    handleLogout,
    profileUrl,
    handleClose,
  } = props;
  const classes = useStyles();
  return (
    <Popover
      id={id}
      open={open}
      anchorEl={anchorEl}
      anchorOrigin={anchorOrigin}
      transformOrigin={transformOrigin}
      handleClose={handleClose}>
      <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={12} className={classes.profileInfoContainer}>
          <Grid container alignItems="center" spacing={2}>
            <Grid item xs={12} sm={3} md={3} lg={3}>
              <Avatar
                src={profileUrl}
                title={userName}
                variant="rounded"
                className={classes.avatar}
              />
            </Grid>
            <Grid item xs={12} sm={9} md={9} lg={9}>
              <Grid container>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                  <Typography label={userName} useDefault variant="userName" />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                  <Typography label={role} useDefault variant="roleInfo" />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} style={{ padding: '20px' }}>
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item>
              <Button useDefault themeType="transparent" onClick={handleManageAccount}>
                Manage Account
              </Button>
            </Grid>
            <Grid item>
              <Divider orientation="vertical" useDefault themeType="vertical" />
            </Grid>
            <Grid item>
              <Button useDefault themeType="transparent" onClick={handleLogout}>
                Logout
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Popover>
  );
}

AccountPopover.propTypes = {
  ...Popover.propTypes,
  userName: PropTypes.string,
  role: PropTypes.string,
  handleManageAccount: PropTypes.func,
  handleLogout: PropTypes.func,
  profileUrl: PropTypes.string,
};

AccountPopover.defaultProps = {
  userName: '',
  role: '',
  handleManageAccount: () => {},
  handleLogout: () => {},
  profileUrl: '',
};

export default AccountPopover;
