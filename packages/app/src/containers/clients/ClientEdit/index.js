import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { SSDrawer, SSTabs } from '@ss/ui-components';
import drawerTheme from 'themes/drawer.theme';
import { useLocation } from 'react-router';
import useDrawerAutoScroll from 'hooks/useDrawereAutoScroll';
import { Grid } from '@material-ui/core';
import useStyles from './index.styles';
import { tabsTheme } from 'themes/tabs.theme';
import { buttonTheme } from 'themes/button.theme';
import CompanyEdit from '../CompanyEdit';

function ClientEdit(props) {
  const { handleClose, theme } = props;
  const location = useLocation();
  const [tabValue, setTabValue] = useState(0);
  const { drawerTop } = useDrawerAutoScroll({ id: 'client-stepper-form' });
  const classes = useStyles();

  const handleTabValue = (e, value) => setTabValue(value);

  const handleClosePopup = () => {
    handleClose();
    setTabValue(0);
  };

  return (
    <SSDrawer
      anchor="bottom"
      open={location.pathname === '/clients/edit'}
      onClose={handleClosePopup}
      id={'client-stepper-form'}
      top={drawerTop}
      {...drawerTheme(theme).drawer}>
      <Grid container justify="center" style={{ padding: '40px' }}>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          className={classes.container}
          style={{ margin: '0 0 40px 0' }}>
          <SSTabs
            value={tabValue}
            handleChange={handleTabValue}
            list={[
              {
                label: 'Account',
                component: <CompanyEdit handelClose={handleClosePopup} disabledEmail={true} />,
              },
              // {
              //   label: 'Details',
              //   component: <ClientDetails />,
              // },
            ]}
            {...tabsTheme(theme).secondary}
            buttonTheme={buttonTheme('dark').close}
            handleClick={handleClosePopup}
          />
        </Grid>
      </Grid>
    </SSDrawer>
  );
}

ClientEdit.propTypes = {
  handleClose: PropTypes.func,
  theme: PropTypes.string,
};

ClientEdit.defaultProps = {
  handleClose: () => {},
  theme: 'dark',
};

export default ClientEdit;
