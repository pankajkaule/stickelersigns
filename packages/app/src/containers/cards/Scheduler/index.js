import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import { SSTypography, SSDivider, SSCard } from '@ss/ui-components';
import schedulerCardTheme from './index.theme';
import LogoContainer from 'containers/Logo';
import SchedulerIcon from 'components/icons/Scheduler';
import Summary from 'components/Summary';

function SchedulerCard(props) {
  const { theme = 'dark' } = props;

  return (
    <SSCard {...schedulerCardTheme(theme).card}>
      <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Grid container justify="center" alignItems="center">
            <SSTypography label="SCHEDULAR" {...schedulerCardTheme(theme).typography} />
          </Grid>
        </Grid>
        <LogoContainer {...schedulerCardTheme(theme).logo}>
          <SchedulerIcon />
        </LogoContainer>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Grid container justify="center">
            <Summary
              labelPrimary="12"
              labelSecondary="Projects scheduled
for this week "
              theme={theme}
            />
            <SSDivider
              orientation="vertical"
              flexItem={true}
              {...schedulerCardTheme(theme).verticalDivider}
            />
            <Summary
              labelPrimary="20"
              labelSecondary="Projects scheduled
for this month"
              theme={theme}
            />
          </Grid>
        </Grid>
      </Grid>
    </SSCard>
  );
}

SchedulerCard.propTypes = {
  theme: PropTypes.string,
};

SchedulerCard.defaultProps = {
  theme: 'dark',
};

export default SchedulerCard;
