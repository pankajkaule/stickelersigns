import React, { useContext, useEffect } from 'react';
// import PropTypes from 'prop-types';
import { Grid, Slide } from '@material-ui/core';
import useStyles from './index.styles';
import { useHistory } from 'react-router';
import BasicActions from '../../components/BasicActions';
import { ThemeContext } from '../../context/theme';
import ProjectGrid from '../../containers/grid/Project/index';
import ProjectCreation from '../../containers/projects/ProjectCreation';
import * as actions from 'utils/actionTypes';
function Projects(props) {
  const { themeState, themeDispatch } = useContext(ThemeContext);
  const { render } = themeState;
  const history = useHistory();
  const classes = useStyles();

  useEffect(() => {
    if (
      history.location.pathname === '/projects' ||
      history.location.pathname === '/projects/new'
    ) {
      themeDispatch({ type: actions.SET_COMPONENT_RENDER, payload: true });
    } else {
      themeDispatch({ type: actions.SET_COMPONENT_RENDER, payload: false });
    }
  }, [history.location.pathname, themeDispatch]);

  return (
    <Slide
      direction="left"
      timeout={{ enter: 1000, exit: 400 }}
      in={render}
      mountOnEnter
      unmountOnExit>
      <Grid container justify="center">
        <Grid item xs={12} sm={12} md={12} lg={12} className={classes.root}>
          <BasicActions
            searchLabel={'Search project'}
            actionBtnLabel={'Add New Project'}
            onClick={() => history.push('/projects/new')}
          />
          <ProjectGrid />
        </Grid>
        <ProjectCreation />
      </Grid>
    </Slide>
  );
}

export default Projects;
