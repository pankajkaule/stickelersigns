import themeConstants from '../constants/constants';

const popoverTheme = (theme = 'dark') => ({
  primary: {
    background: themeConstants[theme].colorDarkBlue1,
    width: '100%',
    minWidth: '270px',
    maxWidth: '270px',
    height: '100%',
    minHeight: '144px',
    maxHeight: '144px',
    borderRadius: '5px',
    color: themeConstants[theme].colorWhite,
    padding: '5px',
    margin: '5px',
  },
});

export default popoverTheme;
