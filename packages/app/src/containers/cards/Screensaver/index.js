import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import { SSCard, SSTypography } from '@ss/ui-components';
import screenSaverCardTheme from './index.theme';
import LogoContainer from 'containers/Logo';
import ScreenSaverIcon from 'components/icons/ScreenSaver';

function ScreenSaverCard(props) {
  const { theme = 'dark' } = props;
  return (
    <SSCard {...screenSaverCardTheme(theme).card}>
      <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Grid container justify="center" alignItems="center">
            <SSTypography label="SCREENSAVER" {...screenSaverCardTheme(theme).typography} />
          </Grid>
        </Grid>
        <LogoContainer {...screenSaverCardTheme(theme).logo}>
          <ScreenSaverIcon />
        </LogoContainer>
      </Grid>
    </SSCard>
  );
}

ScreenSaverCard.propTypes = {
  theme: PropTypes.string,
};

ScreenSaverCard.defaultProps = {
  theme: 'dark',
};

export default ScreenSaverCard;
