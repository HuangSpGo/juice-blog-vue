import axios from 'axios'

const baseUrl = window.baseParam.baseApiUrl + "login";
const loginApi = {
  login(type,code){
    let url = baseUrl + "/oauth";
    let param = {
      type : type,
      code: code
    }
    return axios.post(url,param,{})
  }
}
export {
  loginApi
}
