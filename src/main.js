// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
//引入store
import store from './store/index'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'gitalk/dist/gitalk.css'
import Gitalk from 'gitalk'

//引入mavon-editor  markdown编辑器
import mavonEdit from 'mavon-editor'
import emoji from 'markdown-it-emoji'
import 'mavon-editor/dist/css/index.css'
import {userApi} from "./api/UserApi";



Vue.config.productionTip = false

Vue.use(ElementUI);
mavonEdit.markdownIt.use(emoji,[]);
Vue.use(mavonEdit);



router.beforeEach((to, from, next) => {
  const userInfo = store.getters.getUser;
  const token = store.getters.getToken;
  if(!userInfo && token){
    userApi.getUserInfo(token).then(res => {
      if(res.data){
        store.dispatch("setUser",res.data)
      }
      next();
    }).catch(res => {
      next();
    })
  }else{
    next();
  }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
