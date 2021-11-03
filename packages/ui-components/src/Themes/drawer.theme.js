import themeConstants from './constants';

const drawerTheme = (theme = 'dark') => {
  return {
    drawer: {
      background: themeConstants[theme].colorCardGrey,
      height: 'initial',
      color: themeConstants[theme].colorWhite,
      border: 'none',
      backdropFilter: 'blur(30px)',
      padding: '0',
      borderTop: 'none',
      loaderBorderRadius: '1px',
      loaderColor: themeConstants[theme].colorGradientHighlights,
      loaderHeight: '5px',
      loaderWidth: '100%',
    },
  };
};

export default drawerTheme;
