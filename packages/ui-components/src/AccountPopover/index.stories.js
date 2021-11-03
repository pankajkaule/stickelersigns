import React, { useRef } from 'react';
import AccountPopover from '.';
import Button from '../Button';

export default {
  title: 'Components/Account Popover',
  component: AccountPopover,
};

const Template = (args) => {
  const buttonRef = useRef(null);
  return (
    <>
      <Button ref={buttonRef} />
      <AccountPopover {...args} anchorEl={buttonRef.current} open />
    </>
  );
};

export const Default = Template.bind({});

Default.args = {
  userName: 'Shubham Kandharkar',
  role: 'Organization Admin',
  handleManageAccount: () => {},
  handleLogout: () => {},
  profileUrl: '',
};
