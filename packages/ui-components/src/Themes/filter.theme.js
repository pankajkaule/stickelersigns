import { fontFamily } from 'constants/constants';
import themeConstants from './constants';

export const filterDropdownTheme = (theme = 'dark') => {
  return {
    primary: {
      width: 'auto',
      height: '40px',
      iconColor: themeConstants[theme].colorWhite,
      labelColor: themeConstants[theme].colorLightGrey,
      dropdownBackground: themeConstants[theme].colorCardGrey,
      menuColor: themeConstants[theme].colorLightGrey,
      menuHoverBackground: themeConstants[theme].colorEnglishGrey,
      onActiveBackground: themeConstants[theme].colorButtonNormalGrey,
      onActiveColor: themeConstants[theme].colorPeacockBlue,
      popupBackground: themeConstants[theme].colorCardGrey,
      popupBorderColor: themeConstants[theme].colorDarkBlackBlue,
      selectedMenuColor: themeConstants[theme].colorWhite,
      typographyStyle: {
        color: themeConstants[theme].colorWhite,
        font: fontFamily.bold,
        letterSpacing: '2.57px',
        lineHeight: '16px',
        margin: '20px 20px 15px',
        size: '12px',
      },
      checkboxStyle: {
        checkboxColor: themeConstants[theme].colorBlueHighlights,
        checkboxDisableColor: themeConstants[theme].colorLightGrey,
        valueColor: themeConstants[theme].colorWhite,
        valueDisableColor: themeConstants[theme].colorLightGrey,
        valueFont: fontFamily.regular,
        valueLineHeight: '19px',
        valueMargin: '0',
        valueSize: '14px',
      },
      dividerStyle: {
        backgroundColor: themeConstants[theme].colorBGGrey,
        height: '1px',
        margin: '15px 0px',
        onHoverBackground: themeConstants[theme].colorBGGrey,
        opacity: '100%',
        width: 'auto',
      },
    },
    active: {
      width: 'auto',
      height: '40px',
      iconColor: themeConstants[theme].colorWhite,
      labelColor: themeConstants[theme].colorLightGrey,
      dropdownBackground: themeConstants[theme].colorButtonNormalGrey,
      menuColor: themeConstants[theme].colorWhite,
      menuHoverBackground: themeConstants[theme].colorEnglishGrey,
      onActiveBackground: themeConstants[theme].colorButtonNormalGrey,
      onActiveColor: themeConstants[theme].colorPeacockBlue,
      popupBackground: themeConstants[theme].colorCardGrey,
      popupBorderColor: themeConstants[theme].colorDarkBlackBlue,
      selectedMenuColor: themeConstants[theme].colorPeacockBlue,
      typographyStyle: {
        color: themeConstants[theme].colorWhite,
        font: fontFamily.bold,
        letterSpacing: '2.57px',
        lineHeight: '16px',
        margin: '20px 20px 15px',
        size: '12px',
      },
      checkboxStyle: {
        checkboxColor: themeConstants[theme].colorBlueHighlights,
        checkboxDisableColor: themeConstants[theme].colorLightGrey,
        valueColor: themeConstants[theme].colorWhite,
        valueDisableColor: themeConstants[theme].colorLightGrey,
        valueFont: fontFamily.regular,
        valueLineHeight: '19px',
        valueMargin: '0',
        valueSize: '14px',
      },
      dividerStyle: {
        backgroundColor: themeConstants[theme].colorBGGrey,
        height: '1px',
        margin: '15px 0px',
        onHoverBackground: themeConstants[theme].colorBGGrey,
        opacity: '100%',
        width: 'auto',
      },
    },
  };
};