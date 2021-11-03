import React from 'react';
import WeatherLocationSummary from './index';

export default {
  title: 'Containers/Cards/WeatherLocationSummary',
  component: WeatherLocationSummary,
};

const Template = (args) => <WeatherLocationSummary {...args} />;

export const Default = Template.bind({});
Default.args = {};
