import themeConstants from 'themes/constants';

export const deviceGroupList = (theme = 'dark') => {
  return {
    listCard: {
      borderRadius: '10px',
      color: themeConstants[theme].colorWhite,
      height: '120px',
      background: themeConstants[theme].colorCardGrey,
      onHoverBG: themeConstants[theme].colorButtonNormalGrey,
      padding: '30px',
      margin: '0 0 15px 0',
    },
  };
};
