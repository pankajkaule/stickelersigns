import React from 'react';
import PropTypes from 'prop-types';
function TVLandScapeIcon({ width, height }) {
  return (
    <svg width={width} height={height} viewBox="0 0 200 200" version="1.1">
      <defs>
        <filter
          x="-18.8%"
          y="-27.8%"
          width="137.5%"
          height="155.6%"
          filterUnits="objectBoundingBox"
          id="tvl-filter-1">
          <feGaussianBlur stdDeviation="10" in="SourceGraphic"></feGaussianBlur>
        </filter>
        <linearGradient
          x1="-17.2755551%"
          y1="25.0481012%"
          x2="104.820023%"
          y2="70.3414105%"
          id="tvl-linearGradient-2">
          <stop stop-color="#4C4C4C" offset="0%"></stop>
          <stop stop-color="#212225" offset="100%"></stop>
        </linearGradient>
        <linearGradient
          x1="0%"
          y1="31.3271605%"
          x2="101.595192%"
          y2="69.7810202%"
          id="tvl-linearGradient-3">
          <stop stop-color="#404040" offset="0%"></stop>
          <stop stop-color="#1D1D1D" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-4">
          <stop stop-color="#010101" offset="0%"></stop>
          <stop stop-color="#000000" offset="100%"></stop>
        </linearGradient>
        <rect id="path-5" x="0" y="0" width="180" height="110" rx="0.5"></rect>
      </defs>
      <g
        id="XLIV/Component/TV/Landscape"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd">
        <g id="TV" transform="translate(10.000000, 45.000000)">
          <rect
            id="Rectangle-Copy"
            fill="#111116"
            opacity="0.4"
            style={{ mixBlendMode: 'multiply' }}
            filter="url(#tvl-filter-1)"
            x="10"
            y="22"
            width="160"
            height="108"
            rx="2"></rect>
          <g id="Rectangle">
            <rect
              stroke="url(#tvl-linearGradient-3)"
              stroke-width="4"
              fill="url(#tvl-linearGradient-2)"
              fill-rule="evenodd"
              x="-2"
              y="-2"
              width="184"
              height="114"
              rx="0.5"></rect>
            <rect
              stroke="url(#linearGradient-4)"
              stroke-width="3"
              x="-1.5"
              y="-1.5"
              width="183"
              height="113"
              rx="0.5"></rect>
          </g>
        </g>
      </g>
    </svg>
  );
}

TVLandScapeIcon.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
};

TVLandScapeIcon.defaultProps = { width: '200px', height: '200px' };

export default TVLandScapeIcon;
