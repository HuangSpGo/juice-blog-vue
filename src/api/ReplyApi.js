import {baseApiUrl,$ajax,qs} from './BaseApi';

const baseUrl = baseApiUrl + "/reply";
const replyApi = {
  save(param){
    let url = baseUrl + "/save";

    return $ajax.post(url,param,{
      headers : {
        'Content-Type': 'application/json;charset=UTF-8'
      }
    })
  },
  loadByArticleId(articleId){
    let url = baseUrl + "/findReplyListByArticleId/" + articleId;
    return $ajax.get(url,{});
  }
}
export {
  replyApi
}
