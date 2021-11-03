import React from 'react';
import PropTypes from 'prop-types';
import { SSButton, SSButtonSwitch, SSCard, SSTypography } from '@ss/ui-components';
import { Avatar, Grid } from '@material-ui/core';
import SettingsButtonIcon from 'components/icons/SettingsButton';
import { buttonTheme } from 'themes/button.theme';
import { typographyTheme } from 'themes/typography.theme';
import useStyles from './index.styles';
import cardsTheme from 'themes/cards.theme';
function UserProfile(props) {
  const {
    title = 'User Name',
    theme = 'dark',
    description = 'Company Admin',
    activeLabel = 'ACTIVE',
    inActiveLabel = 'INACTIVE',
    status,
    handleSetting,
    redirectionId,
    logo,
  } = props;
  const classes = useStyles();
  return (
    <Grid container className={classes.container} alignItems="center">
      <SSCard {...cardsTheme('dark').primary}>
        <Grid container className={classes.contentContainer}>
          <Grid item xs={12} sm={12} md={12} lg={12} className={classes.content}>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <SSButtonSwitch
                  activeLabel={activeLabel}
                  inActiveLabel={inActiveLabel}
                  value={status}
                  {...buttonTheme('dark').switch}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Grid container alignItems="center" justify="space-between">
              <Grid item>
                <Grid container direction="column">
                  <Grid item>
                    <SSTypography
                      label={title}
                      {...typographyTheme(theme).infoProfile}
                      color="inherit"
                    />
                  </Grid>
                  <Grid item>
                    <SSTypography
                      label={description}
                      {...typographyTheme(theme).infoProfile}
                      color="inherit"
                    />
                  </Grid>
                </Grid>
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
      <Avatar variant="rounded" className={classes.avatar} src={logo} title={title} />
    </Grid>
  );
}

UserProfile.propTypes = {
  logo: PropTypes.string,
  title: PropTypes.string,
  theme: PropTypes.string,
  description: PropTypes.string,
  activeLabel: PropTypes.string,
  inActiveLabel: PropTypes.string,
  status: PropTypes.string,
  handleSetting: PropTypes.func,
  redirectionId: PropTypes.string || PropTypes.number,
};

UserProfile.defaultProps = {
  logo: '',
  title: '',
  theme: 'dark',
  description: '',
  activeLabel: '',
  inActiveLabel: '',
  status: '',
  handleSetting: () => {},
  redirectionId: null,
};

export default UserProfile;
