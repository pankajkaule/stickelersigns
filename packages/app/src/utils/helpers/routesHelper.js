export const getHeaderDetailsFromPath = (pathName) => {
  let finalList = [];
  let displays = {
    label: 'Displays',
    path: '/displays',
  };
  let dashboard = {
    label: 'XLIV',
    path: '/dashboard',
    color: 'secondary',
  };
  let deviceDetails = {
    label: 'Settings',
    path: '/displays/settings',
  };
  let deviceGroup = {
    label: 'Device Group',
    path: '/displays/groups',
  };
  let deviceGroupModify = {
    label: 'Add Device Group',
    path: '/displays/groups/add-edit',
  };
  let deviceAppUpdates = {
    label: 'Display App Updates',
    path: '/displays/app-updates',
  };
  let addNewDevice = {
    label: 'Add New Display',
    path: '/displays/add-new-display',
  };
  let media = {
    label: 'Media',
    path: '/media',
  };
  let projectDetails = {
    label: 'Projects',
    path: '/projects',
  };
  let projectCreation = {
    label: 'Create New Project',
    path: '/projects/new',
  };
  let clients = {
    label: 'Clients',
    path: '/clients',
  };
  let clientsNew = {
    label: 'Add New Client',
    path: '/clients/new',
  };
  let clientsEdit = {
    label: 'Edit Client',
    path: '/clients/edit',
  };
  let users = {
    label: 'Users',
    path: '/users',
  };
  let usersAdd = {
    label: 'Add New User',
    path: '/users/add',
  };

  let usersEdit = {
    label: 'Edit User',
    path: '/users/edit',
  };

  let manageAccount = {
    label: 'Manage Account',
    path: '/account/manageAccount',
  };

  switch (pathName) {
    case '/dashboard':
      finalList.push(dashboard);
      break;
    case '/displays':
      finalList.push(dashboard);
      finalList.push(displays);
      break;

    case '/displays/settings':
      finalList.push(dashboard);
      finalList.push(displays);
      finalList.push(deviceDetails);
      break;

    case '/displays/app-updates':
      finalList.push(dashboard);
      finalList.push(displays);
      finalList.push(deviceAppUpdates);
      break;

    case '/displays/groups':
      finalList.push(dashboard);
      finalList.push(displays);
      finalList.push(deviceGroup);
      break;

    case '/displays/groups/add-edit':
      finalList.push(dashboard);
      finalList.push(displays);
      finalList.push(deviceGroup);
      finalList.push(deviceGroupModify);
      break;

    case '/displays/add-new-display':
      finalList.push(dashboard);
      finalList.push(displays);
      finalList.push(addNewDevice);
      break;

    case '/media':
      finalList.push(dashboard);
      finalList.push(media);
      break;

    case '/projects':
      finalList.push(dashboard);
      finalList.push(projectDetails);
      break;

    case '/projects/new':
      finalList.push(dashboard);
      finalList.push(projectDetails);
      finalList.push(projectCreation);
      break;

    case '/clients':
      finalList.push(dashboard);
      finalList.push(clients);
      break;

    case '/clients/new':
      finalList.push(dashboard);
      finalList.push(clients);
      finalList.push(clientsNew);
      break;

    case '/clients/edit':
      finalList.push(dashboard);
      finalList.push(clients);
      finalList.push(clientsEdit);
      break;

    case '/users':
      finalList.push(dashboard);
      finalList.push(users);
      break;

    case '/users/add':
      finalList.push(dashboard);
      finalList.push(users);
      finalList.push(usersAdd);
      break;

    case '/users/edit':
      finalList.push(dashboard);
      finalList.push(users);
      finalList.push(usersEdit);
      break;

    case '/account/manageAccount':
      finalList.push(dashboard);
      finalList.push(manageAccount);
      break;

    default:
      finalList.push(dashboard);
      break;
  }
  return finalList;
};
