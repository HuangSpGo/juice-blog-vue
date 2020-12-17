import {baseApiUrl,$ajax} from './BaseApi';

const baseUrl = baseApiUrl + "/article";
const articleApi = {
  save(param){
    let url = baseUrl + "/save";
    return $ajax.post(url,param,{})
  },
  findAllArticleGroupByType(){
    let url = baseUrl + "/findAllArticleGroupByType";
    return $ajax.get(url,{});
  },
  loadById(id){
    let url = baseUrl + "/loadById/"+id;
    return $ajax.get(url,{});
  }
}
export {
  articleApi
}
