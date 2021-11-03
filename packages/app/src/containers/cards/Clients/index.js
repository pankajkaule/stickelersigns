import React, { useCallback, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import { SSTypography, SSDivider, SSCard } from '@ss/ui-components';
import LogoContainer from 'containers/Logo';
import Summary from 'components/Summary';
import clientsCardTheme from './index.theme';
import { useHistory } from 'react-router';
import { UserContext } from 'context/user';
import DashboardService from 'utils/services/Dashboard';

function ClientsCard(props) {
  const { theme = 'dark' } = props;
  const history = useHistory();
  const { userDispatch } = useContext(UserContext);
  const [clientCount, setClientCount] = useState({
    totalActiveClients: 0,
    totalClients: 0,
  });

  const fetchClientCount = useCallback(async () => {
    const { getClientCount } = DashboardService;
    const result = await getClientCount({ dispatch: userDispatch });
    setClientCount(result);
  }, [userDispatch]);

  useEffect(() => {
    fetchClientCount();
  }, [fetchClientCount]);

  return (
    <SSCard {...clientsCardTheme(theme).card} onClick={() => history.push('/clients')}>
      <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Grid container justify="center" alignItems="center">
            <SSTypography label="CLIENTS" {...clientsCardTheme(theme).typography} />
          </Grid>
        </Grid>
        <LogoContainer {...clientsCardTheme(theme).logo}>Logo</LogoContainer>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Grid container justify="center">
            <Summary
              labelPrimary={clientCount.totalClients}
              labelSecondary="Total Clients"
              theme={theme}
            />
            <SSDivider
              orientation="vertical"
              flexItem={true}
              {...clientsCardTheme(theme).verticalDivider}
            />
            <Summary
              labelPrimary={clientCount.totalActiveClients}
              labelSecondary="Active Clients"
              theme={theme}
            />
          </Grid>
        </Grid>
      </Grid>
    </SSCard>
  );
}

ClientsCard.propTypes = {
  theme: PropTypes.string,
};

ClientsCard.defaultProps = {
  theme: 'dark',
};

export default ClientsCard;
