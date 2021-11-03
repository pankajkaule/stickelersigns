import React from 'react';
import PropTypes from 'prop-types';
import { useDropzone } from 'react-dropzone';
import AddIcon from '@material-ui/icons/Add';
import Button from '../Button/index';
import useStyles from './index.styles';
import ImagePreview from '../ImagePreview';
import uploaderTheme from '../Themes/uploader.theme';

const Uploader = React.forwardRef((props) => {
  const {
    handleFileDrop,
    styles,
    defaultDescription,
    btnTitle,
    showBtnIcon,
    onDragDescription,
    src,
    accept,
    imagePreviewStyle,
    name,
    useDefault,
    theme,
    variant,
    disabled,
  } = props;
  const {
    onDragColor,
    width,
    minWidth,
    maxWidth,
    height = '100%',
    minHeight = '100%',
    maxHeight = '100%',
  } = styles;

  const { getRootProps, getInputProps, open, isDragActive, isDragAccept, isDragReject } =
    useDropzone({
      // Disable click and keydown behavior
      noClick: true,
      noKeyboard: true,
      multiple: true,
      onDrop: handleFileDrop,
      accept,
      disabled,
    });
  const themeContainer = useDefault ? uploaderTheme(theme)[variant] : styles;
  const stylesGenerator = useStyles(themeContainer);
  const { baseStyle, activeStyle, acceptStyle, rejectStyle } = stylesGenerator;

  const style = {
    ...baseStyle,
    ...(isDragActive ? activeStyle : {}),
    ...(isDragAccept ? acceptStyle : {}),
    ...(isDragReject ? rejectStyle : {}),
  };

  const description = isDragActive ? (
    <p style={{ color: onDragColor }}>{onDragDescription}</p>
  ) : (
    <p>{defaultDescription}</p>
  );

  const browseBtn =
    isDragActive || disabled ? (
      ''
    ) : (
      <Button onClick={open} useDefault margin="20px 0 0 0">
        {showBtnIcon ? <AddIcon style={{ padding: '0 5px 0 0' }} /> : ''}
        {btnTitle}
      </Button>
    );

  const imagePreview = (
    <ImagePreview open={open} src={src} disabled={disabled} {...imagePreviewStyle} />
  );

  const descriptionContent = src ? '' : description;

  const browseBtnContent = src ? '' : browseBtn;

  const content = src ? imagePreview : '';

  return (
    <div className="container" style={{ width, minWidth, maxWidth, height, minHeight, maxHeight }}>
      <div {...getRootProps({ style })}>
        <input {...getInputProps()} name={name} />
        {descriptionContent}
        {browseBtnContent}
        {content}
      </div>
    </div>
  );
});

Uploader.propTypes = {
  customButton: PropTypes.node,
  handleFileDrop: PropTypes.func,
  styles: PropTypes.shape({
    width: PropTypes.string,
    minWidth: PropTypes.string,
    maxWidth: PropTypes.string,
    height: PropTypes.string,
    minHeight: PropTypes.string,
    maxHeight: PropTypes.string,
    background: PropTypes.string,
    fontFamily: PropTypes.string,
    fontSize: PropTypes.string,
    lineHeight: PropTypes.string,
    letterSpacing: PropTypes.string,
    textAlign: PropTypes.string,
    color: PropTypes.string,
    padding: PropTypes.string,
    borderWidth: PropTypes.string,
    borderRadius: PropTypes.string,
    borderColor: PropTypes.string,
    activeBorderColor: PropTypes.string,
    acceptedBorderColor: PropTypes.string,
    acceptedBackgroundColor: PropTypes.string,
    rejectedBackgroundColor: PropTypes.string,
    onDragColor: PropTypes.string,
  }),
  onDragDescription: PropTypes.string,
  defaultDescription: PropTypes.string,
  btnTitle: PropTypes.string,
  showBtnIcon: PropTypes.bool,
  src: PropTypes.string,
  accept: PropTypes.string,
  imagePreviewStyle: PropTypes.shape({
    styles: PropTypes.objectOf(PropTypes.string),
    buttonStyles: PropTypes.objectOf(PropTypes.string),
    avatarStyles: PropTypes.objectOf(PropTypes.string),
    iconStyles: PropTypes.objectOf(PropTypes.string),
  }),
  name: PropTypes.string,
  useDefault: PropTypes.bool,
  theme: PropTypes.string,
  variant: PropTypes.string,
  disabled: PropTypes.bool,
};

Uploader.defaultProps = {
  customButton: null,
  handleFileDrop: () => {},
  styles: {},
  onDragDescription: 'Drop here to unload',
  defaultDescription: 'Drag and Drop or Browse Your Computer to Add Media',
  btnTitle: 'Browse',
  showBtnIcon: true,
  src: '',
  accept: 'image/jpeg, image/png,video/mp4',
  imagePreviewStyle: {
    styles: {},
    buttonStyles: {},
    avatarStyles: {},
    iconStyles: {},
  },
  name: '',
  useDefault: false,
  theme: 'dark',
  variant: 'primary',
  disabled: false,
};

export default Uploader;
