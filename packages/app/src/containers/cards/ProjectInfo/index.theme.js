import { fontFamily } from 'constants/constants';
import themeConstants from 'themes/constants';

const projectInfoCardTheme = (theme) => {
  return {
    card: {
      backgroundColor: themeConstants[theme].colorCardGrey,
      borderBottomLeftRadius: '12px',
      borderBottomRightRadius: '12px',
      borderTopLeftRadius: '12px',
      borderTopRightRadius: '12px',
      color: themeConstants[theme].colorWhite,
      height: '206px',
      margin: '0',
      padding: '20px',
      width: '226px',
      onHoverBackgroundColor: themeConstants[theme].colorGradientHighlights,
      onHoverColor: themeConstants[theme].colorWhite,
    },
    settingsButton: {
      backgroundColor: 'transparent',
      border: 'none',
      color: '#7F7FA3',
      disabledBgColor: 'transparent',
      disabledBorder: '1px solid #ccc',
      disabledColor: 'transparent',
      fontFamily: 'Typold Regular',
      fontSize: '12px',
      width: '24px',
      height: '24px',
      minWidth: '24px',
      lineHeight: '19px',
      padding: '0',
      onHoverBgColor: 'transparent',
      onHoverBorder: '',
      onHoverColor: '#7F7FA3',
    },
    typographyImp: {
      color: 'important',
      font: fontFamily.regular,
      lineHeight: '16px',
      margin: '0',
      size: '14px',
      textAlign: 'left',
    },
    tvShape: {
      background: 'linear-gradient(134.81deg, #373737 0%, #0B0B0B 100%)',
      color: '#404153',
      height: '108px',
      innerBorder: '2px solid #000',
      margin: '0',
      outerBorder: '1px solid #1f1e22',
      width: '192px',
    },
    logo: {
      width: '192px',
      height: '132px',
      minHeight: '132px',
      margin: '66px 0 65px 0',
    },
    typographyRegular: {
      color: 'inherit',
      font: fontFamily.regular,
      lineHeight: '16px',
      margin: '5px 0 0 0',
      size: '12px',
      textAlign: 'left',
    },
    typographyBold: {
      color: 'inherit',
      font: fontFamily.bold,
      lineHeight: '22px',
      margin: '0',
      size: '18px',
      textAlign: 'left',
    },
  };
};

export default projectInfoCardTheme;
