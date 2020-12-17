import {baseApiUrl,$ajax} from './BaseApi';

const baseUrl = baseApiUrl + "user";
const userApi = {
  getUserInfo(){
    let url = baseUrl + "/getUserInfo";
    return $ajax.get(url,{
    });
  }
}
export {userApi}
