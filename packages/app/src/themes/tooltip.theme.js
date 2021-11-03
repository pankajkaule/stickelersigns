import themeConstants from './constants';

export const tooltipTheme = (theme = 'dark') => {
  return {
    primary: {
      backgroundColor: themeConstants[theme].colorButtonHoverGrey,
      color: themeConstants[theme].colorWhite,
      minWidth: '250px',
      width: '250px',
      maxWidth: '250px',
      height: 'auto',
      minHeight: '55px',
      maxHeight: 'auto',
      padding: '20px',
      borderTop: '5px solid',
      borderColor: themeConstants[theme].colorBlueHighlights,
      borderRadius: 0,
      fontSize: '12px',
      lineHeight: '20px',
      letterSpacing: 'normal',
      textAlign: 'left',
      margin: '10px',
    },
  };
};
