import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import { SSCard, SSTypography } from '@ss/ui-components';
import LogoContainer from 'containers/Logo';
import rolesPermissionsCardTheme from './index.theme';

function RolesPermissionsCard(props) {
  const { theme = 'dark' } = props;
  return (
    <SSCard {...rolesPermissionsCardTheme(theme).card}>
      <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Grid container justify="center" alignItems="center">
            <SSTypography
              label={`USER ROLES & PERMISSIONS`}
              {...rolesPermissionsCardTheme(theme).typography}
            />
          </Grid>
        </Grid>
        <LogoContainer {...rolesPermissionsCardTheme(theme).logo}>Logo</LogoContainer>
      </Grid>
    </SSCard>
  );
}

RolesPermissionsCard.propTypes = {
  theme: PropTypes.string,
};

RolesPermissionsCard.defaultProps = {
  theme: 'dark',
};

export default RolesPermissionsCard;
