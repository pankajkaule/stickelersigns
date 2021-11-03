import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import { SSCard, SSTypography } from '@ss/ui-components';
import userCardTheme from './index.theme';
import LogoContainer from 'containers/Logo';
import { useHistory } from 'react-router';

function UserCard(props) {
  const { theme = 'dark' } = props;
  const history = useHistory();
  return (
    <SSCard
      {...userCardTheme(theme).card}
      onClick={() => {
        history.push('/users');
      }}>
      <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Grid container justify="center" alignItems="center">
            <SSTypography label="USERS" {...userCardTheme(theme).typography} />
          </Grid>
        </Grid>
        <LogoContainer {...userCardTheme(theme).logo}></LogoContainer>
      </Grid>
    </SSCard>
  );
}

UserCard.propTypes = {
  theme: PropTypes.string,
};

UserCard.defaultProps = {
  theme: 'dark',
};

export default UserCard;
