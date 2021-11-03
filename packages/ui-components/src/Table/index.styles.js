import { makeStyles } from '@material-ui/core';

const useStyle = makeStyles({
  root: {
    background: (props) => props.background,
    color: (props) => props.color,
    border: 'none',
    '& .MuiDataGrid-columnsContainer': {
      borderBottom: (props) => `1px solid ${props.borderBottomColor} !important`,
      minHeight: '40px !important',
      maxHeight: '40px !important',
      height: '40px',
    },
    '& .MuiDataGrid-columnSeparator': {
      display: 'none !important',
    },
    '& .MuiDataGrid-columnHeaderTitle': {
      fontFamily: 'Typold Book',
      fontSize: '14px',
      lineHeight: '19px',
      color: (props) => props.columnCellColor,
    },
    '& .MuiDataGrid-window': {
      top: '40px !important',
    },
    '& .MuiDataGrid-columnHeaderTitleContainer': {
      padding: '0 !important',
    },
  },
  columnHeader: {},
  row: {
    border: 'none',
    maxHeight: '20px !important',
    minHeight: '20px !important',
    margin: '20px 0 !important',
  },
  cell: {
    border: 'none !important',
    borderBottom: 'none !important',
    minHeight: '20px !important',
    maxHeight: '20px !important',
    lineHeight: '19px !important',
    fontFamily: 'Typold Regular',
    fontSize: '14px',
    color: (props) => props.rowCellColor,
  },
});

export default useStyle;
