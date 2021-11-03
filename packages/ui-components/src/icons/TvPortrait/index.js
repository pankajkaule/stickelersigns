import React from 'react';
import PropTypes from 'prop-types';
function TVPortraitIcon({ width, height }) {
  return (
    <svg width={width} height={height} viewBox="0 0 200 200" version="1.1">
      <defs>
        <filter
          x="-18.8%"
          y="-27.8%"
          width="137.5%"
          height="155.6%"
          filterUnits="objectBoundingBox"
          id="tvp-filter-1">
          <feGaussianBlur stdDeviation="10" in="SourceGraphic"></feGaussianBlur>
        </filter>
        <linearGradient
          x1="-17.2755551%"
          y1="25.0481012%"
          x2="104.820023%"
          y2="70.3414105%"
          id="linearGradient-2">
          <stop stop-color="#4C4C4C" offset="0%"></stop>
          <stop stop-color="#212225" offset="100%"></stop>
        </linearGradient>
        <linearGradient
          x1="0%"
          y1="31.3271605%"
          x2="101.595192%"
          y2="69.7810202%"
          id="tvp-linearGradient-3">
          <stop stop-color="#404040" offset="0%"></stop>
          <stop stop-color="#1D1D1D" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="tvp-linearGradient-4">
          <stop stop-color="#010101" offset="0%"></stop>
          <stop stop-color="#000000" offset="100%"></stop>
        </linearGradient>
        <rect id="path-5" x="-28" y="35" width="180" height="110" rx="0.5"></rect>
      </defs>
      <g
        id="XLIV/Component/TV/Portrait"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd">
        <g id="TV" transform="translate(38.000000, 4.000000)">
          <rect
            id="Rectangle-Copy"
            fill="#111116"
            opacity="0.4"
            style={{ mixBlendMode: 'multiply' }}
            filter="url(#tvp-filter-1)"
            transform="translate(62.000000, 120.000000) rotate(-270.000000) translate(-62.000000, -120.000000) "
            x="-18"
            y="66"
            width="160"
            height="108"></rect>
          <g
            id="Rectangle"
            transform="translate(62.000000, 90.000000) rotate(-270.000000) translate(-62.000000, -90.000000) ">
            <rect
              stroke="url(#tvp-linearGradient-3)"
              stroke-width="4"
              fill="url(#linearGradient-2)"
              fill-rule="evenodd"
              x="-30"
              y="33"
              width="184"
              height="114"
              rx="0.5"></rect>
            <rect
              stroke="url(#tvp-linearGradient-4)"
              stroke-width="3"
              x="-29.5"
              y="33.5"
              width="183"
              height="113"
              rx="0.5"></rect>
          </g>
        </g>
      </g>
    </svg>
  );
}

TVPortraitIcon.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
};

TVPortraitIcon.defaultProps = { width: '200px', height: '200px' };

export default TVPortraitIcon;
