import React, { useCallback, useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import { SSTypography, SSDivider, SSCard } from '@ss/ui-components';
import mediaCardTheme from './index.theme';
import { typographyTheme } from 'themes/typography.theme';
import LogoContainer from 'containers/Logo';
import MediaIcon from 'components/icons/Media';
import Summary from 'components/Summary';
import DashboardService from 'utils/services/Dashboard';
import { UserContext } from 'context/user';

function MediaCard(props) {
  const { theme = 'dark' } = props;
  const { userDispatch } = useContext(UserContext);
  const [mediaCount, setMediaCount] = useState({ totalImagesCount: 0, totalVideosCount: 0 });
  const history = useHistory();

  const fetchMediaCount = useCallback(async () => {
    const { getAllMediaCount } = DashboardService;
    const result = await getAllMediaCount({ dispatch: userDispatch });
    setMediaCount(result);
  }, [userDispatch]);

  useEffect(() => {
    fetchMediaCount();
  }, [fetchMediaCount]);

  return (
    <SSCard
      {...mediaCardTheme(theme).card}
      onClick={() => {
        history.push('/media');
      }}>
      <Grid container wrap="nowrap" direction="column">
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Grid container justify="center" alignItems="center">
            <SSTypography
              label="MEDIA"
              {...typographyTheme(theme).primary}
              size="14px"
              letterSpacing="3px"
            />
          </Grid>
        </Grid>
        <LogoContainer {...mediaCardTheme(theme).logo}>
          <MediaIcon />
        </LogoContainer>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Grid container justify="center">
            <Summary
              labelPrimary={mediaCount.totalImagesCount}
              labelSecondary="Total Images"
              theme={theme}
            />
            <SSDivider
              {...mediaCardTheme(theme).verticalDivider}
              orientation="vertical"
              flexItem={true}
            />
            <Summary
              labelPrimary={mediaCount.totalVideosCount}
              labelSecondary="Total Videos"
              theme={theme}
            />
          </Grid>
        </Grid>
      </Grid>
    </SSCard>
  );
}

MediaCard.propTypes = {
  theme: PropTypes.string,
};

MediaCard.defaultProps = {
  theme: 'dark',
};

export default MediaCard;
