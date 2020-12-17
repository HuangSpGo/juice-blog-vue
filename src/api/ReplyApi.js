import axios from 'axios'

const baseUrl = window.baseParam.baseApiUrl + "/article/";
const replyApi = {
  save(param){
    let url = baseUrl + "/reply/save";
    return axios.post(url,param,{})
  },
  findReplyListByArticleId(articleId){
    let url = baseUrl + "findReplyListByArticleId/"+articleId;
    return axios.get(url,{})
  }
}
export {
  replyApi
}
