import themeConstants from 'themes/constants';

export const clientListView = (theme = 'dark') => {
  return {
    listCard: {
      borderRadius: '10px',
      color: themeConstants[theme].colorWhite,
      height: '120px',
      padding: '20px 30px',
      background: themeConstants[theme].colorCardGrey,
      onHoverBG: themeConstants[theme].colorButtonNormalGrey,
    },
  };
};
