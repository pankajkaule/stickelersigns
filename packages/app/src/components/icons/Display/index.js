import React from 'react';

function DisplayIcon() {
  return (
    <svg width="160px" height="120px" viewBox="0 0 160 120" version="1.1">
      <defs>
        <filter
          x="-23.1%"
          y="-37.7%"
          width="146.2%"
          height="175.5%"
          filterUnits="objectBoundingBox"
          id="display-filter-1">
          <feGaussianBlur stdDeviation="10" in="SourceGraphic"></feGaussianBlur>
        </filter>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="display-linearGradient-2">
          <stop stop-color="#596E9B" stop-opacity="0.25" offset="0.282411318%"></stop>
          <stop stop-color="#0D1424" stop-opacity="0.25" offset="100%"></stop>
        </linearGradient>
      </defs>
      <g id="Display-icon" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="TV" transform="translate(1.000000, 5.000000)">
          <path
            d="M23,29 L133,29 C138.522847,29 143,33.4771525 143,39 L143,98.5123244 C143,104.035172 138.522847,108.512324 133,108.512324 L23,108.512324 C17.4771525,108.512324 13,104.035172 13,98.5123244 L13,39 C13,33.4771525 17.4771525,29 23,29 Z"
            id="Rectangle"
            fill-opacity="0.2"
            fill="#09090A"
            filter="url(#display-filter-1)"></path>
          <rect
            id="Rectangle"
            stroke="#FFFFFF"
            fill="url(#display-linearGradient-2)"
            x="0.5"
            y="0.5"
            width="156.5"
            height="87.9583333"></rect>
        </g>
      </g>
    </svg>
  );
}

export default DisplayIcon;
