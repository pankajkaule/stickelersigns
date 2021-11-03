import React, { useState } from 'react';
import FilterDropdown from '.';

export default {
  title: 'Components/Filter',
  component: FilterDropdown,
};

const Template = (args) => {
  const [value, setValue] = useState([]);
  const {
    checkboxColor,
    checkboxDisableColor,
    checkboxValueColor,
    checkboxValueDisableColor,
    checkboxValueFont,
    checkboxValueLineHeight,
    checkboxValueMargin,
    checkboxValueSize,
    buttonBackgroundColor,
    buttonBorder,
    buttonColor,
    buttonDisabledBgColor,
    buttonDisabledBorder,
    buttonDisabledColor,
    buttonFontFamily,
    buttonFontSize,
    buttonHeight,
    buttonLineHeight,
    buttonOnFocusBgColor,
    buttonOnFocusBorder,
    buttonOnFocusColor,
    buttonOnHoverBgColor,
    buttonOnHoverBorder,
    buttonOnHoverColor,
    buttonPadding,
    buttonVariant,
    typoColor,
    typoFont,
    typoSize,
    typoLineHeight,
    typoLetterSpacing,
    typoMargin,
    dividerBackgroundColor,
    dividerHeight,
    dividerMargin,
    dividerOnHoverBackground,
    dividerOpacity,
    dividerWidth,
  } = args;

  return (
    <FilterDropdown
      {...args}
      handleChange={(val) => setValue(val)}
      value={value}
      checkboxStyle={{
        checkboxColor,
        checkboxDisableColor,
        valueColor: checkboxValueColor,
        valueDisableColor: checkboxValueDisableColor,
        valueFont: checkboxValueFont,
        valueLineHeight: checkboxValueLineHeight,
        valueMargin: checkboxValueMargin,
        valueSize: checkboxValueSize,
      }}
      buttonStyle={{
        backgroundColor: buttonBackgroundColor,
        border: buttonBorder,
        color: buttonColor,
        disabledBgColor: buttonDisabledBgColor,
        disabledBorder: buttonDisabledBorder,
        disabledColor: buttonDisabledColor,
        fontFamily: buttonFontFamily,
        fontSize: buttonFontSize,
        height: buttonHeight,
        lineHeight: buttonLineHeight,
        onFocusBgColor: buttonOnFocusBgColor,
        onFocusBorder: buttonOnFocusBorder,
        onFocusColor: buttonOnFocusColor,
        onHoverBgColor: buttonOnHoverBgColor,
        onHoverBorder: buttonOnHoverBorder,
        onHoverColor: buttonOnHoverColor,
        padding: buttonPadding,
        variant: buttonVariant,
      }}
      typographyStyle={{
        color: typoColor,
        font: typoFont,
        size: typoSize,
        lineHeight: typoLineHeight,
        letterSpacing: typoLetterSpacing,
        margin: typoMargin,
      }}
      dividerStyle={{
        backgroundColor: dividerBackgroundColor,
        height: dividerHeight,
        margin: dividerMargin,
        onHoverBackground: dividerOnHoverBackground,
        opacity: dividerOpacity,
        width: dividerWidth,
      }}
    />
  );
};

export const Default = Template.bind({});

Default.args = {
  list: [
    { label: 'Value 1', value: 'value1' },
    { label: 'Value 2', value: 'value2' },
    { label: 'Value 3', value: 'value3' },
  ],
  popupBackground: '#1B1C24',
  dropdownBackground: '#1B1C24',
  popupBorderColor: '#2E3036',
  labelColor: '#8C8C8C',
  iconColor: '#FFFFFF',
  selectedMenuColor: '#FFFFFF',
  menuColor: '#8C8C8C',
  menuHoverBackground: '#2F3142',
  width: '81px',
  height: '40px',
  onActiveBackground: '#2F3141',
  onActiveColor: '#67D6FF',
  checkboxColor: '#83D4FF',
  checkboxDisableColor: '#8C8C8C',
  checkboxValueColor: '#FFFFFF',
  checkboxValueDisableColor: '#8C8C8C',
  checkboxValueFont: 'Typold Regular',
  checkboxValueLineHeight: '19px',
  checkboxValueMargin: '0',
  checkboxValueSize: '14px',
  buttonBackgroundColor: '#2E3142',
  buttonBorder: 'none',
  buttonColor: '#FFF',
  buttonDisabledBgColor: '#666',
  buttonDisabledBorder: '1px solid #ccc',
  buttonDisabledColor: '#ccc',
  buttonFontFamily: 'Typold Regular',
  buttonFontSize: '12px',
  buttonHeight: '40px',
  buttonLineHeight: '14px',
  buttonOnFocusBgColor: 'linear-gradient(135deg, #75CFFF 0%, #5735FD 100%)',
  buttonOnFocusBorder: 'none',
  buttonOnFocusColor: '#FFFFFF',
  buttonOnHoverBgColor: '#3A3C45',
  buttonOnHoverBorder: 'none',
  buttonOnHoverColor: '#FFFFFF',
  buttonPadding: '10px 20px 11px',
  buttonVariant: 'contained',
  typoColor: '#FFFFFF',
  typoFont: 'Typold Bold',
  typoSize: '12px',
  typoLineHeight: '16px',
  typoLetterSpacing: '2.57px',
  typoMargin: '20px 20px 15px',
  dividerBackgroundColor: '#101012',
  dividerHeight: '1px',
  dividerMargin: '15px 0px',
  dividerOnHoverBackground: '#101012',
  dividerOpacity: '100%',
  dividerWidth: 'auto',
  selectedValueColor: '#67d6ff',
  buttonLabel: 'Apply',
  title: 'Filters',
  allCheckLabel: 'Show all display',
};
