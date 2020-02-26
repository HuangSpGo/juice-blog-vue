import axios from 'axios'

const baseUrl = window.baseParam.baseApiUrl + "/article";
const articleApi = {
  save(param){
    let url = baseUrl + "/save";
    return axios.post(url,param,{})
  },
  findAllArticleGroupByType(){
    let url = baseUrl + "/findAllArticleGroupByType";
    return axios.get(url,{});
  },
  loadById(id){
    let url = baseUrl + "/loadById/"+id;
    return axios.get(url,{});
  }
}
export {
  articleApi
}
