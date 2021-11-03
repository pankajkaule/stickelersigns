import { clientAdmin, superAdmin } from 'utils/permissions/dashboard';

export const hasBusinessSelectionAccess = ['ROLE_SUPERADMIN'];

// Role based dashboard mapping

const getListFromRole = (role, listToMap) => {
  switch (role) {
    case 'ROLE_ORG_ADMIN':
      return listToMap || clientAdmin;

    case 'ROLE_CLIENT_ADMIN':
      return listToMap || clientAdmin;

    case 'ROLE_CLIENT_EDITOR':
      return listToMap || clientAdmin;

    case 'ROLE_CLIENT_AUDITOR':
      return listToMap || clientAdmin;

    case 'ROLE_SUPERADMIN':
      return listToMap || superAdmin;

    default:
      return listToMap || clientAdmin;
  }
};
export const getDashboardFromRole = (list, listToMap, role) => {
  // list -> Component list
  // listToMap -> Permissions list to map against component list
  // role -> user role
  // finalList -> Store the actual component list to show
  let listToMapContainer = getListFromRole(role, listToMap);
  const finalList = [];
  listToMapContainer.forEach((el) => {
    list.forEach((item) => {
      if (el.trim().toLowerCase() === item.key.trim().toLowerCase()) {
        finalList.push(item);
      }
    });
  });
  return finalList;
};

export const getBusinessSelectionAccess = (roles) => {
  let hasAccess = false;
  if (roles && roles !== undefined && roles.length) {
    roles.forEach((el) => {
      if (hasBusinessSelectionAccess.includes(el.name)) {
        hasAccess = true;
      }
    });
  }
  return hasAccess;
};

export const getDeviceTabAccess = (roles) => {
  let hasAccess = false;
  if (roles && roles !== undefined && roles.length) {
    roles.forEach((el) => {
      if (hasBusinessSelectionAccess.includes(el.name)) {
        hasAccess = true;
      }
    });
  }
  return hasAccess;
};
