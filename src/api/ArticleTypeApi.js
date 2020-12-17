import {baseApiUrl,$ajax} from './BaseApi';

const baseUrl = baseApiUrl + "/articleType";
const articleTypeApi = {
  /**
   * 获取所有文章类型
   */
  findAll(){
    let url = baseUrl + "/findAll";
    return $ajax.get(url,{});
  },
  save(param){
    let url = baseUrl + "/save";
    return $ajax.post(url,param,{})
  }
}


export {
  articleTypeApi
}
