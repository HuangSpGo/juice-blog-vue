import axios from 'axios'

const baseUrl = window.baseParam.baseApiUrl + "/articleType";
const articleTypeApi = {

  /**
   * 获取所有文章类型
   */
  findAll(){
    let url = baseUrl + "/findAll";
    return axios.get(url,{});
  },
  save(param){
    let url = baseUrl + "/save";
    return axios.post(url,param,{})
  }
}


export {
  articleTypeApi
}
