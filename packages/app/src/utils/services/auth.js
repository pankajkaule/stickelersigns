import axios from 'axios';
import { baseUrl } from 'constants/constants';

import { getAuthToken } from '../helpers/localstorage';

const authService = axios.create({
  baseURL: baseUrl,
  headers: {
    'X-AuthToken': `${getAuthToken()}`,
  },
});

export default authService;
