import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import { SSCard, SSTypography } from '@ss/ui-components';
import settingsCardTheme from './index.theme';
import LogoContainer from 'containers/Logo';
import SettingsIcon from 'components/icons/Settings';

function SettingsCard(props) {
  const { theme = 'dark' } = props;
  return (
    <SSCard {...settingsCardTheme(theme).card}>
      <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Grid container justify="center" alignItems="center">
            <SSTypography label="SETTINGS" {...settingsCardTheme(theme).typography} />
          </Grid>
        </Grid>
        <LogoContainer {...settingsCardTheme(theme).logo}>
          <SettingsIcon />
        </LogoContainer>
      </Grid>
    </SSCard>
  );
}

SettingsCard.propTypes = {
  theme: PropTypes.string,
};

SettingsCard.defaultProps = {
  theme: 'dark',
};

export default SettingsCard;
