import React, { useContext, useMemo } from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import { SSButton, SSTypography } from '@ss/ui-components';
import useStyles from './index.styles';
import { buttonTheme } from 'themes/button.theme';
import { typographyTheme } from 'themes/typography.theme';
import AddIcon from 'components/icons/Add';
import { ThemeContext } from 'context/theme';
import { UserContext } from 'context/user';
import { getBusinessSelectionAccess } from 'utils/helpers/permissions';

function NoDataFound(props) {
  const { title, btnTitle, handleClick, isNoDataFound, noDataTitle } = props;
  const { userState } = useContext(UserContext);
  const { globalLoader, roles, selectedBusiness } = userState;
  const { theme = 'dark' } = useContext(ThemeContext);
  const classes = useStyles();

  let hideNoDataFound = useMemo(() => {
    if (getBusinessSelectionAccess(roles)) {
      return selectedBusiness ? false : true;
    }
  }, [roles, selectedBusiness]);

  return globalLoader || hideNoDataFound ? (
    ''
  ) : (
    <Grid
      container
      className={classes.root}
      direction={'column'}
      justifyContent="center"
      alignItems="center">
      <Grid item style={{ margin: '0 0 30px 0' }}>
        <SSTypography label={isNoDataFound ? noDataTitle : title} {...typographyTheme(theme).h1} />
      </Grid>
      {!isNoDataFound ? (
        <SSButton {...buttonTheme(theme).primary} onClick={handleClick}>
          <Grid container alignItems="center">
            <Grid item style={{ margin: '5px 10px 0 0' }}>
              <AddIcon />
            </Grid>
            <Grid item>{btnTitle}</Grid>
          </Grid>
        </SSButton>
      ) : (
        ''
      )}
    </Grid>
  );
}

NoDataFound.propTypes = {
  title: PropTypes.string,
  btnTitle: PropTypes.string,
  handleClick: PropTypes.func,
  noDataTitle: PropTypes.string,
  isNoDataFound: PropTypes.bool,
};

NoDataFound.defaultProps = {
  title: `Create Interactive Projects using the medias that you have added.
  Assign projects to Displays`,
  btnTitle: 'Create Project',
  handleClick: () => {},
  noDataTitle: 'No Data Found',
  isNoDataFound: false,
};

export default NoDataFound;
