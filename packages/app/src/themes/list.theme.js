import themeConstants from './constants';

export const listTheme = (theme = 'dark') => {
  return {
    primary: {
      width: '100%',
      height: '100%',
      minHeight: '60px',
      maxHeight: 'auto',
      minWidth: '100%',
      maxWidth: '100%',
      background: themeConstants[theme].colorUIElementGrey,
      padding: '20px 50px',
      borderRadius: '5px',
    },
  };
};
