import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import { SSTypography } from '@ss/ui-components';
import themeConstants from 'themes/constants';

function Summary({ labelPrimary, labelSecondary, theme = 'dark' }) {
  return (
    <Grid item xs={5} sm={5} md={5} lg={5}>
      <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <SSTypography
            color={themeConstants[theme].colorLightGrey}
            font="Typold Bold"
            label={labelPrimary}
            lineHeight="25px"
            margin="0"
            size="18px"
            textAlign="center"
          />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <SSTypography
            color={themeConstants[theme].colorLightGrey}
            font="regular"
            label={labelSecondary}
            lineHeight="16px"
            margin="0"
            size="12px"
            textAlign="center"
          />
        </Grid>
      </Grid>
    </Grid>
  );
}

Summary.propTypes = {
  labelPrimary: PropTypes.string,
  labelSecondary: PropTypes.string,
};
Summary.defaultProps = {
  labelPrimary: '',
  labelSecondary: '',
};

export default Summary;
