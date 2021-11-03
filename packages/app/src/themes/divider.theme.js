import themeConstants from './constants';

export const dividerTheme = (theme = 'dark', font = null) => {
  return {
    primary: {
      margin: '40px 0',
      backgroundColor: themeConstants[theme].colorDarkBlack,
      height: '1px',
    },
    secondary: {
      margin: '30px  0 40px  0',
      backgroundColor: themeConstants[theme].colorDarkBlack,
      height: '1px',
    },
  };
};
