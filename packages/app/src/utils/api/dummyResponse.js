// getAllDeviceList API
export const getAllDeviceList = {
  size: 10,
  page: 0,
  totalCount: 32,
  data: [
    {
      id: 1,
      deviceId: 'AXA1234AXA',
      deviceName: 'Central Hall Display',
      deviceStatus: 'active',
      projectName: 'Pittsburg Slideshow',
      projectId: 123,
      installedAppVersion: '0.0.1',
      availableLatestAppVersion: '0.0.1',
      osVersion: '2.3',
      platform: 'LG',
      groupName: 'Device Group2',
      groupId: 234,
      createdDate: '2021-05-10T21:58:39.194Z', // date at which this device was added
      orientationType: 'POTRAIT', // can be "POTRAIT" , "LANDSCAPE"
      lastBeatReceivedOn: '2021-05-10T21:58:39.194Z',
      enabled: true, //    true if device is approved ,
      installationLocation: null,
    },
    {
      id: 1,
      deviceId: 'AZA1234AZA',
      deviceName: 'Central Hall Display',
      deviceStatus: 'active',
      projectName: 'Pittsburg Slideshow',
      projectId: 123,
      installedAppVersion: '0.0.1',
      availableLatestAppVersion: '0.0.2',
      osVersion: '2.3',
      platform: 'LG',
      groupName: 'Device Group2',
      groupId: 234,
      createdDate: '2021-05-10T21:58:39.194Z', // date at which this device was added
      orientationType: 'POTRAIT', // can be "POTRAIT" , "LANDSCAPE"
      lastBeatReceivedOn: '2021-05-10T21:58:39.194Z',
      enabled: true, //    true if device is approved ,
      installationLocation: null,
    },
  ],
};

// Groups Response
export const groupDummyData = [
  {
    groupName: 'Group ABCD',
    numberOfDisplays: '20',
    createdAt: '24 Jun 17',
  },
  {
    groupName: 'Group ABCD',
    numberOfDisplays: '20',
    createdAt: '24 Jun 17',
  },
  {
    groupName: 'Group ABCD',
    numberOfDisplays: '20',
    createdAt: '24 Jun 17',
  },
  {
    groupName: 'Group ABCD',
    numberOfDisplays: '20',
    createdAt: '24 Jun 17',
  },
  {
    groupName: 'Group ABCD',
    numberOfDisplays: '20',
    createdAt: '24 Jun 17',
  },
  {
    groupName: 'Group ABCD',
    numberOfDisplays: '20',
    createdAt: '24 Jun 17',
  },
  {
    groupName: 'Group ABCD',
    numberOfDisplays: '20',
    createdAt: '24 Jun 17',
  },
];

// Media dummy response
export const mediaResponse = [
  {
    title: 'Pittsburgh Orchestra Content Video - 1',
    contentUrl:
      'https://i.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI',
    contentType: 'IMAGE',
    projects: [1, 2, 3],
    size: '2 MB',
  },
  {
    title: 'Pittsburgh Orchestra Content Video - 1',
    contentUrl:
      'https://i.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI',
    contentType: 'VIDEO',
    projects: [],
    size: '2 MB',
  },
  {
    title: 'Pittsburgh Orchestra Content Video - 1',
    contentUrl:
      'https://i.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI',
    contentType: 'VIDEO',
    projects: [1, 2, 3],
    size: '2 MB',
  },
  {
    title: 'Pittsburgh Orchestra Content Video - 1',
    contentUrl:
      'https://i.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI',
    contentType: 'VIDEO',
    projects: [1, 2, 3],
    size: '2 MB',
  },
  {
    title: 'Pittsburgh Orchestra Content Video - 1',
    contentUrl:
      'https://i.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI',
    contentType: 'VIDEO',
    projects: [],
    size: '2 MB',
  },
  {
    title: 'Pittsburgh Orchestra Content Video - 1',
    contentUrl:
      'https://i.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI',
    contentType: 'VIDEO',
    projects: [1, 3],
    size: '2 MB',
  },
  {
    title: 'Pittsburgh Orchestra Content Video - 1',
    contentUrl:
      'https://i.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI',
    contentType: 'IMAGE',
    projects: [],
    size: '2 MB',
  },

  {
    title: 'Pittsburgh Orchestra Content Video - 1',
    contentUrl: 'https://youtu.be/74849cA1VmE',
    contentType: 'VIDEO',
    projects: [1, 2, 3],
    size: '2 MB',
  },

  {
    title: 'Pittsburgh Orchestra Content Video - 1',
    contentUrl: 'https://youtu.be/74849cA1VmE',
    contentType: 'VIDEO',
    projects: [],
    size: '2 MB',
  },

  {
    title: 'Pittsburgh Orchestra Content Video - 1',
    contentUrl: 'https://youtu.be/74849cA1VmE',
    contentType: 'VIDEO',
    projects: [1, 2, 3],
    size: '2 MB',
  },

  {
    title: 'Pittsburgh Orchestra Content Video - 1',
    contentUrl: 'https://youtu.be/74849cA1VmE',
    contentType: 'VIDEO',
    projects: [1, 2, 3],
    size: '2 MB',
  },

  {
    title: 'Pittsburgh Orchestra Content Video - 1',
    contentUrl:
      'https://i.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI',
    contentType: 'IMAGE',
    projects: [],
    size: '2 MB',
  },

  {
    title: 'Pittsburgh Orchestra Content Video - 1',
    contentUrl: 'https://youtu.be/74849cA1VmE',
    contentType: 'VIDEO',
    projects: [1, 2, 3],
    size: '2 MB',
  },

  {
    title: 'Pittsburgh Orchestra Content Video - 1',
    contentUrl: 'https://youtu.be/74849cA1VmE',
    contentType: 'VIDEO',
    projects: [1, 2, 3],
    size: '2 MB',
  },

  {
    title: 'Pittsburgh Orchestra Content Video - 1',
    contentUrl: 'https://youtu.be/74849cA1VmE',
    contentType: 'VIDEO',
    projects: [1, 2, 3],
    size: '2 MB',
  },

  {
    title: 'Pittsburgh Orchestra Content Video - 1',
    contentUrl:
      'https://i.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI',
    contentType: 'IMAGE',
    projects: [1, 2, 3],
    size: '2 MB',
  },
];

