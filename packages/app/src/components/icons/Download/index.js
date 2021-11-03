import React from 'react';
import PropTypes from 'prop-types';

function DownloadIcon({ width, height, fill }) {
  return (
    <svg width={width} height={height} viewBox="0 0 20 20" version="1.1" fill="inherit">
      <defs>
        <path
          d="M15,15 L15,16 L5,16 L5,15 L15,15 Z M12,5 L12,10 L14,10 L10,14 L6,10 L8,10 L8,5 L12,5 Z"
          id="download-icon"></path>
      </defs>
      <g
        id="XLIV/Component/IconsButton/Download"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd">
        <mask id="download-icon-mask" fill="white">
          <use xlinkHref="#download-icon"></use>
        </mask>
        <use id="Combined-Shape" fill="inherit" xlinkHref="#download-icon"></use>
        <g id="XLIV/Color/N07-Light-Grey" mask="url(#download-icon-mask)" fill="inherit">
          <rect id="Rectangle" x="0" y="0" width="20" height="20"></rect>
        </g>
      </g>
    </svg>
  );
}

DownloadIcon.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  fill: PropTypes.string,
};

DownloadIcon.defaultProps = {
  width: '20px',
  height: '20px',
  fill: '#8C8C8C',
};

export default DownloadIcon;
