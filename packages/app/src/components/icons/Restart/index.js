import React from 'react';
import PropTypes from 'prop-types';

function RestartIcon({ fill, width, height }) {
  return (
    <svg width={width} height={height} viewBox="0 0 20 20" version="1.1">
      <defs>
        <path
          d="M7.99995367,3.28989247 L8.00046106,5.41584227 C6.23431003,6.18729361 5,7.94950253 5,10 C5,12.7614237 7.23857625,15 10,15 C12.7614237,15 15,12.7614237 15,10 C15,7.94988702 13.7661528,6.18795449 12.0005324,5.41627634 L12.0010432,3.29018925 C14.8919961,4.15107217 17,6.82936074 17,10 C17,13.8659932 13.8659932,17 10,17 C6.13400675,17 3,13.8659932 3,10 C3,6.8289963 5.10848853,4.15045648 7.99995367,3.28989247 Z M10,3 C10.5522847,3 11,3.44771525 11,4 L11,8 C11,8.55228475 10.5522847,9 10,9 C9.44771525,9 9,8.55228475 9,8 L9,4 C9,3.44771525 9.44771525,3 10,3 Z"
          id="restart-path-1"></path>
      </defs>
      <g
        id="XLIV/Component/IconsButton/Restart"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd">
        <mask id="restart-mask-2" fill="white">
          <use xlinkHref="#restart-path-1"></use>
        </mask>
        <use id="Combined-Shape" fill="#FFFFFF" xlinkHref="#restart-path-1"></use>
        <g id="XLIV/Color/N07-Light-Grey" mask="url(#restart-mask-2)" fill={fill}>
          <rect id="Rectangle" x="0" y="0" width="20" height="20"></rect>
        </g>
      </g>
    </svg>
  );
}

RestartIcon.propTypes = {
  fill: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
};

RestartIcon.defaultProps = {
  fill: '#8C8C8C',
  width: '20px',
  height: '20px',
};

export default RestartIcon;
