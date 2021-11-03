import React from 'react';
import PropTypes from 'prop-types';

function ScreenSaverIcon({ width, height }) {
  return (
    <svg width={width} height={height} viewBox="0 0 160 120" version="1.1">
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="screen-saver-linearGradient-1">
          <stop stop-color="#596E9B" stop-opacity="0.25" offset="0.282411318%"></stop>
          <stop stop-color="#0D1424" stop-opacity="0.25" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="screen-saver-linearGradient-2">
          <stop stop-color="#596E9B" stop-opacity="0.25" offset="0.282411318%"></stop>
          <stop stop-color="#0D1424" stop-opacity="0.25" offset="100%"></stop>
        </linearGradient>
      </defs>
      <g id="Screensaver-icon" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g transform="translate(23.000000, 10.000000)">
          <rect
            id="Rectangle"
            stroke="#FFFFFF"
            fill="url(#screen-saver-linearGradient-1)"
            x="35.3973607"
            y="0.5"
            width="78.0322581"
            height="75.7741935"
            rx="6"></rect>
          <circle
            id="Oval"
            fill-opacity="0.8"
            fill="#FFFFFF"
            cx="92.3753666"
            cy="21.5542522"
            r="9.93548387"></circle>
          <path
            d="M31.2121464,27.6948873 C30.9245906,27.3958054 30.5970547,27.1379281 30.2388465,26.9285835 C28.0931298,25.6745805 25.3371125,26.3974573 24.0831095,28.543174 L2.19029313,66.0038357 C2.05607961,66.2334876 1.98534771,66.4946986 1.98534771,66.7606935 C1.98534771,67.5891206 2.65692058,68.2606935 3.48534771,68.2606935 L90.4141493,68.2606935 C90.7458618,68.2606935 91.0682183,68.1507391 91.3307883,67.948032 C91.9865373,67.4417863 92.1077337,66.4998034 91.6014879,65.8440544 L70.9825089,39.1359293 C70.7648437,38.8539837 70.5144732,38.5988783 70.2366546,38.3759696 C68.2982032,36.8206466 65.4659395,37.1312335 63.9106164,39.0696849 L58.6400762,45.6385364 C58.4652783,45.8563929 58.2766199,46.0627559 58.0752741,46.2563421 C55.4874918,48.7443959 51.3727135,48.6635499 48.8846598,46.0757675 L31.2121464,27.6948873 Z"
            id="Rectangle"
            stroke="#FFFFFF"
            fill="url(#screen-saver-linearGradient-2)"></path>
        </g>
      </g>
    </svg>
  );
}

ScreenSaverIcon.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
};

ScreenSaverIcon.defaultProps = {
  width: '160px',
  height: '120px',
};

export default ScreenSaverIcon;
