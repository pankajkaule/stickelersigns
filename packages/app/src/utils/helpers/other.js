export const responseErrorValidator = (err, errorKey = 'error') => {
  return err &&
    err !== undefined &&
    err.response &&
    err.response !== undefined &&
    err.response.data &&
    err.response.data !== undefined
    ? err.response.data[errorKey]
    : err[errorKey];
};

// Status of device
export const getDeviceCommandStatus = (commandList) => {
  let commandContainer = [];
  commandList.forEach((el) => {
    if (el.command === 'tvOn' || el.command === 'tvOff') {
      commandContainer.push(el.command);
    }
  });
  return commandContainer[0];
};

export const getDeviceCommandParameterValue = (commandList, command) => {
  let commandContainer = [];
  console.log(commandList);
  commandList.forEach((el) => {
    if (el.command === command) {
      commandContainer.push(el);
    }
  });
  return commandContainer.length ? commandContainer[0].commandParameters[0].parameterValue : '';
};

// youtube URI parser
export const getYoutubeCode = (url) => {
  var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  var match = url.match(regExp);
  return match && match[7].length === 11 ? match[7] : false;
};

export const getVimeoCode = (url) => {
  const regExp = /^.*(vimeo\.com\/)((channels\/[A-z]+\/)|(groups\/[A-z]+\/videos\/))?([0-9]+)/;
  const parseUrl = regExp.exec(url);
  return parseUrl[5];
};

// Convert into autoComplete format
export const convertIntoAutoCompleteFormat = (list) => {
  const finalList = [];
  list.forEach((el) => {
    if (el) {
      finalList.push({ title: el, value: el });
    }
  });
  return finalList;
};

// Get current location co-ordinates
export const getCoordintes = (getData) => {
  var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  async function success(pos) {
    var crd = pos.coords;
    var lat = crd.latitude.toString();
    var lng = crd.longitude.toString();
    var coordinates = [lat, lng];
    getData(coordinates);
  }

  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  return navigator.geolocation.getCurrentPosition(success, error, options);
};
