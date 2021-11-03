import React from 'react';
import PropTypes from 'prop-types';

function CaptureIcon({ fill, width, height }) {
  return (
    <svg width={width} height={height} viewBox="0 0 20 20" version="1.1">
      <defs>
        <path
          d="M12,4 C13.1045695,4 14,4.8954305 14,6 L15,6 C16.1045695,6 17,6.8954305 17,8 L17,14 C17,15.1045695 16.1045695,16 15,16 L5,16 C3.8954305,16 3,15.1045695 3,14 L3,8 C3,6.8954305 3.8954305,6 5,6 L6,6 C6,4.8954305 6.8954305,4 8,4 L12,4 Z M10,7 C7.790861,7 6,8.790861 6,11 C6,13.209139 7.790861,15 10,15 C12.209139,15 14,13.209139 14,11 C14,8.790861 12.209139,7 10,7 Z M10,9 C11.1045695,9 12,9.8954305 12,11 C12,12.1045695 11.1045695,13 10,13 C8.8954305,13 8,12.1045695 8,11 C8,9.8954305 8.8954305,9 10,9 Z"
          id="capture"></path>
      </defs>
      <g
        id="XLIV/Component/IconsButton/Capture"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd">
        <mask id="capture-mask" fill="white">
          <use xlinkHref="#capture"></use>
        </mask>
        <use id="capture-Combined-Shape" fill="#D8D8D8" xlinkHref="#capture"></use>
        <g id="XLIV/Color/N07-Light-Grey" mask="url(#capture-mask)" fill={fill}>
          <rect id="Rectangle" x="0" y="0" width="20" height="20"></rect>
        </g>
      </g>
    </svg>
  );
}

CaptureIcon.propTypes = {
  fill: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
};

CaptureIcon.defaultProps = {
  fill: '#8C8C8C',
  width: '20px',
  height: '20px',
};

export default CaptureIcon;
