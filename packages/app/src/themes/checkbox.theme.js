import { fontFamily } from 'constants/constants';
import themeConstants from './constants';

const checkboxTheme = (theme = 'dark') => {
  return {
    primary: {
      checkboxColor: themeConstants[theme].colorBlueHighlights,
      checkboxDisableColor: themeConstants[theme].colorLightGrey,
      labelColor: themeConstants[theme].colorLightGrey,
      labelFont: fontFamily.regular,
      labelLineHeight: '16px',
      labelMargin: '0 0 15px 0',
      labelSize: '12px',
      valueColor: themeConstants[theme].colorWhite,
      valueDisableColor: themeConstants[theme].colorLightGrey,
      valueFont: fontFamily.regular,
      valueLineHeight: '19px',
      valueMargin: '0',
      valueSize: '14px',
    },
    secondary: {
      checkboxColor: themeConstants[theme].colorWhite,
      checkboxDisableColor: themeConstants[theme].colorLightGrey,
      labelColor: themeConstants[theme].colorLightGrey,
      labelFont: 'Typold Regular',
      labelLineHeight: '16px',
      labelMargin: '0 0 15px 0',
      labelSize: '12px',
      valueColor: themeConstants[theme].colorWhite,
      valueDisableColor: themeConstants[theme].colorLightGrey,
      valueFont: 'Typold Regular',
      valueLineHeight: '19px',
      valueMargin: '0',
      valueSize: '14px',
    },
  };
};

export default checkboxTheme;
