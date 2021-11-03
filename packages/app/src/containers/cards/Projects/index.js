import React, { useCallback, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import { SSCard, SSDivider, SSTypography } from '@ss/ui-components';
import projectsCardTheme from './index.theme';
import { useHistory } from 'react-router';
import LogoContainer from 'containers/Logo';
import ProjectsIcon from 'components/icons/Projects';
import Summary from 'components/Summary';
import { UserContext } from 'context/user';
import DashboardService from 'utils/services/Dashboard';

function ProjectsCard(props) {
  const { theme = 'dark' } = props;
  const history = useHistory();
  const { userDispatch } = useContext(UserContext);
  const [projectsCount, setProjectsCount] = useState({
    liveProjectCount: 0,
    totalProjectCount: 0,
  });

  const fetchProjectsCount = useCallback(async () => {
    const { getProjectCount } = DashboardService;
    const result = await getProjectCount({ dispatch: userDispatch });
    setProjectsCount(result);
  }, [userDispatch]);

  useEffect(() => {
    fetchProjectsCount();
  }, [fetchProjectsCount]);
  return (
    <SSCard
      {...projectsCardTheme(theme).card}
      onClick={() => {
        setTimeout(() => {
          history.push('/projects');
        }, 100);
      }}>
      <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Grid container justify="center" alignItems="center">
            <SSTypography label="PROJECTS" {...projectsCardTheme(theme).typography} />
          </Grid>
        </Grid>
        <LogoContainer {...projectsCardTheme(theme).logo}>
          <ProjectsIcon />
        </LogoContainer>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Grid container justify="center">
            <Summary
              labelPrimary={projectsCount.liveProjectCount}
              labelSecondary="Live Projects"
              theme={theme}
            />
            <SSDivider
              orientation="vertical"
              flexItem={true}
              {...projectsCardTheme(theme).verticalDivider}
            />
            <Summary
              labelPrimary={projectsCount.totalProjectCount}
              labelSecondary="Total Projects"
              theme={theme}
            />
          </Grid>
        </Grid>
      </Grid>
    </SSCard>
  );
}

ProjectsCard.propTypes = {
  theme: PropTypes.string,
};

ProjectsCard.defaultProps = {
  theme: 'dark',
};

export default ProjectsCard;
