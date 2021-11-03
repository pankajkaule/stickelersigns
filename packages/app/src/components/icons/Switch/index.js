import React from 'react';
import PropTypes from 'prop-types';

function SwitchIcon({ width, height, fill }) {
  return (
    <svg
      width="40px"
      height="40px"
      viewBox="0 0 40 40"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink">
      <g id="displayONOFF" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Group">
          <circle id="Oval" fill={fill} opacity="0.100000001" cx="20" cy="20" r="20"></circle>
          <g id="power" transform="translate(8.000000, 8.000000)" fill-rule="nonzero">
            <path
              d="M12,13 C12.5522847,13 13,12.5522847 13,12 L13,2 C13,1.44771525 12.5522847,1 12,1 C11.4477153,1 11,1.44771525 11,2 L11,12 C11,12.5522847 11.4477153,13 12,13 Z"
              id="Path"
              fill={fill}></path>
            <path
              d="M16.59,3.11 C16.0984666,2.85594902 15.494051,3.04846657 15.24,3.54 C14.985949,4.03153343 15.1784666,4.63594902 15.67,4.89 C18.9495969,6.58319569 20.6451533,10.3002912 19.7739367,13.8868842 C18.9027201,17.4734771 15.6908898,19.9985231 12,19.9985231 C8.30911021,19.9985231 5.09727988,17.4734771 4.22606327,13.8868842 C3.35484667,10.3002912 5.05040311,6.58319569 8.33,4.89 C8.64796638,4.72565783 8.85410393,4.40416636 8.87076262,4.04662831 C8.88742132,3.68909026 8.71207031,3.34982418 8.41076262,3.1566283 C8.10945493,2.96343243 7.72796638,2.94565782 7.41,3.11 C3.31156609,5.227407 1.19338381,9.87360347 2.28291127,14.3561812 C3.37243873,18.8387589 7.38691286,21.9943627 12,21.9943627 C16.6130871,21.9943627 20.6275613,18.8387589 21.7170887,14.3561812 C22.8066162,9.87360347 20.6884339,5.227407 16.59,3.11 L16.59,3.11 Z"
              id="Path"
              fill={fill}></path>
          </g>
        </g>
      </g>
    </svg>
  );
}

SwitchIcon.propTypes = {
  fill: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
};

SwitchIcon.defaultProps = {
  fill: '#8C8C8C',
  width: '20px',
  height: '20px',
};

export default SwitchIcon;
