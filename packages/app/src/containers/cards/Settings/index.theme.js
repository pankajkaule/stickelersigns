import themeConstants from 'themes/constants';

const settingsCardTheme = (theme = 'dark') => {
  return {
    card: {
      backgroundColor: themeConstants[theme].colorCardGrey,
      borderBottomLeftRadius: '10px',
      borderBottomRightRadius: '10px',
      borderTopLeftRadius: '10px',
      borderTopRightRadius: '10px',
      color: themeConstants[theme].colorWhite,
      padding: '20px',
      height: '126px',
      width: '126px',
      margin: '0px 10px 30px',
      onHoverBackgroundColor: themeConstants[theme].colorGradientHighlights1,
      onHoverColor: themeConstants[theme].colorWhite,
    },
    typography: {
      color: 'inherit',
      font: 'regular',
      lineHeight: '19px',
      margin: '0',
      size: 'md',
      textAlign: 'left',
      letterSpacing: '3px',
    },
    logo: {
      width: '100px',
      height: '100px',
      margin: '5px 0 0 0',
    },
  };
};

export default settingsCardTheme;
