import themeConstants from './constants';

export const progressTheme = (theme = 'dark') => {
  return {
    primary: {
      width: 'auto',
      barColor: 'transparent',
      color: themeConstants[theme].colorBlueHighlights,
      height: '5px',
      margin: '10px 0 5px 0',
      labelColor: themeConstants[theme].colorLightGrey,
      descriptionColor: themeConstants[theme].colorWhite,
      borderRadius: 5,
    },
  };
};
