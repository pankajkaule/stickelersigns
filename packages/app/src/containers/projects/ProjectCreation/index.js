import React from 'react';
// import PropTypes from 'prop-types';
import {
  SSButton,
  SSButtonToggle,
  SSDrawer,
  SSInput,
  SSSelect,
  SSTypography,
} from '@ss/ui-components';
import { Grid } from '@material-ui/core';
import { useHistory } from 'react-router';
import projectCreationTheme from './index.theme';
import useStyles from './index.styles';
const list = {
  actions: [],
  primary: [],
  secondary: [
    {
      label: 'HDMI 1.0',
      value: 'hdmi1.0',
    },
    {
      label: 'HDMI 2.0',
      value: 'hdmi2.0',
    },
    {
      label: 'HDMI 3.0',
      value: 'hdmi3.0',
    },
    {
      label: 'Type-c',
      value: 'type-c',
    },
    {
      label: 'VGA',
      value: 'vga',
    },
  ],
};

function ProjectCreation({ open }) {
  const history = useHistory();
  const classes = useStyles();
  return (
    <SSDrawer
      anchor="bottom"
      open={history.location.pathname === '/projects/new'}
      onClose={() => history.push('/projects')}
      {...projectCreationTheme['dark'].drawer}>
      <Grid container justify="center">
        <Grid item xs={11} sm={11} md={11} lg={11} className={classes.root}>
          <Grid container>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Grid container justify="space-between" spacing={1}>
                <Grid item>
                  <SSTypography
                    label="Create New Project"
                    {...projectCreationTheme['dark'].typographyPrimary}
                  />
                </Grid>
                <Grid item>
                  <Grid container justify="flex-end" spacing={1}>
                    <Grid item>
                      <SSButton onClick={() => {}} {...projectCreationTheme['dark'].buttonPrimary}>
                        Cancel
                      </SSButton>
                    </Grid>
                    <Grid item>
                      <SSButton onClick={() => {}} {...projectCreationTheme['dark'].buttonPrimary}>
                        Save
                      </SSButton>
                    </Grid>
                    <Grid item>
                      <SSButton onClick={() => {}} {...projectCreationTheme['dark'].buttonPrimary}>
                        Save & Launch
                      </SSButton>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Grid container>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                  <SSInput
                    backgroundColor="rgb(64, 65, 83)"
                    borderColor="rgb(64, 65, 83)"
                    borderRadius="0em"
                    color="#fff"
                    fontSize="12px"
                    inputBorder="0.0625em solid #3A72FF"
                    label="Project Name"
                    labelColor="rgb(126, 128, 167)"
                    onChange={() => {}}
                    placeholder=""
                    type="text"
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Grid container>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                  <SSInput
                    backgroundColor="rgb(64, 65, 83)"
                    borderColor="rgb(64, 65, 83)"
                    borderRadius="0em"
                    color="#fff"
                    fontSize="12px"
                    inputBorder="0.0625em solid #3A72FF"
                    label="Project Description"
                    labelColor="rgb(126, 128, 167)"
                    onChange={() => {}}
                    placeholder=""
                    type="text"
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Grid container>
                <Grid item xs={6} sm={6} md={3} lg={3}>
                  <SSButtonToggle
                    handleSelect={() => {}}
                    title="Orientation"
                    {...projectCreationTheme['dark'].buttonSwitch}
                  />
                </Grid>
                <Grid item xs={6} sm={6} md={3} lg={3}>
                  <SSSelect
                    defaultValue="type-c"
                    handleSelect={() => {}}
                    label="Input Mode"
                    value="type-c"
                    menuItemColor="#fff"
                    onDelete={() => {}}
                    showPrimaryLabel
                    list={list}
                  />
                </Grid>
                <Grid item xs={6} sm={6} md={3} lg={3}>
                  <SSButtonToggle
                    handleSelect={() => {}}
                    title="Interactivity"
                    {...projectCreationTheme['dark'].buttonSwitch}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={1} sm={1} md={1} lg={1}></Grid>
      </Grid>
    </SSDrawer>
  );
}

export default ProjectCreation;
