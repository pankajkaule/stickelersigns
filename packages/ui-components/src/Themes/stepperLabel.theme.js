import themeConstants from './constants';

export const stepperLabelTheme = (theme = 'dark') => {
  return {
    primary: {
      activeColor: themeConstants[theme].colorBlueHighlights,
    },
  };
};
