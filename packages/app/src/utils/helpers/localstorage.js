import authService from 'utils/services/auth';

export const setAuthToken = (value) => {
  if (value !== undefined && value) {
    localStorage.setItem('x-auth', value);
    authService.defaults.headers = {
      'X-AuthToken': value,
    };
  }
};

export const getAuthToken = () => {
  return localStorage.getItem('x-auth') !== undefined && localStorage.getItem('x-auth')
    ? localStorage.getItem('x-auth')
    : null;
};
