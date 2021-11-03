import React from 'react';
import PropTypes from 'prop-types';
import { Card as MUICard } from '@material-ui/core';
import useStyles from './index.styles';

const Card = React.forwardRef((props, ref) => {
  const { children, style, onClick, className } = props;
  const classes = useStyles(props);
  return (
    <MUICard className={`${classes.root} ${className}`} ref={ref} style={style} onClick={onClick}>
      {children}
    </MUICard>
  );
});

Card.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.objectOf(PropTypes.string).isRequired,
  onClick: PropTypes.func,
  backgroundColor: PropTypes.string,
  padding: PropTypes.string,
  color: PropTypes.string,
  borderTopLeftRadius: PropTypes.string,
  borderTopRightRadius: PropTypes.string,
  borderBottomLeftRadius: PropTypes.string,
  borderBottomRightRadius: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  margin: PropTypes.string,
  onHoverBorderColor: PropTypes.string,
  onHoverColor: PropTypes.string,
  onHoverBackgroundColor: PropTypes.string,
  boxShadow: PropTypes.string,
};

Card.defaultProps = {
  onClick: () => {},
  backgroundColor: '#1A1B1D',
  padding: '1em',
  color: '#fff',
  borderTopLeftRadius: '10px',
  borderTopRightRadius: '10px',
  borderBottomLeftRadius: '10px',
  borderBottomRightRadius: '10px',
  width: '370px',
  height: '170px',
  margin: '1em',
  onHoverBorderColor: '',
  onHoverColor: '',
  onHoverBackgroundColor: 'linear-gradient(135deg, #75CFFF 0%, #5735FD 100%)',
  boxShadow: '0 16px 14px -12px #000000',
};

export default Card;
