import themeConstants from './constants';

export const switchTheme = (theme = 'dark') => {
  return {
    primary: {
      thumbActiveColor: themeConstants[theme].colorGradientHighlights,
      thumbInActiveColor: themeConstants[theme].colorButtonNormalGrey,
      trackActiveColor: themeConstants[theme].colorDarkGrey,
      trackInActiveColor: themeConstants[theme].colorDarkGrey,
      labelColor: themeConstants[theme].colorLightGrey,
    },
  };
};
