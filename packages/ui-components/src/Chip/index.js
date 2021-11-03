import React from 'react';
import PropTypes from 'prop-types';
import { Chip as MUIChip } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import useStyles from './index.styles';

function Chip(props) {
  const { label, onDelete } = props;
  const classes = useStyles(props);
  return (
    <MUIChip label={label} onDelete={onDelete} className={classes.root} deleteIcon={<Close />} />
  );
}

Chip.propTypes = {
  label: PropTypes.string,
  onDelete: PropTypes.func,
};

Chip.defaultProps = {
  label: '',
  onDelete: () => {},
};

export default Chip;
