import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Switch as MUISwitch } from '@material-ui/core';
import useStyles from './index.styles';
import Typography from '../Typography/index';

function Switch(props) {
  const { value, label, valueMapper, labelColor, labelFontSize, onChange, name } = props;
  const classes = useStyles(props);
  return (
    <Grid container spacing={2} alignItems="center">
      <Grid item>
        <Typography
          color={labelColor}
          font={labelFontSize}
          label={label}
          lineHeight="16px"
          margin="0"
          size="12px"
          textAlign="left"
        />
      </Grid>
      <Grid item>
        <MUISwitch
          checked={value}
          focusVisibleClassName={classes.focusVisible}
          classes={{
            root: classes.root,
            switchBase: classes.switchBase,
            thumb: classes.thumb,
            track: classes.track,
            checked: classes.checked,
          }}
          name={name}
          onChange={onChange}
        />
      </Grid>
      <Grid item>
        <Typography
          color={labelColor}
          font={labelFontSize}
          label={valueMapper[value]}
          lineHeight="16px"
          margin="0"
          size="12px"
          textAlign="left"
        />
      </Grid>
    </Grid>
  );
}

Switch.propTypes = {
  value: PropTypes.bool,
  label: PropTypes.string,
  valueMapper: PropTypes.objectOf(PropTypes.string),
  labelColor: PropTypes.string,
  labelFontSize: PropTypes.string,
  onChange: PropTypes.func,
};

Switch.defaultProps = {
  valueMapper: { true: 'ON', false: 'OFF' },
  value: false,
  label: '',
  labelColor: '#8c8c8c',
  labelFontSize: 'medium',
  onChange: () => {},
};

export default Switch;
