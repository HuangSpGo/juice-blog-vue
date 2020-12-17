import {baseApiUrl,$ajax} from './BaseApi';

const baseUrl = baseApiUrl + "login";
const loginApi = {
  login(type,code){
    let url = baseUrl + "/oauth";
    let param = {
      type : type,
      code: code
    }
    return $ajax.post(url,param,{})
  }
}
export {
  loginApi
}
