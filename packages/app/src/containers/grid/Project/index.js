import React from 'react';
// import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import { SSSelect } from '@ss/ui-components';
// import { useHistory } from 'react-router';

import useStyles from 'pages/Projects/index.styles';
import ProjectInfo from 'containers/cards/ProjectInfo';
import projectPageTheme from 'pages/Projects/index.theme';

const list = {
  actions: [
    {
      component: () => <></>,
      id: 'apply',
    },
  ],
  primary: [
    {
      label: 'Show all displays',
      value: 'all',
    },
  ],
  secondary: [
    {
      label: 'Status ON',
      value: 'on',
    },
    {
      label: 'Status OFF',
      value: 'off',
    },
    {
      label: 'Unassigned',
      value: 'unassigned',
    },
    {
      label: 'New Display Requests',
      value: 'new-request',
    },
    {
      label: 'Errors',
      value: 'errors',
    },
  ],
};

const cards = [1, 2, 3, 4, 5, 6, 7, 8];

function ProjectGrid() {
  const classes = useStyles();
  // const history = useHistory();
  const cardsContainer = cards.map((e, i) => <ProjectInfo index={i} />);

  return (
    <Grid container>
      <Grid item xs={12} sm={12} md={12} lg={12} className={classes.filterContainer}>
        <Grid container>
          <Grid item className={classes.filterItem}>
            <SSSelect
              list={list}
              showAction
              showCheckbox
              showPrimary
              showSecondaryLabel
              showTitle
              isValueContainerVisible
              multiple
              value={['', 'all']}
              label="Filters"
              {...projectPageTheme['dark'].select}
            />
          </Grid>
          <Grid item>
            <SSSelect
              list={list}
              s
              showAction
              showCheckbox
              showPrimary
              showSecondaryLabel
              showTitle
              isValueContainerVisible
              multiple
              value={['', 'all']}
              label="Filters"
              {...projectPageTheme['dark'].select}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <Grid container className={classes.cardsHolder}>
          {cardsContainer}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default ProjectGrid;
