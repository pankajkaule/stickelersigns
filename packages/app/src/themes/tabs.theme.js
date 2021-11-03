import themeConstants from './constants';

export const tabsTheme = (theme = 'dark') => {
  return {
    primary: {
      backgroundColor: themeConstants[theme].colorCardGrey,
      borderBottom: `2px solid ${themeConstants[theme].colorDarkGrey}`,
      color: themeConstants[theme].colorGreyHighlights,
      maxHeight: '58px',
      minHeight: '58px',
      tabBorderBottom: `2px solid ${themeConstants[theme].colorBlueHighlights}`,
      tabOnHoverColor: themeConstants[theme].colorGreyHighlights,
      tabOnSelectedColor: themeConstants[theme].colorBlueHighlights,
    },
    secondary: {
      backgroundColor: themeConstants[theme].colorUIElementGrey,
      borderBottom: `none`,
      color: themeConstants[theme].colorGreyHighlights,
      maxHeight: '58px',
      minHeight: '58px',
      tabBorderBottom: `none`,
      tabOnHoverColor: themeConstants[theme].colorWhite,
      tabOnSelectedColor: themeConstants[theme].colorUIElementGrey,
      selectedBackground: themeConstants[theme].colorBlueHighlights,
      tabColor: themeConstants[theme].colorWhite,
      iconColor: themeConstants[theme].colorLightGrey,
    },
  };
};
