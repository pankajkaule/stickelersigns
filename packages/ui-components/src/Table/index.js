import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import { DataGrid } from '@mui/x-data-grid';
import useStyle from './index.styles';

function Table(props) {
  const { rows, columns } = props;
  const classes = useStyle(props);
  return (
    <Grid>
      <DataGrid
        rows={rows}
        columns={columns}
        sort
        autoHeight
        disableColumnFilter
        disableColumnMenu
        disableColumnSelector
        disableDensitySelector
        showCellRightBorder={false}
        showColumnRightBorder={false}
        disableExtendRowFullWidth
        hideFooter
        disableSelectionOnClick
        classes={{
          columnHeader: classes.columnHeader,
          root: classes.root,
          row: classes.row,
          cell: classes.cell,
        }}
      />
    </Grid>
  );
}

Table.propTypes = {
  rows: PropTypes.arrayOf(PropTypes.object),
  columns: PropTypes.arrayOf(PropTypes.object),
};

Table.defaultProps = {
  rows: [],
  columns: [],
};

export default Table;
