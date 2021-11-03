import themeConstants from './constants';

export const rangeTheme = (theme = 'dark') => {
  return {
    primary: {
      background: themeConstants[theme].colorDarkGrey,
      buttonBgColor: themeConstants[theme].colorEnglishGrey,
      buttonColor: themeConstants[theme].colorWhite,
      buttonHeight: '32px',
      buttonMinWidth: '80px',
      buttonWidth: '80px',
      color: themeConstants[theme].colorWhite,
      height: '32px',
      labelColor: themeConstants[theme].colorLightGrey,
      labelSize: '12px',
      padding: '4px',
      width: '262px',
      disabledColor: '#3A3C46',
      disabledBgColor: '#1B1C24',
      disabledBorder: '1px solid #3A3C46',
    },
  };
};
