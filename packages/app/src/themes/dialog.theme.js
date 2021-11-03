import themeConstants from './constants';

export const dialogTheme = (theme = 'dark', font = null) => {
  return {
    primary: {
      background: themeConstants[theme].colorCardGrey,
      borderColor: themeConstants[theme].colorGradientHighlights2,
      borderRadius: '6px',
      color: themeConstants[theme].colorWhite,
      height: '619px',
      maxWidth: '770px',
      minWidth: '770px',
      padding: '40px',
      width: '770px',
    },
    upload: {
      background: themeConstants[theme].colorCardGrey,
      borderColor: themeConstants[theme].colorGradientHighlights2,
      borderRadius: '6px',
      color: themeConstants[theme].colorWhite,
      height: 'auto',
      maxWidth: '350px',
      minWidth: '350px',
      padding: '20px',
      width: '350px',
      alignItems: 'flex-end',
      justifyContent: 'flex-end',
    },
  };
};
