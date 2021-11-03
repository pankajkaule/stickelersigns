import themeConstants from 'themes/constants';

const devicesContainerTheme = (theme = 'dark') => {
  return {
    card: {
      backgroundColor: themeConstants[theme].colorCardGrey,
      color: themeConstants[theme].colorWhite,
      margin: '0',
      padding: '20px',
      height: '330px',
      width: '330px',
    },
    settingsButton: {
      backgroundColor: themeConstants[theme].colorDarkGrey,
      border: 'none',
      color: themeConstants[theme].colorDivider2,
      borderRadius: '50%',
      fontSize: '12px',
      width: '44px',
      height: '44px',
      minWidth: '44px',
      lineHeight: '19px',
      padding: '0',
      onHoverBgColor: themeConstants[theme].colorDarkGrey,
      onHoverBorder: '',
      onHoverColor: themeConstants[theme].colorDivider2,
    },
    typographyImp: {
      font: 'Typlod Regular',
      lineHeight: '16px',
      margin: '0',
      size: '12px',
      textAlign: 'left',
      color: '#FFFFFF',
    },
    logo: {
      width: '192px',
      margin: '20px 0 25px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    typographyRegular: {
      font: 'Typlod Regular',
      lineHeight: '16px',
      margin: '5px 0 0 0',
      size: '12px',
      textAlign: 'left',
      color: '#8C8C8C',
    },
    typographyBold: {
      font: 'Typlod Bold',
      lineHeight: '22px',
      margin: '0',
      size: '14px',
      textAlign: 'left',
      color: '#8C8C8C',
    },
    switchBtn: {
      inActiveBgColor: themeConstants[theme].colorDarkGrey,
      activeColor: themeConstants[theme].colorButtonSwitchActive,
      activeBgColor: themeConstants[theme].colorDarkGrey,
      activeHoverColor: themeConstants[theme].colorButtonSwitchActive,
      activeHoverBgColor: themeConstants[theme].colorDarkGrey,
      inActiveColor: themeConstants[theme].colorButtonSwitchInActive,
      inActiveHoverBgColor: themeConstants[theme].colorDarkGrey,
      inActiveHoverColor: themeConstants[theme].colorButtonSwitchInActive,
      width: '50px',
      height: '30px',
      minWidth: '50px',
    },
  };
};

export default devicesContainerTheme;
