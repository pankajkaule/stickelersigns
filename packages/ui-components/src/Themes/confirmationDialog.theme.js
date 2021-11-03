import themeConstants from './constants';

export const confirmationDialogTheme = (theme = 'dark') => {
  return {
    primary: {
      background: themeConstants[theme].colorCardGrey,
      borderColor: themeConstants[theme].colorGradientHighlights2,
      borderRadius: '6px',
      color: themeConstants[theme].colorWhite,
      contentColor: themeConstants[theme].colorLightGrey,
      headerColor: themeConstants[theme].colorWhite,
      height: '200px',
      padding: '40px',
      width: '770px',
    },
    secondary: {
      background: themeConstants[theme].colorGrayBlack,
      borderColor: themeConstants[theme].colorGrayBlack,
      borderRadius: '6px',
      color: themeConstants[theme].colorWhite,
      contentColor: themeConstants[theme].colorLightGrey,
      headerColor: themeConstants[theme].colorWhite,
      height: '200px',
      padding: '40px',
      width: '770px',
    },
  };
};
