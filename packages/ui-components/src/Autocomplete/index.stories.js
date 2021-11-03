import React, { useState } from 'react';
import Autocomplete from '.';

export default {
  title: 'Components/Autocomplete',
  component: Autocomplete,
};

const Template = (args) => {
  const [valueToAdd, setValueToAdd] = useState('');
  const [options, setOptions] = useState([]);
  const handleAddOption = () => {
    let valuePresent = false;
    if (options && options.length) {
      options.forEach((item) => {
        if (item.value === valueToAdd) {
          valuePresent = true;
        }
      });
    }
    if (!valuePresent && valueToAdd.trim() !== '') {
      const optionsCopy = Array.from(options);
      optionsCopy.push({ value: valueToAdd.trim(), title: valueToAdd.trim() });
      setOptions(optionsCopy);
    }
  };

  return (
    <Autocomplete
      {...args}
      options={options}
      handleAddOption={handleAddOption}
      onInputChange={(e) => setValueToAdd(e.target.value)}
    />
  );
};

export const Default = Template.bind({});

Default.args = {
  labelColor: '#8C8C8C',
  inputBackground: '#1B1C24',
  inputColor: '#8C8C8C',
  inputOnHoverColor: '#FFFFFF',
  inputOnHoverBackground: '#2F3141',
  inputOnFocusColor: '#FFFFFF',
  iconsColor: '#FFFFFF',
  paperBackground: '#1B1C24',
  listItemColor: '#FFFFFF',
  listItemOnSelectBackground: '#2F3142',
  disabledColor: '#3A3C46',
  disabledBgColor: 'transparent',
  disabledBorder: '1px solid #3A3C46',
};
