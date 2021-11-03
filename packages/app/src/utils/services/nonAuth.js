import axios from 'axios';
import { baseUrl } from 'constants/constants';

const nonAuthService = axios.create({
  baseURL: baseUrl,
});

export default nonAuthService;
