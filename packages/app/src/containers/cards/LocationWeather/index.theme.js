import themeConstants from 'themes/constants';

const locationCardStyles = (theme = 'dark') => {
  return {
    card: {
      backgroundColor: themeConstants[theme].colorCardGrey,
      borderBottomLeftRadius: '10px',
      borderBottomRightRadius: '10px',
      borderTopLeftRadius: '10px',
      borderTopRightRadius: '10px',
      color: themeConstants[theme].colorWhite,
      height: '126px',
      padding: '20px',
      width: '326px',
      margin: '0 0px 30px 0',
      float: 'left',
      onHoverBackgroundColor: themeConstants[theme].colorGradientHighlights,
      onHoverColor: themeConstants[theme].colorWhite,
    },
    verticalDivider: {
      backgroundColor: themeConstants[theme].colorDivider1,
      height: '16px',
      margin: '0px 16px 0 15px',
      width: '2px',
      onHoverBackground: themeConstants[theme].colorWhite,
      opacity: '100%',
    },
    horizontalDivider: {
      backgroundColor: themeConstants[theme].colorWhite,
      height: '1px',
      margin: '20px 0 21px 0',
      width: 'auto',
      opacity: '15%',
    },
  };
};
export default locationCardStyles;
