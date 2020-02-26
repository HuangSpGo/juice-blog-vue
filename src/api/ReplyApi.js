import axios from 'axios'

const baseUrl = window.baseParam.baseApiUrl + "/reply";
const replyApi = {
  save(param){
    let url = baseUrl + "/save";
    return axios.post(url,param,{})
  },
  loadByArticleId(id){

  }
}
export {
  replyApi
}
