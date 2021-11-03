import { fontFamily } from 'constants/constants';
import themeConstants from 'themes/constants';

const projectsCardTheme = (theme = 'dark') => {
  return {
    card: {
      backgroundColor: themeConstants[theme].colorCardGrey,
      borderBottomLeftRadius: '10px',
      borderBottomRightRadius: '10px',
      borderTopLeftRadius: '10px',
      borderTopRightRadius: '10px',
      color: themeConstants[theme].colorWhite,
      padding: '20px',
      width: '326px',
      height: '326px',
      margin: '0 0px 30px 0',
      onHoverBackgroundColor: themeConstants[theme].colorGradientHighlights,
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
      width: '160px',
      height: '120px',
      margin: '86px 0 62px 0',
    },
    verticalDivider: {
      backgroundColor: themeConstants[theme].colorDivider1,
      height: '40px',
      margin: '0px 20px',
      width: '2px',
    },
  };
};

export default projectsCardTheme;
