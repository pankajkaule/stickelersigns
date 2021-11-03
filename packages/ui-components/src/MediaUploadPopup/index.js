import React from 'react';
import PropTypes from 'prop-types';
import { Avatar, DialogActions, Grid, InputAdornment } from '@material-ui/core';
import LinkIcon from '@material-ui/icons/Link';
import AddIcon from '@material-ui/icons/Add';
import Dialog from '../Dialog';
import Uploader from '../Uploader';
import InputComponent from '../Input';
import Button from '../Button';
import Typography from '../Typography';
import Dropdown from '../Dropdown';
import SecondaryList from '../SecondaryList';
import useStyles from './index.styles';

const typeOfMedia = [
  {
    label: 'Video',
    value: 'Video',
  },
  {
    label: 'Image',
    value: 'Image',
  },
  {
    label: 'Webpage',
    value: 'iframe',
  },
];

const medias = [
  {
    label: 'File',
    value: 'File',
  },
  {
    label: 'Youtube',
    value: 'Youtube',
  },
  {
    label: 'Vimeo',
    value: 'Vimeo',
  },
  {
    label: 'External Link',
    value: 'External Link',
  },
];

const MediaUploadPopup = React.forwardRef((props, ref) => {
  const {
    open,
    handleClose,
    label,
    placeholder,
    handleCancel,
    handleSave,
    handleFileDrop,
    type,
    typeAcceptsExternalLinks,
    handleTypeChange,
    previewUrl,
    handleExternalLinkChange,
    externalLinkValue,
    handleFileNameChange,
    fileNameValue,
    handleExternalLinkMediaTypeChange,
    externalLinkMediaType,
    filesList,
    handleFileEdit,
    handleFileDelete,
    handleFileSave,
    isEditId,
    handleEditFileNameChange,
    editFileName,
  } = props;

  const classes = useStyles();

  const uploadDisabled = !(
    filesList.length > 0 ||
    externalLinkValue.trim().length > 0 ||
    fileNameValue.trim().length > 0
  );

  const listContent = filesList.length
    ? filesList.map((el, i) => (
        <SecondaryList
          title={el.name}
          handleEdit={handleFileEdit}
          handleDelete={handleFileDelete}
          handleSave={handleFileSave}
          index={i}
          key={`${el.name}`}
          isEdit={isEditId === i}
          handleFileNameChange={handleEditFileNameChange}
          editFileName={editFileName}
        />
      ))
    : '';

  const inputContent = typeAcceptsExternalLinks.includes(type) ? (
    <Grid container justifyContent="center" style={{ height: '380px' }}>
      <Grid item style={{ margin: '0px 0 0' }}>
        <form noValidate autoComplete="off">
          <InputComponent
            label={label}
            placeholder={placeholder}
            onChange={handleExternalLinkChange}
            value={externalLinkValue}
            type="text"
            handleClear={() => handleExternalLinkChange('')}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start" style={{ padding: '0 0 0 10px' }}>
                  <LinkIcon />
                </InputAdornment>
              ),
            }}
            useDefault
            theme="dark"
            themeType="primary"
            width="710px"
          />
        </form>
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        style={{ width: '710px', height: '230px', visibility: previewUrl ? 'visible' : 'hidden' }}>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          style={{ height: '100%', width: '100%' }}>
          <Grid
            item
            style={{
              minWidth: '710px',
              width: '100%',
              height: '100%',
              maxWidth: '710px',
              background: '#09090A',
            }}>
            <Grid container style={{ height: '100%' }} justifyContent="center" alignItems="center">
              <Grid item>
                {type.toLowerCase() === 'external link' ? (
                  <iframe
                    src={previewUrl}
                    title="External Link"
                    width="346.05px"
                    height="196.77px"
                    referrerPolicy="origin-when-cross-origin"
                    style={{ border: 'none' }}
                  />
                ) : (
                  <Avatar
                    src={previewUrl}
                    variant="rounded"
                    style={{ height: '196.77px', width: '346.05px' }}
                  />
                )}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item style={{ margin: '20px 0 0', visibility: previewUrl ? 'visible' : 'hidden' }}>
        <form noValidate autoComplete="off">
          <InputComponent
            label="* File Name"
            placeholder={placeholder}
            onChange={handleFileNameChange}
            value={fileNameValue}
            type="text"
            useDefault
            theme="dark"
            themeType="primary"
            width="710px"
            handleClear={() => handleFileNameChange('')}
          />
        </form>
      </Grid>
    </Grid>
  ) : (
    <Grid item xs={12} sm={12} md={12} lg={12} style={{ height: '440px', minHeigh: '440px' }}>
      <Grid container justifyContent="center" style={{ height: '100%' }}>
        <Grid item style={{ height: filesList.length ? '200px' : '400px' }}>
          <Uploader
            handleFileDrop={handleFileDrop}
            showBtnIcon={false}
            useDefault
            variant="secondary"
          />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} className={classes.fileList}>
          {listContent}
        </Grid>
      </Grid>
    </Grid>
  );

  const typeOfMediaContent =
    type.toLowerCase() === 'external link' ? (
      <Grid item>
        <Dropdown
          label="* Type of Media"
          value={externalLinkMediaType}
          handleChange={handleExternalLinkMediaTypeChange}
          list={typeOfMedia}
          useDefault
          variant="primary"
          theme="dark"
        />
      </Grid>
    ) : (
      ''
    );

  return (
    <Dialog handleClose={handleClose} open={open} ref={ref} useDefault variant="secondary">
      <Grid container style={{ height: '100%', overflow: 'hidden' }}>
        <Grid item xs={12} sm={12} md={12} lg={12} style={{ margin: '30px 30px 50px' }}>
          <Typography label="Upload Media" useDefault font="bold" />
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          style={{ margin: '0px 30px 20px', height: '66px' }}>
          <Grid container spacing={4}>
            <Grid item>
              <Dropdown
                label="* Media Source"
                value={type}
                handleChange={handleTypeChange}
                list={medias}
                useDefault
                variant="primary"
                theme="dark"
              />
            </Grid>
            {typeOfMediaContent}
          </Grid>
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={12}>
          {inputContent}
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} style={{ height: '40px', margin: '30px 0 ' }}>
          <DialogActions style={{ padding: '0 20px', maxHeight: '40px' }}>
            <Grid container justify="flex-end" spacing={2}>
              <Grid item>
                <Button onClick={handleCancel} useDefault themeType="secondary">
                  Cancel
                </Button>
              </Grid>
              <Grid item>
                <Button disabled={uploadDisabled} onClick={handleSave} useDefault>
                  <AddIcon style={{ padding: '0 5px 0 0', fontSize: '12px' }} />
                  Upload
                </Button>
              </Grid>
            </Grid>
          </DialogActions>
        </Grid>
      </Grid>
    </Dialog>
  );
});

