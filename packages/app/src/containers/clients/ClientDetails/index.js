import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import { SSTable, SSTypography } from '@ss/ui-components';
import { typographyTheme } from 'themes/typography.theme';
import themeConstants from 'themes/constants';
import { tableTheme } from 'themes/table.theme';
import { dummyColumns, dummyRows } from 'utils/api/dummyResponse';

function ClientDetails() {
  const [rows, setRows] = useState();
  const [columns, setColumns] = useState();

  useEffect(() => {
    setColumns(dummyColumns);
    setRows(dummyRows);
  }, []);

  const userCount = rows && rows !== undefined ? rows.length : 0;

  return (
    <Grid container style={{ margin: '140px 0 0 0' }}>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <SSTypography
          label={`${userCount} Users under this client:`}
          {...typographyTheme('dark').info}
          color={themeConstants['dark'].colorWhite}
          margin="0 0 25px 10px"
        />
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <SSTable columns={columns} rows={rows} {...tableTheme('dark').primary} />
      </Grid>
    </Grid>
  );
}

ClientDetails.propTypes = {};

ClientDetails.defaultProps = {};

export default ClientDetails;
