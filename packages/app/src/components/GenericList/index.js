import React from 'react';
import PropTypes from 'prop-types';
import { SSButton, SSButtonSwitch, SSCheckbox, SSList, SSTypography } from '@ss/ui-components';
import { clientListView } from './index.theme';
import { Avatar, Grid } from '@material-ui/core';
import LogoContainer from 'containers/Logo';
import { buttonTheme } from 'themes/button.theme';
import SettingsButtonIcon from 'components/icons/SettingsButton';
import { typographyTheme } from 'themes/typography.theme';
import checkboxTheme from 'themes/checkbox.theme';
function GenericList(props) {
  const {
    theme = 'dark',
    title = 'Client Name',
    description = 'Description',
    link = 'Updates',
    linkComponent = null,
    activeLabel = '',
    inActiveLabel = '',
    status = 'on',
    handleSetting,
    isCheckbox = false,
    checked = false,
    handleChange,
    LogoComponent,
    logo,
    redirectionId,
  } = props;

  const conditionalContent = isCheckbox ? (
    <Grid item>
      <SSCheckbox
        value={checked}
        onChange={handleChange}
        {...checkboxTheme(theme).primary}
        labelMargin={0}
      />
    </Grid>
  ) : (
    <Grid item>
      <LogoContainer width="80px" height="80px">
        <Avatar
          variant="rounded"
          src={logo || title}
          alt={title}
          style={{ width: '100%', height: '100%' }}
        />
        {LogoComponent}
      </LogoContainer>
    </Grid>
  );

  return (
    <SSList {...clientListView(theme).listCard}>
      <Grid container justify="space-between" alignItems="center" style={{ height: '100%' }}>
        <Grid item>
          <Grid container alignItems="center" spacing={3}>
            {conditionalContent}
            <Grid item>
              <Grid container direction="column">
                <Grid item>
                  <SSTypography label={title} {...typographyTheme(theme).primary} />
                </Grid>
                <Grid item xs={12} md={12} sm={12} lg={12}>
                  <SSTypography label={description} {...typographyTheme(theme).secondary} />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container alignItems="center" spacing={3}>
            <Grid item>
              <SSTypography label={link || linkComponent} {...typographyTheme(theme).link} />
            </Grid>
            <Grid item>
              <SSButtonSwitch
                activeLabel={activeLabel}
                inActiveLabel={inActiveLabel}
                value={status}
                {...buttonTheme('dark').switch}
              />
            </Grid>
            <Grid item>
              <SSButton
                onClick={() => handleSetting(redirectionId)}
                variant="contained"
                {...buttonTheme('dark').settings}>
                <SettingsButtonIcon />
              </SSButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </SSList>
  );
}

GenericList.propTypes = {
  theme: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  link: PropTypes.string,
  linkComponent: PropTypes.element,
  activeLabel: PropTypes.string,
  inActiveLabel: PropTypes.string,
  status: PropTypes.string,
  handleSetting: PropTypes.func,
  isCheckbox: false,
  checked: false,
  handleChange: PropTypes.func,
  LogoComponent: PropTypes.element,
  logo: PropTypes.string,
};

GenericList.defaultProps = {
  theme: 'dark',
  title: '',
  description: '',
  link: '',
  linkComponent: null,
  activeLabel: 'ON',
  inActiveLabel: 'OFF',
  status: '',
  handleSetting: () => {},
  isCheckbox: false,
  checked: false,
  handleChange: () => {},
  LogoComponent: null,
  logo: '',
};

export default GenericList;
