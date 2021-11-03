import React, { useCallback, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import { SSTypography, SSDivider, SSCard } from '@ss/ui-components';
import { useHistory } from 'react-router';
import displaysCardTheme from './index.theme';
import LogoContainer from 'containers/Logo';
import DisplayIcon from 'components/icons/Display';
import Summary from 'components/Summary';
import DashboardService from 'utils/services/Dashboard';
import { UserContext } from 'context/user';

function DisplaysCard(props) {
  const history = useHistory();
  const { userDispatch } = useContext(UserContext);
  const [displayCount, setDisplayCount] = useState({ displayInUseCount: 0, totalDisplayCount: 0 });
  const { theme = 'dark' } = props;

  const fetchDisplayCount = useCallback(async () => {
    const { getAllDeviceCount } = DashboardService;
    const result = await getAllDeviceCount({ dispatch: userDispatch });
    setDisplayCount(result);
  }, [userDispatch]);

  useEffect(() => {
    fetchDisplayCount();
  }, [fetchDisplayCount]);

  return (
    <SSCard
      {...displaysCardTheme(theme).card}
      onClick={() => {
        history.push('/displays');
      }}>
      <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Grid container justify="center" alignItems="center">
            <SSTypography label="DISPLAYS" {...displaysCardTheme(theme).typography} />
          </Grid>
        </Grid>
        <LogoContainer {...displaysCardTheme(theme).logo}>
          <DisplayIcon />
        </LogoContainer>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Grid container justify="center">
            <Summary
              labelPrimary={displayCount.displayInUseCount}
              labelSecondary="Displays in use"
              theme={theme}
            />
            <SSDivider
              orientation="vertical"
              flexItem={true}
              {...displaysCardTheme(theme).verticalDivider}
            />
            <Summary
              labelPrimary={displayCount.totalDisplayCount}
              labelSecondary="Total Displays"
              theme={theme}
            />
          </Grid>
        </Grid>
      </Grid>
    </SSCard>
  );
}

DisplaysCard.propTypes = {
  theme: PropTypes.string,
};

DisplaysCard.defaultProps = {
  theme: 'dark',
};

export default DisplaysCard;
