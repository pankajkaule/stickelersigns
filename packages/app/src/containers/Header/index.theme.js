import themeConstants from 'themes/constants';

const headerTheme = (theme = 'dark', open) => {
  return {
    notificationBtn: {
      width: '40px',
      height: '40px',
      minWidth: '40px',
      backgroundColor: open
        ? themeConstants[theme].colorEnglishGrey
        : themeConstants[theme].colorCardGrey,
      onHoverBgColor: themeConstants[theme].colorCardGrey,
      color: '#FFF',
    },
  };
};

export default headerTheme;
