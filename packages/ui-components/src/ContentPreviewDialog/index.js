import React from 'react';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player';
import Dialog from '../Dialog';

function ContentPreviewDialog({ previewUrl, alt, open, handleClose, contentType }) {
  const getPreviewer = () => {
    switch (contentType) {
      case 'IMAGE':
        return (
          <img
            src={previewUrl}
            alt={alt}
            style={{ width: '100%', height: '100%', objectFit: 'scale-down' }}
          />
        );

      case 'VIDEO':
        return <ReactPlayer url={previewUrl} controls width="100%" height="100%" />;

      case 'IFRAME':
        return <iframe src={previewUrl} title="preview" width="100%" height="100%" />;

      default:
        return (
          <img
            src={previewUrl}
            alt={alt}
            style={{ width: '100%', height: '100%', objectFit: 'scale-down' }}
          />
        );
    }
  };

  return (
    <Dialog open={open} handleClose={handleClose} useDefault variant="preview">
      {getPreviewer()}
    </Dialog>
  );
}

ContentPreviewDialog.propTypes = {
  previewUrl: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  contentType: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default ContentPreviewDialog;
