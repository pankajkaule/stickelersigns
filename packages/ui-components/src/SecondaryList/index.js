import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import EditIcon from '@material-ui/icons/Edit';
import CheckIcon from '@material-ui/icons/Check';
import List from '../List';
import Button from '../Button';
import InputComponent from '../Input';

function SecondaryList({
  title,
  theme,
  handleSave,
  handleEdit,
  handleDelete,
  isEdit,
  index,
  handleFileNameChange,
  editFileName,
}) {
  return (
    <Grid container justifyContent="center">
      <List
        theme={theme}
        variant="other"
        useDefault
        style={{
          width: '710px',
          maxWidth: '710px',
          margin: '10px 0 0',
          minHeight: '70px',
          height: '70px',
        }}>
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          style={{ height: '100%' }}>
          <Grid item>
            {isEdit ? (
              <form noValidate autoComplete="off">
                <InputComponent
                  label=""
                  placeholder=""
                  onChange={handleFileNameChange}
                  value={isEdit ? editFileName : title}
                  type="text"
                  useDefault
                  theme="dark"
                  themeType="primary"
                  autoFocus={isEdit}
                  width="570px"
                  handleClear={() => handleFileNameChange('')}
                />
              </form>
            ) : (
              title
            )}
          </Grid>
          <Grid item>
            <Grid container spacing={1}>
              <Grid item>
                <Button
                  useDefault
                  themeType="settings"
                  onClick={() => (isEdit ? handleSave(index) : handleEdit(index, title))}>
                  {!isEdit ? (
                    <EditIcon style={{ fontSize: '14px' }} />
                  ) : (
                    <CheckIcon style={{ fontSize: '14px' }} />
                  )}
                </Button>
              </Grid>
              <Grid item>
                <Button useDefault themeType="settings" onClick={() => handleDelete(index)}>
                  <CloseIcon style={{ fontSize: '14px' }} />
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </List>
    </Grid>
  );
}

SecondaryList.propTypes = {
  title: PropTypes.string.isRequired,
  theme: PropTypes.string,
  handleSave: PropTypes.func.isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  isEdit: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired,
  handleFileNameChange: PropTypes.func.isRequired,
};

SecondaryList.defaultProps = {
  theme: 'dark',
};

export default SecondaryList;
