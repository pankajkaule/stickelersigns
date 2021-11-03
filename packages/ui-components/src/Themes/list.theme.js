import themeConstants from '../constants/constants';

const listTheme = (theme = 'dark') => ({
  primary: {
    width: '100%',
    height: '100%',
    minHeight: '60px',
    maxHeight: 'auto',
    minWidth: '100%',
    maxWidth: '100%',
    background: themeConstants[theme].colorUIElementGrey,
    padding: '20px 50px',
    borderRadius: '5px',
  },
  secondary: {
    width: '100%',
    height: '100%',
    minHeight: '60px',
    maxHeight: 'auto',
    minWidth: '100%',
    maxWidth: '100%',
    background: themeConstants[theme].colorEnglishGrey,
    padding: '20px 50px',
    borderRadius: '5px',
  },
  other: {
    width: '100%',
    height: '100%',
    minHeight: '60px',
    maxHeight: 'auto',
    minWidth: '100%',
    maxWidth: '100%',
    background: themeConstants[theme].colorEnglishGrey,
    padding: '15px',
    borderRadius: '5px',
  },
  media: {
    width: '100%',
    height: '100%',
    minHeight: '60px',
    maxHeight: '120px',
    minWidth: '100%',
    maxWidth: '100%',
    padding: '20px 30px',
    background: themeConstants[theme].colorUIElementGrey,
    borderRadius: '5px',
  },
});

export default listTheme;
