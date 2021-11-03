import React from 'react';

function VideoWallIcon() {
  return (
    <svg width="160px" height="120px" viewBox="0 0 160 120" version="1.1">
      <defs>
        <filter
          x="-23.1%"
          y="-37.7%"
          width="146.2%"
          height="175.5%"
          filterUnits="objectBoundingBox"
          id="vw-filter-1">
          <feGaussianBlur stdDeviation="10" in="SourceGraphic"></feGaussianBlur>
        </filter>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="vw-linearGradient-2">
          <stop stop-color="#596E9B" stop-opacity="0.25" offset="0.282411318%"></stop>
          <stop stop-color="#0D1424" stop-opacity="0.25" offset="100%"></stop>
        </linearGradient>
        <path
          d="M76.6666667,49.2857143 L76.6666667,92.5881834 L6.11066753e-13,92.5881834 L6.11066753e-13,49.2857143 L76.6666667,49.2857143 Z M158.809524,49.2857143 L158.809524,92.5881834 L82.1428571,92.5881834 L82.1428571,49.2857143 L158.809524,49.2857143 Z M76.6666667,-8.17124146e-14 L76.6666667,43.3024691 L6.11066753e-13,43.3024691 L6.11066753e-13,-8.17124146e-14 L76.6666667,-8.17124146e-14 Z M158.809524,-8.17124146e-14 L158.809524,43.3024691 L82.1428571,43.3024691 L82.1428571,-8.17124146e-14 L158.809524,-8.17124146e-14 Z"
          id="path-3"></path>
      </defs>
      <g id="VideoWall-icon" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g transform="translate(1.000000, 5.000000)">
          <path
            d="M24,29 L134,29 C139.522847,29 144,33.4771525 144,39 L144,98.5123244 C144,104.035172 139.522847,108.512324 134,108.512324 L24,108.512324 C18.4771525,108.512324 14,104.035172 14,98.5123244 L14,39 C14,33.4771525 18.4771525,29 24,29 Z"
            id="Rectangle"
            fill-opacity="0.2"
            fill="#09090A"
            filter="url(#vw-filter-1)"></path>
          <mask id="vw-mask-4" fill="white">
            <use xlinkHref="#path-3"></use>
          </mask>
          <path
            stroke="#FFFFFF"
            d="M76.1666667,49.7857143 L0.5,49.7857143 L0.5,92.0881834 L76.1666667,92.0881834 L76.1666667,49.7857143 Z M158.309524,49.7857143 L82.6428571,49.7857143 L82.6428571,92.0881834 L158.309524,92.0881834 L158.309524,49.7857143 Z M76.1666667,0.5 L0.5,0.5 L0.5,42.8024691 L76.1666667,42.8024691 L76.1666667,0.5 Z M158.309524,0.5 L82.6428571,0.5 L82.6428571,42.8024691 L158.309524,42.8024691 L158.309524,0.5 Z"></path>
        </g>
      </g>
    </svg>
  );
}

export default VideoWallIcon;
