import React from 'react';
import Table from '.';

export default {
  title: 'Components/Table',
  component: Table,
};

const Template = (args) => <Table {...args} />;

export const Default = Template.bind({});

Default.args = {
  background: '#1B1C23',
  color: '#FFF',
  borderBottomColor: '#2F3142',
  columnCellColor: '#8C8C8C',
  rowCellColor: '#8C8C8C',
  columns: [
    { field: 'col1', headerName: 'Column 1', width: 300, sortable: false },
    { field: 'col2', headerName: 'Column 2', width: 300, sortable: false },
    { field: 'col3', headerName: 'Column 3', width: 300, sortable: false },
    { field: 'col4', headerName: 'Column 4', width: 300, sortable: false },
  ],
  rows: [
    { id: 1, col1: 'Hello', col2: 'World' },
    { id: 2, col1: 'DataGridPro', col2: 'is Awesome' },
    { id: 3, col1: 'Material-UI', col2: 'is Amazing' },
  ],
};
