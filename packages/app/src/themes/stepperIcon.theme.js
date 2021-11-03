import themeConstants from './constants';

export const stepperIconTheme = (theme = 'dark') => {
  return {
    primary: {
      activeBackground: themeConstants[theme].colorMediumPeacockWithOpacity,
      activeColor: themeConstants[theme].colorBlueHighlights,
      background: themeConstants[theme].colorDarkBlue,
      color: themeConstants[theme].colorBlueGrey,
      completedBackground: themeConstants[theme].colorDarkGreenWithOpacity,
      completedColor: themeConstants[theme].colorDarkGreen,
    },
  };
};
