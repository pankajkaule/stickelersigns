import React from 'react';

function SchedulerIcon() {
  return (
    <svg width="160px" height="120px" viewBox="0 0 160 120" version="1.1">
      <defs>
        <filter
          x="-37.5%"
          y="-37.7%"
          width="175.0%"
          height="175.5%"
          filterUnits="objectBoundingBox"
          id="scheduler-filter-1">
          <feGaussianBlur stdDeviation="10" in="SourceGraphic"></feGaussianBlur>
        </filter>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="scheduler-linearGradient-2">
          <stop stop-color="#596E9B" stop-opacity="0.25" offset="0.282411318%"></stop>
          <stop stop-color="#0D1424" stop-opacity="0.25" offset="100%"></stop>
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="100%"
          x2="50%"
          y2="0.282411318%"
          id="scheduler-linearGradient-3">
          <stop stop-color="#596E9B" stop-opacity="0.25" offset="0%"></stop>
          <stop stop-color="#0D1424" stop-opacity="0.25" offset="100%"></stop>
        </linearGradient>
      </defs>
      <g id="Scheduler-icon" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g transform="translate(29.000000, 7.000000)">
          <path
            d="M20,25 L76.6320142,25 C78.4851474,25 80.2342974,25.8562992 81.3709067,27.3199324 L88.7388925,36.8078268 C89.5562991,37.8604167 90,39.1551909 90,40.4878944 L90,94.5123244 C90,100.035172 85.5228475,104.512324 80,104.512324 L20,104.512324 C14.4771525,104.512324 10,100.035172 10,94.5123244 L10,35 C10,29.4771525 14.4771525,25 20,25 Z"
            id="scheduler-Rectangle"
            fill-opacity="0.2"
            fill="#09090A"
            filter="url(#scheduler-filter-1)"></path>
          <path
            d="M0.5,21.6622792 L100.510101,21.6622792 L100.510101,10.7720058 C100.510101,8.2867244 98.4953824,6.27200577 96.0101007,6.27200577 L86.0799885,6.27199969 L86.0800866,2 C86.0800866,1.17157288 85.4085137,0.5 84.5800866,0.5 L79.9220779,0.5 C79.0936508,0.5 78.4220779,1.17157288 78.4220779,2.00001033 L78.4219897,6.272 L22.5879969,6.272 L22.5880231,2 C22.5880231,1.17157288 21.9164502,0.5 21.0880231,0.5 L16.4300144,0.5 C15.6015873,0.5 14.9300144,1.17157288 14.9300144,2.00000191 L14.9299981,6.27199969 L5,6.27200577 C2.51471863,6.27200577 0.5,8.2867244 0.5,10.7720058 L0.5,21.6622792 Z"
            id="scheduler-Combined-Shape"
            stroke="#FFFFFF"
            fill="url(#scheduler-linearGradient-2)"></path>
          <path
            d="M0.5,84.6370851 L100.510101,84.6370851 L100.510101,31.6450216 C100.510101,26.3983165 96.2568061,22.1450216 91.010101,22.1450216 L10,22.1450216 C4.75329488,22.1450216 0.5,26.3983165 0.5,31.6450216 L0.5,84.6370851 Z"
            id="scheduler-Rectangle"
            stroke="#FFFFFF"
            fill="url(#scheduler-linearGradient-3)"
            transform="translate(50.505051, 53.391053) scale(1, -1) translate(-50.505051, -53.391053) "></path>
          <rect
            id="scheduler-Rectangle"
            fill="#FFFFFF"
            transform="translate(28.000000, 44.733045) scale(1, -1) translate(-28.000000, -44.733045) "
            x="19"
            y="35.7330447"
            width="18"
            height="18"
            rx="5"></rect>
          <rect
            id="scheduler-Rectangle-Copy-10"
            fill="#FFFFFF"
            transform="translate(52.000000, 42.733045) scale(1, -1) translate(-52.000000, -42.733045) "
            x="45"
            y="35.7330447"
            width="14"
            height="14"
            rx="4"></rect>
          <rect
            id="scheduler-Rectangle-Copy-11"
            fill="#FFFFFF"
            transform="translate(72.000000, 42.733045) scale(1, -1) translate(-72.000000, -42.733045) "
            x="65"
            y="35.7330447"
            width="14"
            height="14"
            rx="4"></rect>
        </g>
      </g>
    </svg>
  );
}

export default SchedulerIcon;
