import themeConstants from '../../themes/constants';

const devicesPageTheme = (theme = 'dark') => {
  return {
    searchBox: {
      backgroundColor: themeConstants[theme].colorUIElementGrey,
      color: themeConstants[theme].colorLightGrey,
      fontFamily: 'Typold Regular',
      fontSize: '12px',
      height: '40px',
      iconFontSize: '14px',
      inputBorder: 'none',
      borderRadius: '5px',
      onHoverColor: themeConstants[theme].colorWhite,
      width: '574px',
    },
    select: {
      background: 'rgba(108,135,171,0.15)',
      border: 'none',
      color: themeConstants[theme].colorLightGrey,
      height: '40px',
      menuItemColor: '#fff',
      padding: '0 0 0 17px',
      valueContainerBorder: '2px solid #7E80A7',
      valueContainerHeight: '34px',
      width: '115px',
    },
  };
};

export default devicesPageTheme;
