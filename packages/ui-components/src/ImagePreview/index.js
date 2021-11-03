import React from 'react';
import PropTypes from 'prop-types';
import { Avatar, Grid } from '@material-ui/core';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import Button from '../Button';

function ImagePreview(props) {
  const { open, src, styles, buttonStyles, avatarStyles, iconStyles, disabled } = props;

  const actionBtn = disabled ? (
    ''
  ) : (
    <Button
      onClick={open}
      styles={{
        position: 'absolute',
        top: '75%',
        fontSize: '12px',
        lineHeight: '14px',
        height: '40px',
        padding: '10px 15px',
        maxHeight: '40px',
        minHeight: '40px',
        opacity: '1',
        ...buttonStyles,
      }}>
      <AutorenewIcon style={{ ...iconStyles, fontSize: 'inherit', margin: '0 5px 0 0' }} />
      Replace
    </Button>
  );

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{ ...styles, position: 'relative' }}>
      <Avatar src={src} variant="rounded" style={{ ...avatarStyles }} />
      {actionBtn}
    </Grid>
  );
}

ImagePreview.propTypes = {
  open: PropTypes.func,
  src: PropTypes.string,
  styles: PropTypes.objectOf(PropTypes.string),
  buttonStyles: PropTypes.objectOf(PropTypes.string),
  avatarStyles: PropTypes.objectOf(PropTypes.string),
  iconStyles: PropTypes.objectOf(PropTypes.string),
  disabled: PropTypes.bool,
};

ImagePreview.defaultProps = {
  open: () => {},
  src: '',
  styles: {
    width: '250px',
    height: '250px',
  },
  buttonStyles: { color: '#FFF', background: '#2E3142' },
  avatarStyles: { width: '100%', height: '100%' },
  iconStyles: {},
  disabled: false,
};

export default ImagePreview;
