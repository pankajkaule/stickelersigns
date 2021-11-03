import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import Typography from '../Typography';
import Progress from '../Progress';
import Button from '../Button';
import useStyles from './index.styles';
import typographyTheme from '../Themes/typography.theme';
import buttonTheme from '../Themes/button.theme';
import dialogTheme from '../Themes/dialog.theme';

const UploadingPopup = React.forwardRef((props, ref) => {
  const { open, list, theme, variant, handleCancel } = props;
  const classes = useStyles(dialogTheme(theme)[variant]);
  const contentList = list.map((el) => (
    <Grid item xs={12} sm={12} md={12} lg={12} xl={12} style={{ margin: '20px 0 0 0' }}>
      <Progress
        {...el}
        useDefault
        variant="determinate"
        themeStyle="uploading"
        theme={theme}
        showCompletionStatus
      />
    </Grid>
  ));
  return open ? (
    <Grid container className={classes.root} ref={ref}>
      <Grid item xs={12} sm={12} md={12} lg={12} style={{ padding: '20px' }}>
        <Grid container>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Grid container alignItems="center" justifyContent="space-between">
              <Grid item>
                <Typography label="UPLOADING…" {...typographyTheme(theme).uploadTitle} />
              </Grid>
              <Grid item>
                <Button onClick={handleCancel} {...buttonTheme(theme).secondary}>
                  Cancel uploading
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} className={classes.contentContainer}>
            <Grid container>{contentList}</Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  ) : (
    ''
  );
});

UploadingPopup.propTypes = {
  open: PropTypes.bool,
  list: PropTypes.arrayOf(PropTypes.object),
  theme: PropTypes.string,
  variant: PropTypes.string,
  handleCancel: PropTypes.func.isRequired,
};

UploadingPopup.defaultProps = {
  open: false,
  list: [],
  theme: 'dark',
  variant: 'uploading',
};

export default UploadingPopup;
