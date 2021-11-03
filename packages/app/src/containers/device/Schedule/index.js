import React from 'react';
// import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import { SSTypography } from '@ss/ui-components';
import useStyles from './index.styles';
import { typographyTheme } from 'themes/typography.theme';
import themeConstants from 'themes/constants';

function Schedule(props) {
  const { theme = 'dark' } = props;
  const classes = useStyles();
  return (
    <Grid container justify="center" alignItems="center" className={classes.root}>
      <Grid item className={classes.container}>
        <SSTypography
          label="This section will be designed as a part of
        projects and scheduler"
          {...typographyTheme(theme).primary}
          font="24px"
          lineHeight="32px"
          color={themeConstants[theme].colorLightBlack}
          textAlign="center"
        />
      </Grid>
    </Grid>
  );
}

export default Schedule;
