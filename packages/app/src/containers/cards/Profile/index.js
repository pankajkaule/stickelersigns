import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import { SSCard, SSTypography } from '@ss/ui-components';
import profileCardTheme from './index.theme';
import LogoContainer from 'containers/Logo';
import AccountIcon from 'components/icons/Account';

function ProfileCard(props) {
  const { theme = 'dark' } = props;

  return (
    <SSCard {...profileCardTheme(theme).card}>
      <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Grid container justify="center" alignItems="center">
            <SSTypography label="ACCOUNT" {...profileCardTheme(theme).typography} />
          </Grid>
        </Grid>
        <LogoContainer {...profileCardTheme(theme).logo}>
          <AccountIcon />
        </LogoContainer>
      </Grid>
    </SSCard>
  );
}

ProfileCard.propTypes = {
  dark: PropTypes.string,
};

ProfileCard.defaultProps = {
  dark: 'dark',
};

export default ProfileCard;
