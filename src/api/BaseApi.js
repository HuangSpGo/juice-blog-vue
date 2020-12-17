//引入axios
import axios from 'axios';
import AxiosConfig from './config/AxiosConfig';
import qs from 'qs';

const baseApiUrl = window.baseParam.baseApiUrl;
const $ajax = axios;

export {
  baseApiUrl,
  $ajax,
  qs
}


