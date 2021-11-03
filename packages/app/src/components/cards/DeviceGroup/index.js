import React from 'react';
import PropTypes from 'prop-types';
import { SSButton, SSCard, SSTypography } from '@ss/ui-components';
import { Grid } from '@material-ui/core';
import styled, { ThemeProvider } from 'styled-components';
import { groupCardsTheme } from './index.theme';
import { typographyTheme } from 'themes/typography.theme';
import SettingsButtonIcon from 'components/icons/SettingsButton';
import themeConstants from 'themes/constants';
import { buttonTheme } from 'themes/button.theme';

const StyledSSCard = styled(SSCard)`
  &:hover > div > p {
    color: ${(props) => themeConstants[props.theme.theme].colorWhite};
  }

  &:hover > div > div > div > p {
    color: ${(props) => themeConstants[props.theme.theme].colorWhite};
  }
`;

function DeviceGroupCard(props) {
  const { theme = 'dark', deviceGroupName, handleClick, index, id, deviceCount } = props;
  return (
    <ThemeProvider theme={{ theme: theme }}>
      <StyledSSCard {...groupCardsTheme(theme, index).primary}>
        <Grid container justify="space-between">
          <Grid item>
            <Grid container direction="column">
              <SSTypography
                label={deviceGroupName}
                {...typographyTheme(theme).primary}
                margin="0 0 15px 0"
              />
              <SSTypography
                label={`${deviceCount} Displays`}
                {...typographyTheme(theme).secondary}
                margin="0 0 5px 0"
              />
            </Grid>
          </Grid>
          <Grid item style={{ alignSelf: 'center' }}>
            <SSButton
              onClick={() => handleClick(id, deviceGroupName)}
              variant="contained"
              {...buttonTheme(theme).settings}>
              <SettingsButtonIcon />
            </SSButton>
          </Grid>
        </Grid>
      </StyledSSCard>
    </ThemeProvider>
  );
}

DeviceGroupCard.propTypes = {
  deviceGroupName: PropTypes.string,
  deviceCount: PropTypes.number,
  createdAt: PropTypes.string,
  handleClick: PropTypes.string,
};

DeviceGroupCard.defaultProps = {
  deviceGroupName: 'Group ABCD',
  deviceCount: 0,
  createdAt: '24 Jun 17',
};

export default DeviceGroupCard;
