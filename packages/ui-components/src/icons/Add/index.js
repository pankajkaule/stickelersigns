import React from 'react';
import PropTypes from 'prop-types';

function AddIcon({ width, height }) {
  return (
    <svg width={width} height={height} viewBox="0 0 20 20" version="1.1" fill="inherit">
      <defs>
        <path
          d="M6,0 C6.55228475,-1.01453063e-16 7,0.44771525 7,1 L7,5 L11,5 C11.5522847,5 12,5.44771525 12,6 C12,6.55228475 11.5522847,7 11,7 L7,7 L7,11 C7,11.5522847 6.55228475,12 6,12 C5.44771525,12 5,11.5522847 5,11 L5,6.999 L1,7 C0.44771525,7 0,6.55228475 0,6 C0,5.44771525 0.44771525,5 1,5 L5,4.999 L5,1 C5,0.44771525 5.44771525,1.01453063e-16 6,0 Z"
          id="add-path-1"></path>
      </defs>
      <g
        id="XLIV/Component/IconsButton/Add"
        stroke="none"
        stroke-width="1"
        fill="inherit"
        fill-rule="evenodd">
        <g id="XLIV/Color/N05-Button-Hover-Grey" transform="translate(4.000000, 4.000000)">
          <mask id="add-mask-2" fill="inherit">
            <use xlinkHref="#add-path-1"></use>
          </mask>
          <use id="add-Mask" xlinkHref="#add-path-1"></use>
          <g id="XLIV/Color/N07-Light-Grey" mask="url(#add-mask-2)" fill="inherit">
            <g transform="translate(-4.000000, -4.000000)" id="Rectangle">
              <rect x="0" y="0" width="20" height="20"></rect>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}

AddIcon.propTypes = {
  fill: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
};

AddIcon.defaultProps = {
  fill: '#8C8C8C',
  width: '20px',
  height: '20px',
};

export default AddIcon;
