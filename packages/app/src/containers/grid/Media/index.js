import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import axios from 'axios';
import VideocamIcon from '@material-ui/icons/Videocam';
import CropOriginalIcon from '@material-ui/icons/CropOriginal';
import { SSButton, SSCard } from '@ss/ui-components';
import styled, { ThemeProvider } from 'styled-components';
import { buttonTheme } from 'themes/button.theme';
import SettingsButtonIcon from 'components/icons/SettingsButton';
import useStyles from './index.styles';
import { convertIntoBase64Image } from 'utils/helpers/dataConverters';
import { getVimeoCode, getYoutubeCode } from 'utils/helpers/other';
const StyledSSCard = styled(SSCard)`
  background: ${(props) =>
    props.theme.thumbnailUrl ? `url(${props.theme.thumbnailUrl})` : '#1A1B1D'};
  background-size: cover;
  background-position: center;
  &:hover {
    background: ${(props) =>
      props.theme.thumbnailUrl ? `url(${props.theme.thumbnailUrl}) !important` : '#1A1B1D'};
    background-size: cover !important;
    background-position: center !important;
  }
  &:hover #media-card-hover-content {
    display: inline-block !important;
    background-size: cover !important;
    background-position: center !important;
  }
`;

function MediaGrid(props) {
  const {
    theme = 'dark',
    thumbnailUrl,
    handlePreview,
    resourceType,
    contentUrl,
    contentType,
  } = props;
  const [previewUrl, setPreviewUrl] = useState('');
  const classes = useStyles(props);
  const handleSettings = () => {};

  const getVimeoThumbnail = useCallback(async () => {
    let url = '';
    await axios
      .get(`http://vimeo.com/api/v2/video/${getVimeoCode(thumbnailUrl || contentUrl)}.json`)
      .then((res) => {
        if (res.status === 200) {
          url = res.data[0].thumbnail_large;
        }
      })
      .catch(() => {
        url = '';
      });
    return url;
  }, [thumbnailUrl, contentUrl]);

  const getContentValidURL = useCallback(async () => {
    let resourceUrl = '';
    if (resourceType === 'IMAGE' || resourceType === 'VIDEO' || resourceType === 'file') {
      setPreviewUrl(convertIntoBase64Image(thumbnailUrl));
    } else if (resourceType === 'youtube') {
      setPreviewUrl(
        `https://img.youtube.com/vi/${getYoutubeCode(thumbnailUrl || contentUrl)}/mqdefault.jpg`,
      );
    } else if (resourceType === 'vimeo') {
      setPreviewUrl(await getVimeoThumbnail());
    } else if (resourceType === 'external link' && contentType === 'IMAGE') {
      setPreviewUrl(convertIntoBase64Image(thumbnailUrl));
    } else if (resourceType === 'external link' && contentType === 'VIDEO') {
      setPreviewUrl(convertIntoBase64Image(thumbnailUrl));
    }
    return resourceUrl;
  }, [resourceType, thumbnailUrl, contentUrl, getVimeoThumbnail]);

  useEffect(() => {
    if (resourceType || thumbnailUrl || contentUrl) {
      getContentValidURL();
    }
  }, [resourceType, thumbnailUrl, contentUrl, getContentValidURL]);

  return (
    <Grid item xs={2} sm={2} md={2} lg={2} className={classes.cardsContainer}>
      <ThemeProvider theme={{ thumbnailUrl: previewUrl }}>
        <StyledSSCard height={170} width={170} padding="0" margin="0">
          <Grid
            container
            id="media-card-hover-content"
            direction="column"
            className={classes.container}>
            <Grid item className={classes.hoverTitleContainer}>
              <SSButton onClick={handlePreview} {...buttonTheme(theme).white}>
                Preview
              </SSButton>
            </Grid>
            <Grid item>
              <Grid
                container
                justifyContent="space-between"
                alignItems="flex-end"
                className={classes.hoverActionsContainer}>
                <Grid item>
                  {contentType === 'VIDEO' ? <VideocamIcon /> : <CropOriginalIcon />}
                </Grid>
                <Grid item style={{ visibility: 'hidden' }}>
                  <SSButton
                    onClick={handleSettings}
                    variant="contained"
                    {...buttonTheme(theme).settings}>
                    <SettingsButtonIcon />
                  </SSButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </StyledSSCard>
      </ThemeProvider>
    </Grid>
  );
}

MediaGrid.propTypes = {
  theme: PropTypes.string,
  thumbnailUrl: PropTypes.string,
  handlePreview: PropTypes.func.isRequired,
};

MediaGrid.defaultProps = {
  theme: 'dark',
  thumbnailUrl: '',
};

export default MediaGrid;
