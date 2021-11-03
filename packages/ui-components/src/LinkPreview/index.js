import React from 'react';
import PropTypes from 'prop-types';

const LinkPreview = React.forwardRef((props, ref) => {
  const { url } = props;
  return <embed type="video/webm" src={url} width="300" height="200" />;
});

LinkPreview.propTypes = {};

LinkPreview.defaultProps = {
  url: 'https://youtu.be/Gbuse4WX01I',
};

export default LinkPreview;
