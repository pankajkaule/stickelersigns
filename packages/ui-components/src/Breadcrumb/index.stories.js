import React from 'react';
import Typography from '../Typography';
import BreadCrumb from './';

export default {
  title: 'Components/Breadcrumbs',
  component: BreadCrumb,
};

const Template = (args) => <BreadCrumb {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: (
    <BreadCrumb color="#8c8c8c" font="14px">
      <Typography color="#B0B0B0" font="14px" font="black" label="XLIV" />
      <Typography color="#B0B0B0" font="14px" font="regular" label="Displays" />
      <Typography color="#83D4FF" font="14px" font="regular" label="Details" />
    </BreadCrumb>
  ),
};
