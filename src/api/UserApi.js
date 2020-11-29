import axios from 'axios'

const baseUrl = window.baseParam.baseApiUrl + "user";
const userApi = {
  getUserInfo(token){
    let url = baseUrl + "/getUserInfo";
    return axios.get(url,{
      headers : {
        Authorization : token
      }
    });
  }
}
export {userApi}
