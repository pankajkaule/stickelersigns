import themeConstants from './constants';

export const tableTheme = (theme = 'dark') => {
  return {
    primary: {
      background: themeConstants[theme].colorGrayBlack,
      borderBottomColor: themeConstants[theme].colorEnglishGrey,
      color: themeConstants[theme].colorWhite,
      columnCellColor: themeConstants[theme].colorLightGrey,
      rowCellColor: themeConstants[theme].colorLightGrey,
    },
  };
};
