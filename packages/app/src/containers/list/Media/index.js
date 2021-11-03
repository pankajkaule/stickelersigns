import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Avatar, Grid } from '@material-ui/core';
import { SSButton, SSList, SSTypography } from '@ss/ui-components';
import { buttonTheme } from 'themes/button.theme';
import { typographyTheme } from 'themes/typography.theme';
import useStyles from './index.styles';
import { convertIntoBase64Image } from 'utils/helpers/dataConverters';
import axios from 'axios';
import { getVimeoCode, getYoutubeCode } from 'utils/helpers/other';
function MediaList(props) {
  const {
    thumbnailUrl,
    contentType,
    title,
    size,
    projects,
    handlePreview,
    resourceType,
    contentUrl,
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
    }
    return resourceUrl;
  }, [resourceType, thumbnailUrl, contentUrl, getVimeoThumbnail]);

  useEffect(() => {
    if (resourceType || thumbnailUrl || contentUrl) {
      getContentValidURL();
    }
  }, [resourceType, thumbnailUrl, contentUrl, getContentValidURL]);

  return (
    <SSList useDefault variant="media">
      <Grid container justify="space-between" alignItems="center">
        <Grid item xs={12} sm={7} md={7} lg={7}>
          <Grid container spacing={3} alignItems="center">
            <Grid item>
              <Avatar
                className={classes.avatar}
                variant="rounded"
                src={previewUrl || title}
                alt={title}
              />
            </Grid>
            <Grid item>
              <Grid container direction="column">
                <SSTypography
                  label={contentType}
                  {...typographyTheme('dark', 'regular').secondary}
                  margin="0 0 22px 0"
                />
                <SSTypography
                  label={title}
                  {...typographyTheme('dark', 'regular').secondary}
                  size="14px"
                  lineHeight="19px"
                />
                <SSTypography label={size} {...typographyTheme('dark', 'regular').secondary} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={5} md={5} lg={5}>
          <Grid container justifyContent="flex-end" alignItems="center" spacing={2}>
            <Grid item>
              <SSButton
                onClick={handleSettings}
                disabled
                variant="contained"
                useDefault
                themeType="status">
                {projects.length ? `Used un ${projects.length} projects` : 'Unused'}
              </SSButton>
            </Grid>
            <Grid item>
              <SSButton
                onClick={handlePreview}
                variant="contained"
                {...buttonTheme('dark').primary}
                height="30px">
                Preview
              </SSButton>
            </Grid>
            {/* <Grid item>
              <SSButton
                onClick={handleSettings}
                variant="contained"
                {...buttonTheme('dark').settings}>
                <SettingsButtonIcon />
              </SSButton>
            </Grid> */}
          </Grid>
        </Grid>
      </Grid>
    </SSList>
  );
}

MediaList.propTypes = {
  theme: PropTypes.string,
  thumbnailUrl: PropTypes.string,
  contentType: PropTypes.string,
  title: PropTypes.string,
  size: PropTypes.string,
  projects: PropTypes.string,
  handlePreview: PropTypes.func.isRequired,
};

MediaList.defaultProps = {
  theme: 'dark',
  thumbnailUrl: '',
  contentType: '',
  title: '',
  size: '',
  projects: '',
};

export default MediaList;
