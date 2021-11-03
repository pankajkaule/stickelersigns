import React from 'react';
// import PropTypes from 'prop-types';

function DeleteIcon() {
  return (
    <svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1">
      <defs>
        <path
          d="M13,8 L13,15 L7,15 L7,8 L13,8 Z M7,5 L13,5 L13,6 L14,6 L14,7 L6,7 L6,6 L7,6 L7,5 Z"
          id="delete-path-1"></path>
      </defs>
      <g
        id="XLIV/Component/IconsButton/Delete"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd">
        <mask id="delete-mask-2" fill="white">
          <use xlinkHref="#delete-path-1"></use>
        </mask>
        <use id="Combined-Shape" fill="#FFFFFF" xlinkHref="#delete-path-1"></use>
        <g id="XLIV/Color/N07-Light-Grey" mask="url(#delete-mask-2)" fill="#8C8C8C">
          <rect id="Rectangle" x="0" y="0" width="20" height="20"></rect>
        </g>
      </g>
    </svg>
  );
}

export default DeleteIcon;
