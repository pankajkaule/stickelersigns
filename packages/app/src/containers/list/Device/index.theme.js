import themeConstants from 'themes/constants';

export const deviceListView = (theme = 'dark') => {
  return {
    listCard: {
      borderRadius: '10px',
      color: themeConstants[theme].colorWhite,
      height: '120px',
      onHoverBG: themeConstants[theme].colorGradientHighlights,
      padding: '20px 30px',
    },
  };
};
