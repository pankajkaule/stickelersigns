import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import { SSCard, SSTypography } from '@ss/ui-components';
import LogoContainer from 'containers/Logo';
import plansPaymentCardTheme from './index.theme';

function PlansPaymentCard(props) {
  const { theme = 'dark' } = props;
  return (
    <SSCard {...plansPaymentCardTheme(theme).card}>
      <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Grid container justify="center" alignItems="center">
            <SSTypography label={`PLANS & PAYMENT`} {...plansPaymentCardTheme(theme).typography} />
          </Grid>
        </Grid>
        <LogoContainer {...plansPaymentCardTheme(theme).logo}>Logo</LogoContainer>
      </Grid>
    </SSCard>
  );
}

PlansPaymentCard.propTypes = {
  theme: PropTypes.string,
};

PlansPaymentCard.defaultProps = {
  theme: 'dark',
};

export default PlansPaymentCard;
