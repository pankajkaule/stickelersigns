import React from 'react';
import PropTypes from 'prop-types';
import { Avatar, Grid } from '@material-ui/core';
import { SSButton, SSButtonSwitch, SSCard, SSTypography } from '@ss/ui-components';
import themeConstants from 'themes/constants';
import LogoContainer from 'containers/Logo';
import SettingsButtonIcon from 'components/icons/SettingsButton';
import { buttonTheme } from 'themes/button.theme';
import genericCardTheme from './index.theme';
import { typographyTheme } from 'themes/typography.theme';
import cardsTheme from 'themes/cards.theme';

function GenericGrid(props) {
  const {
    theme = 'dark',
    title,
    description,
    status,
    logo,
    logoComponent,
    link,
    linkComponent,
    handleSetting,
    redirectionId,
    activeLabel,
    inActiveLabel,
  } = props;
  return (
    <SSCard {...cardsTheme(theme).secondary} backgroundColor={themeConstants[theme].colorCardGrey}>
      <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Grid container justify="space-between">
            <Grid item xs={12} md={8} sm={8} lg={8}>
              <Grid container>
                <Grid item xs={12} md={12} sm={12} lg={12}>
                  <SSTypography label={title} {...typographyTheme(theme).primary} />
                </Grid>
                <Grid item xs={12} md={12} sm={12} lg={12}>
                  <SSTypography label={description} {...typographyTheme(theme).secondary} />
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <SSButtonSwitch
                handleClick={() => {}}
                value={status}
                activeLabel={activeLabel}
                inActiveLabel={inActiveLabel}
                {...buttonTheme(theme).switch}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <LogoContainer {...genericCardTheme(theme).logo}>
            <Grid
              container
              justifyContent="center"
              alignItems="center"
              style={{ width: '100%', height: '100%' }}>
              <Avatar
                variant="rounded"
                src={logo || title}
                alt={title}
                style={{ width: '140px', height: '140px' }}
              />
            </Grid>
            {logoComponent}
          </LogoContainer>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Grid container alignItems="center" justify="space-between">
            <Grid item>
              <SSTypography label={link || linkComponent} {...typographyTheme(theme).link} />
            </Grid>
            <Grid item>
              <SSButton
                onClick={() => handleSetting(redirectionId)}
                variant="contained"
                {...buttonTheme(theme).settings}>
                <SettingsButtonIcon />
              </SSButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </SSCard>
  );
}

GenericGrid.propTypes = {
  theme: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  status: PropTypes.bool,
  logo: PropTypes.string,
  logoComponent: PropTypes.element,
  link: PropTypes.string,
  linkComponent: PropTypes.element,
  handleSetting: PropTypes.func,
  activeLabel: PropTypes.string,
  inActiveLabel: PropTypes.string,
};

GenericGrid.defaultProps = {
  theme: 'dark',
  title: 'Card Title',
  description: 'Card Description',
  status: true,
  logo: '',
  logoComponent: null,
  link: '',
  linkComponent: null,
  handleSetting: () => {},
  activeLabel: '',
  inActiveLabel: '',
};

export default GenericGrid;
