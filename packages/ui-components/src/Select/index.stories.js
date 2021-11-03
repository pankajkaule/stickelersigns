import React, { useEffect, useState } from 'react';
import Button from '../Button';
import Select from './index';
import { buttonStyle } from './index.styles';

const multiSelectList = {
  primary: [{ value: 'all', label: 'Show all displays' }],
  secondary: [
    { value: 'on', label: 'Status ON' },
    { value: 'off', label: 'Status OFF' },
    { value: 'unassigned', label: 'Unassigned' },
    { value: 'new-request', label: 'New Display Requests' },
    { value: 'errors', label: 'Errors' },
  ],
  actions: [
    {
      component: (onClick) => (
        <Button {...buttonStyle} type="button" variant="contained" onClick={onClick}>
          Apply
        </Button>
      ),
      id: 'apply',
    },
  ],
};

export default {
  title: 'Components/Select',
  component: Select,
  argTypes: {
    handleSelect: { action: 'onChange' },
    onDelete: { action: 'Delete' },
    background: { control: 'color' },
    color: { control: 'color' },
    menuItemColor: { control: 'color' },
    menuPopupBgColor: { control: 'color' },
  },
};

const Template = (args) => {
  const [value, setValue] = useState('');
  const handleSelect = (e) => setValue(e.target.value);
  return <Select {...args} value={value} handleSelect={handleSelect} />;
};

const TemplateWithMultiSelect = (args) => {
  const [value, setValue] = useState(['', 'all']);
  const [selectedList, setSelectedList] = useState([]);

  const onDelete = (id) => {
    const valueCopy = Array.from(value);
    let index = valueCopy.findIndex((el) => el === id);
    valueCopy.splice(index, 1);
    setValue(valueCopy);
  };

  useEffect(() => {
    const filteredSelectedList = [];
    value.forEach((el) => {
      multiSelectList.secondary.forEach((item) => {
        if (el === item.value) {
          filteredSelectedList.push(item);
        }
      });
    });
    setSelectedList(Array.from(filteredSelectedList));
  }, [value]);

  const handleSelect = (value) => {
    setValue(value);
  };

  return (
    <Select
      {...args}
      value={value}
      onDelete={onDelete}
      handleSelect={handleSelect}
      selectedList={selectedList}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  width: '270px',
  height: '40px',
  border: 'none',
  background: '#09090A',
  borderRadius: '5px',
  color: '#FFFFFF',
  fontSize: '12px',
  fontFamily: 'Typold Regular',
  lineHeight: '16px',
  padding: '0 0 0 10px',
  menuItemColor: '#fff',
  menuItemFontSize: '12px',
  menuItemFontFamily: 'Typold Regular',
  menuItemLineHeight: '16px',
  menuPopupBgColor: '#1A1B1D',
  menuPopupMargin: '5px 0',
  menuPopupBorderRadius: '0',
  list: {
    primary: [],
    secondary: [
      { value: 'hdmi1.0', label: 'HDMI 1.0' },
      { value: 'hdmi2.0', label: 'HDMI 2.0' },
      { value: 'hdmi3.0', label: 'HDMI 3.0' },
      { value: 'type-c', label: 'Type-c' },
      { value: 'vga', label: 'VGA' },
    ],
    actions: [],
  },
  defaultValue: 'type-c',
  value: 'type-c',
  showCheckbox: false,
  showPrimaryLabel: true,
  label: 'Input Mode',
};

export const MultiSelectWithValueContainer = TemplateWithMultiSelect.bind({});
MultiSelectWithValueContainer.args = {
  width: '115px',
  height: '30px',
  border: '2px solid #5C6987',
  background: 'rgba(108,135,171,0.15)',
  color: '#7E80A7',
  fontSize: '12px',
  fontFamily: 'Typold Regular',
  lineHeight: '16px',
  padding: '0 0 0 17px',
  menuItemColor: '#fff',
  menuItemFontSize: '12px',
  menuItemFontFamily: 'Typold Regular',
  menuItemLineHeight: '16px',
  menuPopupBgColor: '#404153',
  menuPopupMargin: '5px 0',
  menuPopupBorderRadius: '0',
  list: multiSelectList,
  multiple: true,
  valueContainerHeight: '34px',
  valueContainerBorder: '2px solid #7E80A7',
  isValueContainerVisible: true,
  label: 'Filters',
  showCheckbox: true,
  showTitle: true,
  showPrimary: true,
  showAction: true,
  showSecondaryLabel: true,
};
