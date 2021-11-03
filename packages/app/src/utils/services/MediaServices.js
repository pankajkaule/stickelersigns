import authService from 'utils/services/auth';
import * as actions from 'utils/actionTypes';
import { responseErrorValidator } from 'utils/helpers/other';
import generateThumbnailForImage from 'utils/generators/imageThumbNailGenerator';
import generateThumbnailForVideo from 'utils/generators/videoThumbnailGenerators';

export const mediaUpload = 'content/save';
export const mediaList = 'content/list';

// Service to fetch all the media list
const fetchList = async ({ postBody, dispatch }) => {
  try {
    dispatch({ type: actions.GLOBAL_SHOW_LOADER });
    let result = await authService.post(mediaList, { ...postBody });
    if (result.status === 200) {
      dispatch({ type: actions.GLOBAL_HIDE_LOADER });
      return result.data.data;
    }
  } catch (err) {
    dispatch({ type: actions.GLOBAL_HIDE_LOADER });
    dispatch({
      type: actions.GLOBAL_SHOW_ALERT,
      payload: {
        message: responseErrorValidator(err),
        variant: 'error',
      },
    });
    return [];
  }
};

// Service to upload the media

const upload = async ({
  file,
  onUploadProgress,
  cancelToken,
  contentType,
  resourceType,
  title,
  contentUrl,
  handleClose,
}) => {
  if (contentType === 'IMAGE' && resourceType === 'file') {
    let formData = new FormData();
    let fileContent = {
      title: file.name,
      contentType: contentType,
      resourceType: 'IMAGE',
    };
    formData.append('content', JSON.stringify(fileContent));
    formData.append('file', file);
    await generateThumbnailForImage(file, async ({ generatedFile }) => {
      formData.append('thumbnail', generatedFile);
      await authService.post(mediaUpload, formData, {
        onUploadProgress: onUploadProgress,
        cancelToken: cancelToken,
      });
    });
  } else if (contentType === 'VIDEO' && resourceType === 'file') {
    let formData = new FormData();
    let fileContent = {
      title: file.name,
      contentType: contentType,
      resourceType: 'VIDEO',
    };
    formData.append('content', JSON.stringify(fileContent));
    formData.append('file', file);
    await generateThumbnailForVideo(file, async ({ generatedFile }) => {
      formData.append('thumbnail', generatedFile);
      await authService.post(mediaUpload, formData, {
        onUploadProgress: onUploadProgress,
        cancelToken: cancelToken,
      });
    });
  } else if (contentType === 'VIDEO' && (resourceType === 'youtube' || resourceType === 'vimeo')) {
    let formData = new FormData();
    let fileContent = {
      title: title,
      contentType: contentType,
      resourceType: resourceType,
      contentUrl: contentUrl,
      thumbnailUrl: contentUrl,
    };
    formData.append('content', JSON.stringify(fileContent));
    await authService.post(mediaUpload, formData, {
      onUploadProgress: onUploadProgress,
      cancelToken: cancelToken,
    });
  } else if (resourceType === 'external link') {
    if (contentType === 'IMAGE') {
      await generateThumbnailForImage(
        { name: title },
        async ({ base64 }) => {
          let formData = new FormData();
          let fileContent = {
            title: title,
            contentType: contentType,
            resourceType: resourceType,
            contentUrl: contentUrl,
            thumbnailUrl: base64.split(',')[1],
          };
          formData.append('content', JSON.stringify(fileContent));
          await authService.post(mediaUpload, formData, {
            onUploadProgress: onUploadProgress,
            cancelToken: cancelToken,
          });
        },
        true,
        contentUrl,
      );
    } else if (contentType === 'VIDEO') {
      await generateThumbnailForVideo(
        { name: title },
        async ({ generatedFile }) => {
          let formData = new FormData();
          let fileContent = {
            title: title,
            contentType: contentType,
            resourceType: resourceType,
            contentUrl: contentUrl,
          };
          formData.append('content', JSON.stringify(fileContent));
          formData.append('thumbnail', generatedFile);
          await authService.post(mediaUpload, formData, {
            onUploadProgress: onUploadProgress,
            cancelToken: cancelToken,
          });
        },
        true,
        contentUrl,
      );
    } else if (contentType === 'IFRAME') {
      let formData = new FormData();
      let fileContent = {
        title: title,
        contentType: contentType,
        resourceType: resourceType,
        contentUrl: contentUrl,
        thumbnailUrl: contentUrl,
      };
      formData.append('content', JSON.stringify(fileContent));
      await authService.post(mediaUpload, formData, {
        onUploadProgress: onUploadProgress,
        cancelToken: cancelToken,
      });
    }
  }
};

const MediaService = {
  fetchList,
  upload,
};

export default MediaService;
