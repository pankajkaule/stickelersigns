import React from 'react';

function AccountIcon() {
  return (
    <svg width="100px" height="100px" viewBox="0 0 100 100" version="1.1">
      <defs>
        <filter
          x="-158.7%"
          y="-158.7%"
          width="417.4%"
          height="417.4%"
          filterUnits="objectBoundingBox"
          id="account-filter-1">
          <feGaussianBlur stdDeviation="10" in="SourceGraphic"></feGaussianBlur>
        </filter>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="account-linearGradient-2">
          <stop stop-color="#596E9B" stop-opacity="0.25" offset="0.282411318%"></stop>
          <stop stop-color="#0D1424" stop-opacity="0.25" offset="100%"></stop>
        </linearGradient>
      </defs>
      <g id="XLIV/Section/Account" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Account-icon" transform="translate(29.000000, 24.000000)">
          <circle
            id="account-Oval-Copy-3"
            fill="#1D1F2E"
            filter="url(#account-filter-1)"
            cx="20.6197183"
            cy="18.9014085"
            r="9.45070423"></circle>
          <path
            d="M20.8963953,22.8380282 C10.751764,22.8380282 0.5,30.0602773 0.5,37.2458224 C0.5,45.9367508 5.13750794,49.3601098 20.8963953,49.3601098 C36.6552827,49.3601098 41.2927906,45.9367508 41.2927906,37.2458224 C41.2927906,30.0602773 31.0410267,22.8380282 20.8963953,22.8380282 Z M20.6197183,1.35915493 C15.6763809,1.35915493 11.6690141,5.36652171 11.6690141,10.3098592 C11.6690141,15.2531966 15.6763809,19.2605634 20.6197183,19.2605634 C25.5630558,19.2605634 29.5704225,15.2531966 29.5704225,10.3098592 C29.5704225,5.36652171 25.5630558,1.35915493 20.6197183,1.35915493 Z"
            id="account-Combined-Shape"
            stroke="#BBB9C4"
            fill="url(#account-linearGradient-2)"></path>
        </g>
      </g>
    </svg>
  );
}

export default AccountIcon;
