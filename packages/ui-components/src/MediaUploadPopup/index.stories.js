import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import MediaUploadPopup from '.';

export default {
  title: 'Components/MediaUploadPopup',
  component: MediaUploadPopup,
};

const Template = (args) => {
  const { inputLabel, inputPlaceholder } = args;

  const [mediaType, setMediaType] = useState('File');
  const [externalLinkValue, setExternalLinkValue] = useState('');
  const [externalFileName, setExternalFileName] = useState('');
  const [previewUrl, setPreviewUrl] = useState('');
  const [externalLinkMediaType, setExternalLinkMediaType] = useState('Video');
  const [filesContainer, setFilesContainer] = useState([]);
  const [isEditId, setIsEditId] = useState(null);
  const [editFileName, setEditFileName] = useState('');

  const handleChange = (e) => {
    setMediaType(e.target.value);
  };

  const getVimeoCode = (url) => {
    const regExp = /^.*(vimeo\.com\/)((channels\/[A-z]+\/)|(groups\/[A-z]+\/videos\/))?([0-9]+)/;
    const parseUrl = regExp.exec(url);
    return parseUrl[5];
  };

  const getVimeoThumbnail = async () => {
    await Axios.get(`http://vimeo.com/api/v2/video/${getVimeoCode(externalLinkValue)}.json`)
      .then((res) => {
        if (res.status === 200) {
          setPreviewUrl(res.data[0].thumbnail_large);
        }
      })
      .catch(() => {
        setPreviewUrl('');
      });
  };
  const getYoutubeCode = (url) => {
    const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[7].length === 11 ? match[7] : false;
  };

  useEffect(() => {
    if (externalLinkValue && mediaType.toLocaleLowerCase() === 'youtube') {
      setPreviewUrl(
        ` https://img.youtube.com/vi/${getYoutubeCode(externalLinkValue)}/mqdefault.jpg`,
      );
    } else if (externalLinkValue && mediaType.toLocaleLowerCase() === 'vimeo') {
      getVimeoThumbnail();
    } else if (externalLinkValue && mediaType.toLocaleLowerCase() === 'external link') {
      setPreviewUrl(externalLinkValue);
    } else {
      setPreviewUrl('');
    }
  }, [externalLinkValue]);

  useEffect(() => {
    setPreviewUrl('');
    setExternalLinkValue('');
  }, [mediaType]);

  const handleFileDrop = (files) => {
    setFilesContainer(files);
  };

  const handleFileEdit = (id, title) => {
    setIsEditId(id);
    if (!editFileName.length) {
      setEditFileName(title);
    }
  };

  const handleFileSave = (id) => {
    setIsEditId(null);
    const filesListCopy = Array.from(filesContainer);
    const tempFile = new File([filesListCopy[id]], editFileName, { type: filesListCopy[id].type });
    filesListCopy[id] = tempFile;
    setFilesContainer(filesListCopy);
    setEditFileName('');
  };
  const handleFileDelete = (id) => {
    setIsEditId(null);
    setEditFileName('');
    const filesListCopy = Array.from(filesContainer);
    filesListCopy.splice(id, 1);
    setFilesContainer(filesListCopy);
  };

  const handleEditFileNameChange = (e) => {
    if (e) {
      setEditFileName(e.target.value);
    } else {
      setEditFileName('');
    }
  };

  const handleExternalLinkChange = (e) => {
    if (!e) {
      setExternalLinkValue('');
    } else {
      setExternalLinkValue(e.target.value);
    }
  };

  const handleFileNameChange = (e) => {
    if (!e) {
      setExternalFileName('');
    } else {
      setExternalFileName(e.target.value);
    }
  };

  const handleSave = () => {};

  return (
    <MediaUploadPopup
      {...args}
      handleSave={handleSave}
      type={mediaType}
      handleTypeChange={handleChange}
      previewUrl={previewUrl}
      handleExternalLinkChange={handleExternalLinkChange}
      handleFileNameChange={handleFileNameChange}
      handleFileEdit={handleFileEdit}
      handleFileDelete={handleFileDelete}
      handleFileSave={handleFileSave}
      externalLinkValue={externalLinkValue}
      fileNameValue={externalFileName}
      isEditId={isEditId}
      editFileName={editFileName}
      handleEditFileNameChange={handleEditFileNameChange}
      handleExternalLinkMediaTypeChange={(e) => setExternalLinkMediaType(e.target.value)}
      externalLinkMediaType={externalLinkMediaType}
      handleFileDrop={handleFileDrop}
      filesList={filesContainer}
      label={inputLabel}
      placeholder={inputPlaceholder}
    />
  );
};

export const Default = Template.bind({});

Default.args = {
  open: true,
};
