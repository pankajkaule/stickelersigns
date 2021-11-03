import React, { useRef } from 'react';
import Popover from '.';
import Button from '../Button';

export default {
  title: 'Components/Popover',
  component: Popover,
};

const Template = (args) => {
  const buttonRef = useRef(null);
  return (
    <>
      <Button ref={buttonRef} />
      <Popover {...args} anchorEl={buttonRef.current} open />
    </>
  );
};

export const Default = Template.bind({});

Default.args = {};
