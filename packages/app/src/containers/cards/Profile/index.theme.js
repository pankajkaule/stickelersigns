import { fontFamily } from 'constants/constants';
import themeConstants from 'themes/constants';

const profileCardTheme = (theme = 'dark') => {
  return {
    card: {
      backgroundColor: themeConstants[theme].colorCardGrey,
      borderBottomLeftRadius: '10px',
      borderBottomRightRadius: '10px',
      borderTopLeftRadius: '10px',
      borderTopRightRadius: '10px',
      color: themeConstants[theme].colorWhite,
      padding: '20px',
      height: '126px',
      width: '126px',
      margin: '0px 10px 30px',
      onHoverBackgroundColor: themeConstants[theme].colorGradientHighlights1,
      onHoverColor: themeConstants[theme].colorWhite,
    },
    typography: {
      color: 'inherit',
      font: fontFamily.regular,
      lineHeight: '19px',
      margin: '0',
      size: '14px',
      textAlign: 'left',
      letterSpacing: '3px',
    },
    logo: {
      width: '100px',
      height: '100px',
      margin: '5px 0 15px 0',
    },
    typographySecondary: {
      color: 'secondary',
      font: fontFamily.regular,
      lineHeight: '25px',
      margin: '0',
      size: '14px',
      textAlign: 'center',
    },
  };
};

export default profileCardTheme;
