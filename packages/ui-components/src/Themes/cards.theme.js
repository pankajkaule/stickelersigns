import themeConstants from './constants';

const cardsTheme = (theme = 'dark') => {
  return {
    primary: {
      width: '370px',
      height: '170px',
      padding: '0px',
      margin: '23px 0 0',
      color: themeConstants[theme].colorLightGrey,
      onHoverColor: themeConstants[theme].colorWhite,
      backgroundColor: themeConstants[theme].colorCardGrey,
      onHoverBackgroundColor: themeConstants[theme].colorButtonNormalGrey,
      transition: 'background .3s ease-in',
    },
    secondary: {
      margin: '0 0 30px 0',
      padding: '20px',
      height: '324px',
      width: '324px',
      color: themeConstants[theme].colorLightGrey,
      onHoverColor: themeConstants[theme].colorWhite,
      backgroundColor: themeConstants[theme].colorCardGrey,
      onHoverBackgroundColor: themeConstants[theme].colorButtonNormalGrey,
      transition: 'background .3s ease-in',
    },
  };
};

export default cardsTheme;
