import React from 'react';
import PropTypes from 'prop-types';

function RebootIcon({ width, height, fill }) {
  return (
    <svg
      width="40px"
      height="40px"
      viewBox="0 0 40 40"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink">
      <g id="DisplayReboot" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <rect x="0" y="0" width="40" height="40"></rect>
        <g id="Group">
          <circle id="Oval" fill={fill} opacity="0.100000001" cx="20" cy="20" r="20"></circle>
          <g id="power" transform="translate(10.000000, 11.000000)" fill={fill} fill-rule="nonzero">
            <path
              d="M13.2409656,0.542056997 C13.4950166,0.0505235693 14.0994322,-0.141993988 14.5909656,0.112056997 C18.6893995,2.22946399 20.8075818,6.87566047 19.7180543,11.3582382 C18.6285269,15.8408159 14.6140528,18.9964197 10.0009656,18.9964197 C5.38787848,18.9964197 1.37340435,15.8408159 0.283876888,11.3582382 C-0.80565057,6.87566047 1.3125317,2.22946399 5.41096562,0.112056997 C5.72893199,-0.0522851811 6.11042055,-0.0345105717 6.41172823,0.158685301 C6.71303592,0.351881174 6.88838693,0.691147262 6.87172824,1.04868531 C6.85506954,1.40622336 6.648932,1.72771483 6.33096562,1.892057 C3.05136872,3.58525269 1.35581229,7.30234823 2.22702889,10.8889412 C3.09824549,14.4755341 6.31007583,17.0005801 10.0009656,17.0005801 C13.6918554,17.0005801 16.9036857,14.4755341 17.7749023,10.8889412 C18.6461189,7.30234823 16.9505625,3.58525269 13.6709656,1.892057 C13.1794322,1.63800601 12.9869146,1.03359042 13.2409656,0.542056997 Z M10,7 C11.1045695,7 12,7.8954305 12,9 C12,10.1045695 11.1045695,11 10,11 C8.8954305,11 8,10.1045695 8,9 C8,7.8954305 8.8954305,7 10,7 Z"
              id="Combined-Shape"></path>
          </g>
        </g>
      </g>
    </svg>
  );
}

RebootIcon.propTypes = {
  fill: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
};

RebootIcon.defaultProps = {
  fill: '#8C8C8C',
  width: '20px',
  height: '20px',
};

export default RebootIcon;
