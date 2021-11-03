import themeConstants from 'themes/constants';

export const groupCardsTheme = (theme, index) => {
  return {
    primary: {
      backgroundColor: themeConstants[theme].colorCardGrey,
      borderBottomLeftRadius: '0px',
      borderBottomRightRadius: '0px',
      borderTopLeftRadius: '0px',
      borderTopRightRadius: '0px',
      color: themeConstants[theme].colorWhite,
      padding: '20px',
      width: '326px',
      height: '60px',
      margin: '0 25px 30px 0',
      onHoverBackgroundColor: themeConstants[theme].colorButtonNormalGrey,
      onHoverColor: themeConstants[theme].colorWhite,
      transition: 'background .3s ease-in',
    },
  };
};
