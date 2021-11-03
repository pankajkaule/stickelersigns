import themeConstants from '../constants/constants';

const progressTheme = (theme = 'dark', value) => ({
  primary: {
    width: 'auto',
    barColor: 'transparent',
    color:
      Number(value) === 100
        ? themeConstants[theme].colorDarkGreen
        : themeConstants[theme].colorBlueHighlights,
    height: '5px',
    margin: '10px 0 5px 0',
    labelColor: themeConstants[theme].colorLightGrey,
    descriptionColor: themeConstants[theme].colorWhite,
    borderRadius: 5,
    completionStatus: themeConstants[theme].colorWhite,
  },
  uploading: {
    width: 'auto',
    barColor: 'transparent',
    color:
      Number(value) === 100
        ? themeConstants[theme].colorDarkGreen
        : themeConstants[theme].colorBlueHighlights,
    height: '5px',
    margin: '10px 0 5px 0',
    labelColor: themeConstants[theme].colorWhite,
    descriptionColor: themeConstants[theme].colorWhite,
    borderRadius: 5,
    completionStatus: themeConstants[theme].colorWhite,
  },
});

export default progressTheme;
