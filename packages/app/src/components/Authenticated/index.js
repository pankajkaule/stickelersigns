import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route, useHistory } from 'react-router';
import { unAuthenticatedRoutes } from 'routes/routes';

function Authenticated({
  flag,
  authenticated = { path: '', to: '', exact: false },
  unAuthenticated = { path: '', to: '', exact: false },
}) {
  const history = useHistory();

  const isUnAuthRoute = () => {
    let isAuth = false;
    unAuthenticatedRoutes.forEach((el) => {
      if (history.location.pathname.includes(el)) {
        isAuth = true;
      }
    });
    return isAuth;
  };

  return flag ? (
    <Route
      exact={authenticated.exact}
      path={authenticated.path}
      render={() => <Redirect to={authenticated.to} />}
    />
  ) : isUnAuthRoute() ? (
    ''
  ) : (
    <Route
      exact={unAuthenticated.path}
      path={unAuthenticated.path}
      render={() => <Redirect to={unAuthenticated.to} />}
    />
  );
}

Authenticated.propTypes = {
  authenticated: PropTypes.shape({
    path: PropTypes.string,
    to: PropTypes.string,
    exact: PropTypes.bool,
  }),
  unAuthenticated: PropTypes.shape({
    path: PropTypes.string,
    to: PropTypes.string,
    exact: PropTypes.bool,
  }),
  flag: PropTypes.bool,
};

export default Authenticated;
