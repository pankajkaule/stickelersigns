import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import moment from 'moment';
import { SSCard, SSTypography, SSDivider } from '@ss/ui-components';
import locationCardStyles from './index.theme';
import useStyles from './index.styles';
import { getCoordintes } from 'utils/helpers/other';
import UserServices from 'utils/services/UsersServices';

function LocationWeatherCard(props) {
  const { theme = 'dark' } = props;
  const [cityName, setCityName] = useState('');
  let day = moment(new Date()).format('ddd, D MMM YY');
  let time = moment(new Date()).format('h:mm A');

  const fetchUserLocation = useCallback(() => {
    const { getUserCity } = UserServices;
    return getCoordintes(async (data) => {
      setCityName(await getUserCity(data[0], data[1]));
    });
  }, []);

  useEffect(() => {
    fetchUserLocation();
  }, [fetchUserLocation]);

  return (
    <SSCard className={useStyles} {...locationCardStyles(theme).card}>
      <Grid container alignItems="center">
        <SSTypography label={cityName} useDefault variant="infoProfile" />
      </Grid>
      <SSDivider {...locationCardStyles(theme).horizontalDivider} />
      <Grid container>
        <Grid item>
          <Grid container>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <SSTypography label={day} useDefault variant="infoProfile" />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <SSTypography label={time} useDefault variant="time" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </SSCard>
  );
}

LocationWeatherCard.propTypes = {
  theme: PropTypes.string,
};

LocationWeatherCard.defaultProps = {
  theme: 'dark',
};

export default LocationWeatherCard;
