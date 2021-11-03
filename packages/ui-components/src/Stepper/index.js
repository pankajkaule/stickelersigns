import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Stepper as MUIStepper, Step, StepLabel, StepConnector } from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import useStyles, { userConnectorStyles, userIconStyles } from './index.styles';

function Icon(props) {
  const { active, completed, icon, iconStyles } = props;
  const classes = userIconStyles(iconStyles);

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}>
      {completed ? <CheckIcon /> : icon}
    </div>
  );
}

Icon.propTypes = {
  active: PropTypes.bool,
  completed: PropTypes.bool,
  icon: PropTypes.node,
  iconStyles: PropTypes.objectOf(PropTypes.string),
};

Icon.defaultProps = {
  active: false,
  completed: false,
  icon: null,
  iconStyles: {},
};

function Stepper(props) {
  const { styles, stepList, iconStyles, stepValue, stepperBgColor } = props;
  const classes = useStyles(styles);
  const connectorClasses = userConnectorStyles();

  return (
    <MUIStepper
      alternativeLabel
      activeStep={stepValue}
      connector={<StepConnector classes={{ line: connectorClasses.line }} />}
      style={{ background: stepperBgColor, padding: 0 }}>
      {stepList.map((label) => (
        <Step key={label} classes={{ alternativeLabel: classes.alternativeLabel }}>
          <StepLabel
            StepIconProps={{ iconStyles }}
            StepIconComponent={Icon}
            title={label}
            classes={{ alternativeLabel: classes.alternativeLabel, label: classes.label }}>
            {label}
          </StepLabel>
        </Step>
      ))}
    </MUIStepper>
  );
}

Stepper.propTypes = {
  styles: PropTypes.objectOf(PropTypes.string),
  stepList: PropTypes.arrayOf(PropTypes.string),
  iconStyles: PropTypes.objectOf(PropTypes.string),
  stepValue: PropTypes.number.isRequired,
  stepperBgColor: PropTypes.string,
};

Stepper.defaultProps = {
  styles: {},
  stepList: [],
  iconStyles: {},
  stepperBgColor: '#1B1C23',
};

export default Stepper;
