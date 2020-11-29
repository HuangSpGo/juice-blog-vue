import axios from 'axios'

const baseUrl = window.baseParam.baseApiUrl + "/reply";
const replyApi = {
  save(param){
    let url = baseUrl + "/save";
    return axios.post(url,param,{
      headers : {
        "Content-Type" : "application/json"
      }
    })
  },
  loadByArticleId(articleId){
    let url = baseUrl + "/findReplyListByArticleId/" + articleId;
    return axios.get(url,{});
  }
}
export {
  replyApi
}
