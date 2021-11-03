import { Grid } from '@material-ui/core';
import { SSTabs } from '@ss/ui-components';
import DeviceContainer from 'containers/device/DeviceContainer';
import { UserContext } from 'context/user';
import React, { useContext, useState } from 'react';
import { buttonTheme } from 'themes/button.theme';
import { tabsTheme } from 'themes/tabs.theme';
import useStyles from './index.styles';
import ApprovalDeviceContainer from 'containers/device/ApprovalContainer';
import { getDeviceTabAccess } from 'utils/helpers/permissions';
function Devices() {
  const { userState } = useContext(UserContext);
  const { selectedBusiness, roles } = userState;
  const [tabValue, setTabValue] = useState(0);
  const classes = useStyles();

  const handleChange = (e, value) => {
    setTabValue(value);
  };

  return selectedBusiness || getDeviceTabAccess(roles) ? (
    <Grid container justifyContent="center">
      <Grid item xs={12} sm={12} md={12} lg={12} className={classes.root}>
        <SSTabs
          value={tabValue}
          handleChange={handleChange}
          list={[
            {
              label: 'VIEW DISPLAYS',
              component: <DeviceContainer />,
            },
            {
              label: 'VIEW DISPLAY REQUEST',
              component: <ApprovalDeviceContainer />,
            },
          ]}
          {...tabsTheme('dark').secondary}
          buttonTheme={buttonTheme('dark').close}
          handleClick={() => {}}
          width="100%"
          showCloseButton={false}
          margin="0 0 20px 0"
        />
      </Grid>
    </Grid>
  ) : (
    <DeviceContainer />
  );
}

export default React.memo(Devices);
