import React from 'react';
import ClientsCard from '.';

export default {
  title: 'Containers/Cards/Clients',
  component: ClientsCard,
};

const Template = (args) => <ClientsCard {...args} />;

export const Default = Template.bind({});
Default.args = {};
