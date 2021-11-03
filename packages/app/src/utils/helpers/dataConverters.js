// Method to convert clients data to clients cards format.
export const convertIntoClientsCardsFormat = (data) => {
  let finalData = [];
  data.forEach((el) => {
    finalData.push({
      title: el.name,
      description: el.websiteUrl || el.email,
      status: el.active && !el.deleted ? 'ACTIVE' : '',
      logo: `data:image/jpeg;base64,${el.photo}`,
      redirectionId: el.id,
    });
  });
  return finalData;
};

export const convertIntoPhoneFormat = (phone) => {
  return `+91-${phone.slice(0, 4)} ${phone.slice(4, 10)}`;
};

export const convertIntoBase64Image = (src) => {
  return src ? `data:image/jpeg;base64,${src}` : '';
};

export const convertIntoUsersCardsFormat = (data) => {
  let finalData = [];
  data.forEach((el) => {
    finalData.push({
      title: `${el.firstName} ${el.lastName}` || el.userName,
      description: el.roles[0].displayName,
      status: el.active && !el.deleted ? 'ACTIVE' : '',
      logo: convertIntoBase64Image(el.photo),
      redirectionId: el.id,
    });
  });
  return finalData;
};

export const getRolesFromRoleValue = (roles, roleValue) => {
  let finalRole = [];
  roles.forEach((el) => {
    if (el.value === roleValue) {
      finalRole.push({
        displayName: el.label,
        name: el.value,
      });
    }
  });
  return finalRole;
};

export const convertRolesIntoDropDown = (roles) => {
  let finalRole = [];
  if (roles && roles !== undefined && roles.length) {
    roles.forEach((el) => {
      finalRole.push({
        label: el.displayName,
        value: el.name,
      });
    });
  }
  return finalRole;
};

export const convertIntoClientsDropDown = (clients, includeAll = true) => {
  let finalArray = [];
  if (includeAll) {
    finalArray.push({ value: '', label: 'All' });
  }
  clients.forEach((el) => {
    finalArray.push({
      label: el.name,
      value: el.id,
    });
  });
  return finalArray;
};

// Method to convert into device group filter format
export const convertIntoDeviceGroupDropDown = (
  group,
  valueKey = 'deviceGroupName',
  labelKey = 'deviceGroupName',
) => {
  if (group !== undefined && group && group.length) {
    let finalArray = [];
    group.forEach((el) => {
      finalArray.push({
        label: el[labelKey],
        value: el[valueKey],
      });
    });
    return finalArray;
  }
};

// Convert into execution status table
export const convertIntoExecutionStatusTable = (executionList) => {
  const finalArray = [];
  executionList.forEach((el, i) => {
    finalArray.push({
      col1: el.deviceCommandId,
      col2: el.command,
      col3: el.lastExecuteDateTime,
      col4: el.executeStatus,
      col5: el.executeAttempts,
      id: i,
    });
  });
  return finalArray;
};
