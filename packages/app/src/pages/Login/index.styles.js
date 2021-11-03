import { makeStyles } from '@material-ui/core';
import { fontFamily } from 'constants/constants';
import themeConstants from 'themes/constants';
const useStyles = makeStyles({
  root: {
    overflow: 'hidden',
  },
  xliv: {
    marginTop: '211px',
    width: '435px',
    height: '140px',
    color: themeConstants['dark'].colorSkiesBlue,
    textTransform: 'uppercase',
    lineHeight: '140px',
    fontFamily: fontFamily.thin,
    fontSize: '185px',
  },
  subheading: {
    color: themeConstants['dark'].colorLightGrey,
    fontFamily: fontFamily.thin,
    textTransform: 'uppercase',
    fontSize: '20px',
    fontWeight: 100,
    letterSpacing: 0,
    lineHeight: '27px',
    marginTop: '42px',
  },
  marginTop: {
    marginTop: '50px',
  },
  submit: {
    width: '570px',
    marginTop: '30px',
  },

  forgotPassword: {
    marginTop: '250px',
    marginBottom: '40px',
  },
});

export default useStyles;
