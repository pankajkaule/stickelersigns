import React, { useCallback, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import { SSTypography, SSDivider, SSCard } from '@ss/ui-components';
import videoWallsCardTheme from './index.theme';
import LogoContainer from 'containers/Logo';
import VideoWallIcon from 'components/icons/VideoWall';
import Summary from 'components/Summary';
import { UserContext } from 'context/user';
import DashboardService from 'utils/services/Dashboard';
function VideoWallsCard(props) {
  const { theme = 'dark' } = props;
  const { userDispatch } = useContext(UserContext);
  const [videoWalls, setVideoWalls] = useState({
    activeVideoWallCount: 0,
    totalVideoWallCount: 0,
  });

  const fetchVideoWallsCount = useCallback(async () => {
    const { getVideoWallCount } = DashboardService;
    const result = await getVideoWallCount({ dispatch: userDispatch });
    setVideoWalls(result);
  }, [userDispatch]);

  useEffect(() => {
    fetchVideoWallsCount();
  }, [fetchVideoWallsCount]);

  return (
    <SSCard {...videoWallsCardTheme(theme).card}>
      <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Grid container justify="center" alignItems="center">
            <SSTypography label="VIDEO WALLS" {...videoWallsCardTheme(theme).typography} />
          </Grid>
        </Grid>
        <LogoContainer {...videoWallsCardTheme(theme).logo}>
          <VideoWallIcon />
        </LogoContainer>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Grid container justify="center">
            <Summary
              labelPrimary={videoWalls.activeVideoWallCount}
              labelSecondary="Active Video Walls"
              theme={theme}
            />
            <SSDivider
              orientation="vertical"
              flexItem={true}
              {...videoWallsCardTheme(theme).verticalDivider}
            />
            <Summary
              labelPrimary={videoWalls.totalVideoWallCount}
              labelSecondary="Total Video Walls"
              theme={theme}
            />
          </Grid>
        </Grid>
      </Grid>
    </SSCard>
  );
}

VideoWallsCard.propTypes = {
  theme: PropTypes.string,
};

VideoWallsCard.defaultProps = {
  theme: 'dark',
};

export default VideoWallsCard;
