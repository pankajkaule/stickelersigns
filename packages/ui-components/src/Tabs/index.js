import React from 'react';
import PropTypes from 'prop-types';
import { Grid, ThemeProvider, createTheme } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { AntTab, AntTabs } from './index.styles';
import Button from '../Button';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-prevent-tabpanel-${index}`}
      aria-labelledby={`scrollable-prevent-tab-${index}`}
      {...other}>
      {value === index && children}
    </div>
  );
}

function Tabs(props) {
  const {
    value,
    handleChange,
    list,
    tabBorderBottom,
    tabOnHoverColor,
    tabOnSelectedColor,
    backgroundColor,
    borderBottom,
    color,
    minHeight,
    maxHeight,
    selectedBackground,
    tabColor,
    buttonTheme,
    handleClick,
    iconColor,
    width,
    showCloseButton,
    margin,
  } = props;
  const theme = createTheme({
    tabBorderBottom,
    tabOnHoverColor,
    tabOnSelectedColor,
    backgroundColor,
    borderBottom,
    color,
    minHeight,
    maxHeight,
    selectedBackground,
    tabColor,
  });

  const tabs = list.map((el) => <AntTab label={el.label} />);
  const tabPanel = list.map((el, index) => (
    <TabPanel value={value} index={index}>
      {el.component}
    </TabPanel>
  ));

  const closeButton = showCloseButton ? (
    <Grid item style={{ width: '60px' }}>
      <Button onClick={handleClick} {...buttonTheme}>
        <CloseIcon style={{ color: iconColor }} />
      </Button>
    </Grid>
  ) : (
    ''
  );

  return (
    <Grid container direction="column">
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        style={{ width: '1175px', maxWidth: '1175px', margin }}>
        <Grid container justifyContent="space-between">
          <Grid item style={{ width }}>
            <ThemeProvider theme={theme}>
              <AntTabs value={value} onChange={handleChange} aria-label="ant example">
                {tabs}
              </AntTabs>
            </ThemeProvider>
          </Grid>
          {closeButton}
        </Grid>
      </Grid>
      {tabPanel}
    </Grid>
  );
}

Tabs.propTypes = {
  value: PropTypes.string || PropTypes.number,
  handleChange: PropTypes.func,
  list: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)),
  handleClick: PropTypes.func,
  width: PropTypes.string,
  showCloseButton: PropTypes.bool,
  margin: PropTypes.string,
};

Tabs.defaultProps = {
  value: 0,
  handleChange: () => {},
  handleClick: () => {},
  width: '1095px',
  showCloseButton: true,
  margin: '',
  list: [
    {
      label: 'Tab1',
      component: <div style={{ color: '#fff' }}>Tab1</div>,
    },
    {
      label: 'Tab2',
      component: <div style={{ color: '#fff' }}>Tab2</div>,
    },
    {
      label: 'Tab3',
      component: <div style={{ color: '#fff' }}>Tab3</div>,
    },
  ],
};

export default Tabs;