export const clientDummyData = [
  {
    title: 'Shubham Kandharkar',
    description: 'www.sk.com',
    status: false,
  },
  {
    title: 'Shweta Kandharkar',
    description: 'www.sk.com',
    status: false,
  },
  {
    title: 'Meena Kandharkar',
    description: 'www.mk.com',
    status: true,
  },
  {
    title: 'Meena Kandharkar',
    description: 'www.mk.com',
    status: true,
  },
  {
    title: 'Meena Kandharkar',
    description: 'www.mk.com',
    status: true,
  },
  {
    title: 'Meena Kandharkar',
    description: 'www.mk.com',
    status: true,
  },
  {
    title: 'Meena Kandharkar',
    description: 'www.mk.com',
    status: true,
  },
];

export const dummyColumns = [
  {
    field: 'col1',
    headerName: 'Added by:',
    sortable: false,
    width: 290,
  },
  {
    field: 'col2',
    headerName: 'Added on:',
    sortable: false,
    width: 290,
  },
  {
    field: 'col3',
    headerName: 'Modified by:',
    sortable: false,
    width: 290,
  },
  {
    field: 'col4',
    headerName: 'Modified on:',
    sortable: false,
    width: 290,
  },
];

export const dummyRows = [
  {
    col1: 'Shubham Kandharkar',
    col2: '10 Dec 2020',
    col3: 'PQRST',
    col4: '17 Dec 2020',
    id: 1,
  },
  {
    col1: 'Shubham Kandharkar',
    col2: '10 Dec 2020',
    col3: 'PQRST',
    col4: '17 Dec 2020',
    id: 2,
  },
  {
    col1: 'Shubham Kandharkar',
    col2: '10 Dec 2020',
    col3: 'PQRST',
    col4: '17 Dec 2020',
    id: 3,
  },
];

export const dummyDeviceColumns = [
  {
    field: 'col1',
    headerName: 'COMMAND ID:',
    sortable: false,
    width: 200,
  },
  {
    field: 'col2',
    headerName: 'COMMAND NAME:',
    sortable: false,
    width: 300,
  },
  {
    field: 'col3',
    headerName: 'UPDATE TIME:',
    sortable: false,
    width: 230,
  },
  {
    field: 'col4',
    headerName: 'STATUS:',
    sortable: false,
    width: 230,
  },
  {
    field: 'col5',
    headerName: 'ATTEMPTS:',
    sortable: false,
    width: 200,
  },
];

export const dummyDeviceRows = [
  {
    col1: '1',
    col2: 'Restart Device',
    col3: new Date(),
    col4: 'PASSED',
    col5: '4',
    id: 1,
  },
  {
    col1: 'Shubham Kandharkar',
    col2: '10 Dec 2020',
    col3: 'PQRST',
    col4: '17 Dec 2020',
    col5: '4',
    id: 2,
  },
  {
    col1: 'Shubham Kandharkar',
    col2: '10 Dec 2020',
    col3: 'PQRST',
    col4: '17 Dec 2020',
    col5: '4',
    id: 3,
  },
];

export const dummyDeviceLogs = [
  {
    id: 2,
    deviceId: 'AXA1234AXA',
    deviceDateTimeOffset: '2017-01-14T14:56:49.000+00:00',
    logType: 'MSG',
    message: 'Update Device Details Sent Successfully',
  },
  {
    id: 1,
    deviceId: 'AXA1234AXA',
    deviceDateTimeOffset: '2017-01-13T14:56:49.000+00:00',
    logType: 'ERR',
    message: 'Update device details Server Error ,Bad Request',
  },
];
