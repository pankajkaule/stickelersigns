import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from '@material-ui/styles';
import { SSTooltip } from '@ss/ui-components';
import { StyledSSButton } from 'containers/device/DeviceControls';
import InfoIcon from 'components/icons/Info';
import { tooltipTheme } from 'themes/tooltip.theme';
import themeConstants from 'themes/constants';
import { buttonTheme } from 'themes/button.theme';

function TooltipBtn(props) {
  const { label, disabled } = props;
  return (
    <ThemeProvider theme={{ fill: themeConstants['dark'].colorLightGrey, margin: '0' }}>
      <SSTooltip
        theme={{ ...tooltipTheme('dark').primary, margin: '15px 0 0' }}
        arrow={true}
        placement="bottom-start"
        title={label}>
        <StyledSSButton onClick={() => {}} {...buttonTheme('dark').info} disabled={disabled}>
          <InfoIcon />
        </StyledSSButton>
      </SSTooltip>
    </ThemeProvider>
  );
}

TooltipBtn.propTypes = {
  label: PropTypes.string.isRequired,
};

export default TooltipBtn;
