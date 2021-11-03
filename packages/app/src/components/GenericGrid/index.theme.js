import themeConstants from 'themes/constants';

const genericCardTheme = (theme = 'dark') => {
  return {
    card: {
      backgroundColor: themeConstants[theme].colorCardGrey,
      color: themeConstants[theme].colorWhite,
      onHoverColor: themeConstants[theme].colorWhite,
      margin: '0 0 30px 0',
      padding: '20px',
      height: '330px',
      width: '330px',
    },
    logo: {
      width: '270px',
      height: '210px',
      margin: '20px 0',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  };
};

export default genericCardTheme;
