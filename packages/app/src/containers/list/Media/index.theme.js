import themeConstants from '../../../themes/constants';

export const deviceListView = (theme = 'dark') => {
  return {
    listCard: {
      borderRadius: '10px',
      color: themeConstants[theme].colorLightGrey,
      height: '120px',
      onHoverBG: themeConstants[theme].colorCardGrey,
      background: themeConstants[theme].colorCardGrey,
      padding: '20px 30px',
      margin: '0 0 15px 0',
    },
  };
};
