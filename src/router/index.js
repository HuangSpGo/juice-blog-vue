import Vue from 'vue'
import Router from 'vue-router'
import JHome from '@/pages/home/JHome'
import ArticleList from "../pages/blog/ArticleList/ArticleList";

// const path = require('path');
// const files = require.context('@',false,/ \.vue$/);
// const modules = {};
// files.keys().forEach(key => {
//   const name = path.basename(key,'.vue');
//   modules[name] = files(key).default || files(key);
// })


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'JHome',
      component: JHome,
      childList : [
        {
          path : '/articleList',
          name : 'ArticleList',
          component: ArticleList
        }
      ]
    }
  ]
})
