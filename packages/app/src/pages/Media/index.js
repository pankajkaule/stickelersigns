import React, { useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { Grid } from '@material-ui/core';
import { SSContentPreviewDialog, SSMediaUploadingPopup, SSUploadingPopup } from '@ss/ui-components';
import useStyles from './index.styles';
import BasicActions from 'components/BasicActions';
import MediaGrid from 'containers/grid/Media';
import MediaList from 'containers/list/Media';
import NoDataFound from 'containers/NoDataFound';
import { UserContext } from 'context/user';
import axios from 'axios';
import MediaService from 'utils/services/MediaServices';
import useDebounce from 'hooks/useDebounce';
import { getBusinessSelectionAccess } from 'utils/helpers/permissions';

const filterList = [
  {
    label: 'Images',
    value: 'images',
  },
  {
    label: 'Video',
    value: 'Video',
  },
  {
    label: 'Web Pages',
    value: 'web_pages',
  },
  {
    label: 'Youtube',
    value: 'youtube',
  },
  {
    label: 'Vimeo',
    value: 'vimeo',
  },
];

// const CancelToken = axios.CancelToken;
// const source = CancelToken.source();
function Media(props) {
  const { userState, userDispatch } = useContext(UserContext);
  const { globalLoader, selectedBusiness, roles } = userState;
  const [viewToggle, setViewToggle] = useState('grid'); //Flag to set the view type
  const [openMediaPopup, setOpenMediaPopup] = useState(false);
  const [mediaContainer, setMediaContainer] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [mediaType, setMediaType] = useState('File');
  const [externalLinkValue, setExternalLinkValue] = useState('');
  const [externalFileName, setExternalFileName] = useState('');
  const [previewUrl, setPreviewUrl] = useState('');
  const [externalLinkMediaType, setExternalLinkMediaType] = useState('Video');
  const [filesContainer, setFilesContainer] = useState([]);
  const [isEditId, setIsEditId] = useState(null);
  const [editFileName, setEditFileName] = useState('');
  const [sortValue, setSortValue] = useState('ASC');
  const [filtersValue, setFiltersValue] = useState(['all']);
  const [filtersDraft, setFiltersDraft] = useState(['all']);
  const [openContentPreview, setOpenContentPreview] = useState('');
  const [selectedContentPreviewUrl, setSelectedContentPreviewUrl] = useState('');
  const [selectedContentContentType, setSelectedContentContentType] = useState('');
  const [openUploadingPopup, setOpenUploadingPopup] = useState(false);
  const [mediaUploadStatusList, setMediaUploadStatusList] = useState([]);
  let filesRef = useRef([]);
  const searchTerm = useDebounce(searchValue, 500);
  const classes = useStyles();

  const getValidSortObj = useCallback(() => {
    if (sortValue === 'ASC') {
      return { sort: 'ASC', orderBy: 'title' };
    } else if (sortValue === 'DESC') {
      return { sort: 'DESC', orderBy: 'title' };
    } else if (sortValue === 'createdAt') {
      return { sort: 'DESC', orderBy: 'createdAt' };
    } else if (sortValue === 'updatedAt') {
      return { sort: 'DESC', orderBy: 'updatedAt' };
    } else {
      return { sort: 'ASC', orderBy: 'title' };
    }
  }, [sortValue]);

  const getFiltersValue = () => {
    let filterValue = [];
    if (!filtersDraft.includes('all')) {
      filterValue = filtersDraft;
    } else {
      filterValue = ['all'];
    }
    return filterValue;
  };

  const getSearchCriteria = useCallback(() => {
    const finalSearchCriteria = [];
    if (searchTerm) {
      finalSearchCriteria.push({
        criteriaName: 'title',
        value: searchTerm,
      });
    }
    if (selectedBusiness) {
      finalSearchCriteria.push({
        criteriaName: 'clientId',
        value: `${selectedBusiness}`,
      });
    }
    if (filtersValue.includes('images')) {
      finalSearchCriteria.push({
        criteriaName: 'contentType',
        value: 'IMAGE',
      });
    }
    if (filtersValue.includes('Video')) {
      finalSearchCriteria.push({
        criteriaName: 'contentType',
        value: 'VIDEO',
      });
    }
    if (filtersValue.includes('web_pages')) {
      finalSearchCriteria.push({
        criteriaName: 'resourceType',
        value: 'web pages',
      });
    }
    if (filtersValue.includes('youtube')) {
      finalSearchCriteria.push({
        criteriaName: 'resourceType',
        value: 'youtube',
      });
    }
    if (filtersValue.includes('vimeo')) {
      finalSearchCriteria.push({
        criteriaName: 'resourceType',
        value: 'vimeo',
      });
    }

    return finalSearchCriteria;
  }, [searchTerm, selectedBusiness, filtersValue]);

  const handleRemoveFilter = (el) => {
    const filtersValueCopy = Array.from(filtersValue);
    filtersValueCopy.splice(filtersValueCopy.indexOf(el.value), 1);
    if (filtersValueCopy.length) {
      setFiltersValue(filtersValueCopy);
      setFiltersDraft(filtersValueCopy);
    } else {
      setFiltersValue(['all']);
      setFiltersDraft(['all']);
    }
  };

  const handleFilterApply = () => {
    setFiltersValue(filtersDraft);
  };

  const fetchMediaList = useCallback(async () => {
    const { fetchList } = MediaService;
    const postBody = {
      searchCriterias: getSearchCriteria(),
      pageRequest: {
        page: 0,
        size: 1000,
        ...getValidSortObj(),
      },
    };
    const mediaListContainer = await fetchList({ dispatch: userDispatch, postBody: postBody });
    setMediaContainer(mediaListContainer);
  }, [userDispatch, getSearchCriteria, getValidSortObj]);

  useEffect(() => {
    fetchMediaList();
  }, [fetchMediaList]);

  const handleChange = (e) => {
    setMediaType(e.target.value);
  };

  const getVimeoCode = (url) => {
    const regExp = /^.*(vimeo\.com\/)((channels\/[A-z]+\/)|(groups\/[A-z]+\/videos\/))?([0-9]+)/;
    const parseUrl = regExp.exec(url);
    return parseUrl[5];
  };

  const getVimeoThumbnail = async () => {
    await axios
      .get(`http://vimeo.com/api/v2/video/${getVimeoCode(externalLinkValue)}.json`)
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
    setFilesContainer([]);
    setExternalLinkMediaType('Video');
  }, [mediaType]);

  const handleFileDrop = (files) => {
    const filesContainerCopy = Array.from(filesContainer);
    setFilesContainer(filesContainerCopy.concat(files));
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

  const handleCloseMediaUploadPopup = () => {
    setOpenMediaPopup(false);
    setMediaType('File');
    setExternalFileName('');
    setExternalLinkValue('');
    setFilesContainer([]);
  };

  const onUploadProgress = (e, i) => {
    const uploadFilesCopy = Array.from(mediaUploadStatusList);
    uploadFilesCopy[i].value = Math.floor((e.loaded / e.total) * 100);
    filesRef.current[i].value = Math.floor((e.loaded / e.total) * 100);
    setMediaUploadStatusList(uploadFilesCopy);
  };

  const getContentAndResourceType = (file) => {
    let typeObj = {};
    if (mediaType.toLowerCase() === 'file') {
      typeObj = {
        contentType: String(file.type).includes('image') ? 'IMAGE' : 'VIDEO',
        resourceType: 'file',
      };
    } else if (mediaType.toLowerCase() === 'youtube') {
      typeObj = {
        contentType: 'VIDEO',
        resourceType: 'youtube',
      };
    } else if (mediaType.toLowerCase() === 'vimeo') {
      typeObj = {
        contentType: 'VIDEO',
        resourceType: 'vimeo',
      };
    }
    return typeObj;
  };

  useEffect(() => {
    if (filesContainer.length) {
      let filesCopy = [];
      filesContainer.forEach((el, i) => {
        filesCopy.push({
          label: el.name,
          value: 0,
          id: i,
        });
      });
      setMediaUploadStatusList(filesCopy);
      filesRef.current = filesCopy;
    }
  }, [filesContainer]);

  useEffect(() => {
    if (externalFileName.trim().length && externalLinkValue.trim().length) {
      let filesCopy = [];
      filesCopy.push({
        label: externalFileName,
        value: 0,
        id: 0,
      });
      filesRef.current = filesCopy;
      setMediaUploadStatusList(filesCopy);
    }
  }, [externalFileName, externalLinkValue]);
  const handleSave = async () => {
    const { upload } = MediaService;
    setOpenUploadingPopup(true);
    if (filesContainer.length) {
      filesContainer.forEach(async (el, i) => {
        await upload({
          file: el,
          ...getContentAndResourceType(el),
          onUploadProgress: (e) => onUploadProgress(e, i),
          // cancelToken: source.token,
        });
      });
    } else if (mediaType.toLowerCase() === 'youtube' || mediaType.toLowerCase() === 'vimeo') {
      await upload({
        title: externalFileName,
        contentUrl: externalLinkValue,
        contentType: 'VIDEO',
        resourceType: mediaType.toLowerCase(),
        onUploadProgress: (e) => onUploadProgress(e, 0),
        // cancelToken: source.token,
      });
    } else if (mediaType.toLowerCase() === 'external link') {
      await upload({
        title: externalFileName,
        contentUrl: externalLinkValue,
        contentType: externalLinkMediaType.toUpperCase(),
        resourceType: mediaType.toLowerCase(),
        onUploadProgress: (e) => onUploadProgress(e, 0),
        // cancelToken: source.token,
      });
    }
    handleCloseMediaUploadPopup();
  };
  const handleCloseContentPreview = () => {
    setOpenContentPreview(false);
    setSelectedContentPreviewUrl('');
    setSelectedContentContentType('');
  };

  const handlePreview = (el) => {
    setOpenContentPreview(true);
    setSelectedContentContentType(el.contentType);
    setSelectedContentPreviewUrl(el.contentUrl);
  };

  const handleCancelUploading = () => {
    setOpenUploadingPopup(false);
    fetchMediaList();
    // source.cancel();
  };

  const gridView = useMemo(
    () =>
      mediaContainer.map((e, i) => (
        <Grid item>
          <MediaGrid active {...e} index={i} handlePreview={() => handlePreview(e)} />
        </Grid>
      )),
    [mediaContainer],
  );

  const listView = useMemo(
    () =>
      mediaContainer.map((e, i) => (
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <MediaList active {...e} index={i} handlePreview={() => handlePreview(e)} />
        </Grid>
      )),
    [mediaContainer],
  );

  const viewContainer = useMemo(
    () => (viewToggle === 'grid' ? gridView : listView),
    [viewToggle, gridView, listView],
  );

  const filtersCondition = useMemo(() => {
    return getBusinessSelectionAccess(roles)
      ? getSearchCriteria().length > 1
      : getSearchCriteria().length > 0;
  }, [getSearchCriteria, roles]);

  const cardsContainer =
    mediaContainer.length > 0 ? (
      viewContainer
    ) : (
      <NoDataFound
        title="Upload Images & Videos or
    Add URLs links and more.
   "
        description=" Later add these medias to your project"
        btnTitle="Uplaod New Media"
        handleClick={() => setOpenMediaPopup(true)}
        isNoDataFound={filtersCondition && !mediaContainer.length}
      />
    );

  return (
    <Grid container justify="center">
      <Grid item xs={12} sm={12} md={12} lg={12} className={classes.root}>
        <Grid container>
          <BasicActions
            actionBtnLabel={'Upload New Media'}
            searchLabel={'Search display'}
            searchTerm={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            onClick={() => {
              setOpenMediaPopup(true);
            }}
            handleSearchClear={() => setSearchValue('')}
            onToggle={(value) => setViewToggle(value)}
            toggleValue={viewToggle}
            showViewToggler
            showBusinessSelection
            selectedBusiness={selectedBusiness}
            filterList={filterList}
            showFilterBy={false}
            handleSort={(e) => setSortValue(e.target.value)}
            sortValue={sortValue}
            handleFilterChange={(value) => setFiltersDraft(value)}
            filterValue={getFiltersValue()}
            handleRemoveFilter={handleRemoveFilter}
            handleFilterApply={handleFilterApply}
          />
          <Grid item xs={12} sm={12} md={12} lg={12} className={classes.cardsContainer}>
            <Grid container className={classes.cardsHolder} spacing={3}>
              {globalLoader ? '' : cardsContainer}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <SSMediaUploadingPopup
        open={openMediaPopup}
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
        handleCancel={handleCloseMediaUploadPopup}
      />
      <SSUploadingPopup
        open={openUploadingPopup}
        list={filesRef.current}
        theme={'dark'}
        handleCancel={handleCancelUploading}
      />
      <SSContentPreviewDialog
        open={openContentPreview}
        handleClose={handleCloseContentPreview}
        previewUrl={selectedContentPreviewUrl}
        contentType={selectedContentContentType}
      />
    </Grid>
  );
}

export default React.memo(Media);
