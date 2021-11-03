import themeConstants from '../constants/constants';

const dividerTheme = (theme = 'dark') => ({
  primary: {
    margin: '40px 0',
    backgroundColor: themeConstants[theme].colorDarkBlack,
    height: '1px',
  },
  secondary: {
    margin: '30px  0 40px  0',
    backgroundColor: themeConstants[theme].colorDarkBlack,
    height: '1px',
  },
  vertical: {
    backgroundColor: themeConstants[theme].colorLightGrey,
    height: '15px',
    width: '1px',
  },
});

export default dividerTheme;
