import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import { SSTypography, SSDivider, SSCard } from '@ss/ui-components';
import LogoContainer from 'containers/Logo';
import DisplayIcon from 'components/icons/Display';
import Summary from 'components/Summary';
import displayAppsCardTheme from './index.theme';

function DisplayAppsCard(props) {
  const { theme = 'dark' } = props;
  return (
    <SSCard {...displayAppsCardTheme(theme).card} onClick={() => {}}>
      <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Grid container justify="center" alignItems="center">
            <SSTypography
              label="DISPLAYS APP UPDATES"
              {...displayAppsCardTheme(theme).typography}
            />
          </Grid>
        </Grid>
        <LogoContainer {...displayAppsCardTheme(theme).logo}>
          <DisplayIcon />
        </LogoContainer>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Grid container justify="center">
            <Summary labelPrimary="15" labelSecondary="Displays in use" theme={theme} />
            <SSDivider
              orientation="vertical"
              flexItem={true}
              {...displayAppsCardTheme(theme).verticalDivider}
            />
            <Summary labelPrimary="21" labelSecondary="Total Displays" theme={theme} />
          </Grid>
        </Grid>
      </Grid>
    </SSCard>
  );
}

DisplayAppsCard.propTypes = {
  theme: PropTypes.string,
};

DisplayAppsCard.defaultProps = {
  theme: 'dark',
};

export default DisplayAppsCard;
