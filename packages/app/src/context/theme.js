import React, { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';
import themeState from 'utils/stores/theme';
import themeReducer from 'utils/reducers/themeReduces';

export const ThemeContext = createContext(themeState);

const ThemeStore = ({ children }) => {
  const [state, dispatch] = useReducer(themeReducer, themeState);
  return (
    <ThemeContext.Provider value={{ themeState: state, themeDispatch: dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeStore.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ThemeStore;
