import React from 'react';
import PropTypes from 'prop-types';

function TilesIcon({ fill, width, height }) {
  return (
    <svg
      width={width}
      height={height}
      fill="inherit"
      style={{
        minWidth: { width },
      }}
      viewBox="0 0 16 16"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink">
      <title>Tiles</title>
      <g id="Assets" stroke="none" stroke-width="1" fill-rule="evenodd" fill="inherit">
        <path
          d="M4,12 L4,16 L0,16 L0,12 L4,12 Z M10,12 L10,16 L6,16 L6,12 L10,12 Z M16,12 L16,16 L12,16 L12,12 L16,12 Z M4,6 L4,10 L0,10 L0,6 L4,6 Z M10,6 L10,10 L6,10 L6,6 L10,6 Z M16,6 L16,10 L12,10 L12,6 L16,6 Z M4,0 L4,4 L0,4 L0,0 L4,0 Z M10,0 L10,4 L6,4 L6,0 L10,0 Z M16,0 L16,4 L12,4 L12,0 L16,0 Z"
          id="Tiles"
          fill="inherit"></path>
      </g>
    </svg>
  );
}

TilesIcon.propTypes = {
  fill: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
};

TilesIcon.defaultProps = {
  fill: '#FFFFFF',
  width: '16px',
  height: '16px',
};

export default TilesIcon;
