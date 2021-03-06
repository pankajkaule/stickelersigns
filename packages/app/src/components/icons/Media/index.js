import React from 'react';

function MediaIcon() {
  return (
    <svg width="160px" height="120px" viewBox="0 0 160 120" version="1.1">
      <defs>
        <filter
          x="-37.5%"
          y="-37.7%"
          width="175.0%"
          height="175.5%"
          filterUnits="objectBoundingBox"
          id="media-filter-1">
          <feGaussianBlur stdDeviation="10" in="SourceGraphic"></feGaussianBlur>
        </filter>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="media-linearGradient-2">
          <stop stop-color="#596E9B" stop-opacity="0.25" offset="0.282411318%"></stop>
          <stop stop-color="#0D1424" stop-opacity="0.25" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="50%" y1="0.282411318%" x2="50%" y2="100%" id="media-linearGradient-3">
          <stop stop-color="#596E9B" stop-opacity="0.25" offset="0%"></stop>
          <stop stop-color="#0D1424" stop-opacity="0.25" offset="100%"></stop>
        </linearGradient>
      </defs>
      <g id="Media-icon" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g transform="translate(29.000000, 10.000000)">
          <path
            d="M10,20 L66.6320142,20 C68.4851474,20 70.2342974,20.8562992 71.3709067,22.3199324 L78.7388925,31.8078268 C79.5562991,32.8604167 80,34.1551909 80,35.4878944 L80,89.5123244 C80,95.0351719 75.5228475,99.5123244 70,99.5123244 L10,99.5123244 C4.4771525,99.5123244 6.76353751e-16,95.0351719 0,89.5123244 L0,30 C-2.45271059e-15,24.4771525 4.4771525,20 10,20 Z"
            id="Rectangle"
            fill-opacity="0.2"
            fill="#09090A"
            filter="url(#media-filter-1)"></path>
          <path
            d="M79.887429,30.120376 C79.037468,30.5427656 78.5,31.4100377 78.5,32.3591671 L78.5,58.0167108 C78.5,59.0189326 79.0985267,59.9242872 80.0206461,60.3168991 L98.0614625,67.9981586 C98.3711352,68.1300084 98.7042431,68.1979704 99.0408163,68.1979704 C100.421528,68.1979704 101.540816,67.0786822 101.540816,65.6979704 L101.540816,23.393753 C101.540816,23.0077024 101.451411,22.6268966 101.279607,22.2811819 C100.665151,21.0447318 99.1646955,20.5405058 97.9282453,21.1549619 L79.887429,30.120376 Z"
            id="Rectangle"
            stroke="#FFFFFF"
            fill="url(#media-linearGradient-2)"></path>
          <rect
            id="Rectangle"
            stroke="#FFFFFF"
            fill="url(#media-linearGradient-3)"
            x="0.5"
            y="0.5"
            width="78.5123244"
            height="78.5123244"
            rx="10"></rect>
          <path
            d="M42.2371518,28.7166281 L48.3805567,49.3401772 C48.8535654,50.928078 47.9497667,52.5987752 46.361866,53.0717838 C45.8030276,53.2382523 45.2077885,53.2382523 44.6489501,53.0717838 L24.0254009,46.9283789 C22.9668004,46.6130398 22.364268,45.4992417 22.6796071,44.4406412 C22.7744723,44.1221764 22.9471921,43.8323668 23.1821593,43.5973996 L38.9061724,27.8733865 C39.687221,27.0923379 40.953551,27.0923379 41.7345996,27.8733865 C41.9695668,28.1083537 42.1422865,28.3981633 42.2371518,28.7166281 Z"
            id="Rectangle-Copy-11"
            fill="#FFFFFF"
            transform="translate(35.386484, 40.077711) scale(1, -1) rotate(-45.000000) translate(-35.386484, -40.077711) "></path>
        </g>
      </g>
    </svg>
  );
}

export default MediaIcon;
