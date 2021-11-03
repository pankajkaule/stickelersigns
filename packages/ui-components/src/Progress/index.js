import React from 'react';
import PropTypes from 'prop-types';
import { Grid, LinearProgress } from '@material-ui/core';
import useStyles from './index.styles';
import Typography from '../Typography';
import progressTheme from '../Themes/progress.theme';

function Progress(props) {
  const {
    variant,
    value,
    label,
    description,
    useDefault,
    theme,
    themeStyle,
    showCompletionStatus,
  } = props;
  const completionStatus = Number(value) === 0 ? 'Preparing..' : `${value}%`;
  const themeContainer = useDefault ? progressTheme(theme, value)[themeStyle] : props;
  const classes = useStyles(themeContainer);
  return (
    <Grid container>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography
              label={label}
              color={themeContainer.labelColor}
              size="12px"
              font="Typold Regular"
              lineHeight="16px"
              letterSpacing="normal"
            />
          </Grid>
          {showCompletionStatus ? (
            <Grid item>
              <Typography
                label={completionStatus}
                color={themeContainer.completionStatus}
                size="12px"
                font="Typold Bold"
                lineHeight="16px"
                letterSpacing="normal"
              />
            </Grid>
          ) : (
            ''
          )}
        </Grid>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <LinearProgress
          classes={{ root: classes.root, colorPrimary: classes.colorPrimary, bar: classes.bar }}
          value={value}
          variant={variant}
        />
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <Typography
          label={description}
          color={themeContainer.labelColor}
          size="16px"
          font="Typold Regular"
          lineHeight="22px"
          letterSpacing="normal"
        />
      </Grid>
    </Grid>
  );
}

Progress.propTypes = {
  variant: PropTypes.string,
  label: PropTypes.string,
  description: PropTypes.string,
  value: PropTypes.string,
  useDefault: PropTypes.bool,
  theme: PropTypes.string,
  themeStyle: PropTypes.string,
  showCompletionStatus: PropTypes.bool,
};

Progress.defaultProps = {
  variant: '',
  label: '',
  description: '',
  value: 0,
  useDefault: false,
  theme: 'dark',
  themeStyle: 'primary',
  showCompletionStatus: false,
};

export default Progress;
