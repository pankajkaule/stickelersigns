import React, { useState } from 'react';
import Radio from '.';

export default {
  title: 'Components/Radio',
  component: Radio,
};

const Template = (args) => {
  const [val, setVal] = useState(false);

  return <Radio {...args} onChange={() => setVal((prev) => !prev)} checked={val} />;
};

export const Default = Template.bind({});

Default.args = {
  backgroundColor: '#14151E',
  border: '1px solid #8C8C8C',
  backgroundDisabled: '#2E3142',
  borderDisabled: '1px solid #3A3C46',
  borderChecked: '1px solid #83D4FF',
  backgroundChecked: '#83D4FF',
};
