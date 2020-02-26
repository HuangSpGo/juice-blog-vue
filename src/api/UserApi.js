import axios from 'axios'
axios.defaults.withCredentials = true;// 允许跨域携带cookie

const baseUrl = window.baseParam.baseApiUrl ;
const userApi = {
  getUserInfo(){
    let url = baseUrl + "/login/getUserInfo";
    return axios.get(url,{});
  },
  getAuthUrl(){
    let url = baseUrl + "/oauth/getAuthUrl";
    return axios.get(url,{});
  }
}
export {userApi}
