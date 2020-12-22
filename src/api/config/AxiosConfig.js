import axios from 'axios';
import store from '../../store/index';
import {msgUtil} from '../../utils/MessageUtils'

/**
 * 配置axios请求拦截器
 */
axios.interceptors.request.use((config) => {
  //尝试获取token
  const token = store.getters.getToken;
  if(token){
    config.headers['Authorization'] = token;
  }
  return config;
})

axios.interceptors.response.use((res => {
  if(res.status == 200){
    const result = res.data;
    if(result.code == 401
      || result.code == 403
      || result.code == 500
      || result.code == 501){
      alert(result.msg);
    }
    res.data = result.data;
    return res;
  }else{
    return res;
  }
}))
