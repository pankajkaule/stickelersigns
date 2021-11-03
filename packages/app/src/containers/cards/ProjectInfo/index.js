import React from 'react';
import PropTypes from 'prop-types';
import { SSButton, SSCard, SSTypography } from '@ss/ui-components';
import { Grid } from '@material-ui/core';
import { Settings } from '@material-ui/icons';
import projectInfoCardTheme from './index.theme';
import useStyles from './index.styles';
import LogoContainer from 'containers/Logo';

function ProjectInfo(props) {
  const { theme = 'dark' } = props;
  const classes = useStyles(props);
  return (
    <Grid item className={classes.cardsContainer}>
      <SSCard {...projectInfoCardTheme(theme).card}>
        <Grid container>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Grid container justify="space-between">
              <Grid item xs={9} md={9} sm={9} lg={9}>
                <Grid container>
                  <Grid item xs={12} md={12} sm={12} lg={12}>
                    <SSTypography
                      label="Project Name"
                      {...projectInfoCardTheme(theme).typographyBold}
                    />
                  </Grid>
                  <Grid item xs={12} md={12} sm={12} lg={12}>
                    <SSTypography
                      label="Status: Assigned"
                      {...projectInfoCardTheme(theme).typographyRegular}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <SSButton variant="contained" {...projectInfoCardTheme(theme).settingsButton}>
                  <Settings />
                </SSButton>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <LogoContainer {...projectInfoCardTheme(theme).logo}>Logo</LogoContainer>
          </Grid>
        </Grid>
      </SSCard>
    </Grid>
  );
}

ProjectInfo.propTypes = {
  theme: PropTypes.string,
};

ProjectInfo.defaultProps = {
  theme: 'dark',
};

export default ProjectInfo;