MediaUploadPopup.propTypes = {
  open: PropTypes.bool,
  handleClose: PropTypes.func,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  handleCancel: PropTypes.func,
  handleSave: PropTypes.func,
  handleFileDrop: PropTypes.func,
  typeAcceptsExternalLinks: PropTypes.arrayOf(PropTypes.string),
  type: PropTypes.string,
  handleTypeChange: PropTypes.func,
  previewUrl: PropTypes.string,
  handleExternalLinkChange: PropTypes.func,
  externalLinkValue: PropTypes.string,
  handleFileNameChange: PropTypes.func,
  fileNameValue: PropTypes.string,
  handleExternalLinkMediaTypeChange: PropTypes.func,
  externalLinkMediaType: PropTypes.string,
  filesList: PropTypes.arrayOf(PropTypes.object),
  handleFileEdit: PropTypes.func.isRequired,
  handleFileDelete: PropTypes.func.isRequired,
  handleFileSave: PropTypes.func.isRequired,
  isEditId: PropTypes.number.isRequired,
  handleEditFileNameChange: PropTypes.func.isRequired,
  editFileName: PropTypes.string.isRequired,
};

MediaUploadPopup.defaultProps = {
  open: false,
  handleClose: () => {},
  label: '',
  placeholder: '',
  handleCancel: () => {},
  handleSave: () => {},
  handleFileDrop: () => {},
  typeAcceptsExternalLinks: ['Youtube', 'Vimeo', 'External Link'],
  type: '',
  handleTypeChange: () => {},
  previewUrl: '',
  handleExternalLinkChange: () => {},
  externalLinkValue: '',
  handleFileNameChange: () => {},
  fileNameValue: '',
  handleExternalLinkMediaTypeChange: () => {},
  externalLinkMediaType: '',
  filesList: [],
};

export default MediaUploadPopup;
