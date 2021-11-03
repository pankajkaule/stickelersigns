import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import { SSCard, SSTypography } from '@ss/ui-components';
import LogoContainer from 'containers/Logo';
import notificationCardTheme from './index.theme';

function NotificationCard(props) {
  const { theme = 'dark' } = props;

  return (
    <SSCard {...notificationCardTheme(theme).card}>
      <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Grid container justify="center" alignItems="center">
            <SSTypography label="NOTIFICATIONS" {...notificationCardTheme(theme).typography} />
          </Grid>
        </Grid>
        <LogoContainer {...notificationCardTheme(theme).logo}>Logo</LogoContainer>
      </Grid>
    </SSCard>
  );
}

NotificationCard.propTypes = {
  dark: PropTypes.string,
};

NotificationCard.defaultProps = {
  dark: 'dark',
};

export default NotificationCard;
