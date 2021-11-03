import React from 'react';
import PropTypes from 'prop-types';

function ListIcon({ fill, width, height }) {
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
      <title>List</title>
      <g id="Assets" stroke="none" stroke-width="1" fill="inherit" fill-rule="evenodd">
        <path
          d="M16,12 L16,16 L0,16 L0,12 L16,12 Z M16,6 L16,10 L0,10 L0,6 L16,6 Z M16,0 L16,4 L0,4 L0,0 L16,0 Z"
          id="List"
          fill="inherit"></path>
      </g>
    </svg>
  );
}

ListIcon.propTypes = {
  fill: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
};

ListIcon.defaultProps = {
  fill: '#FFFFFF',
  width: '16px',
  height: '16px',
};

export default ListIcon;
