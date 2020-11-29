import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/index'

import JHome from '../pages/home/JHome'
import JMain from '../pages/home/JMain/JMain'
import About from '../pages/about/index'
import Article from '../pages/article/index'
import LoginCallback from '../pages/loginCallback/index'
import Java from '../pages/java/index'
import Web from '../pages/web/index'
import {userApi} from '../api/UserApi'

Vue.use(Router)

const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
}

const router = new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      name: 'JHome',
      component : JHome,
      redirect : "/main",
      children : [
        {
          path : "/main",
          name : "JMain",
          title : "首页",
          component : JMain
        },
        /*{
          path : "/java",
          name : "java",
          title : "Java",
          component : Java
        },
        {
          path : "/web",
          name : "web",
          title : "前端",
          component : Web
        },*/
        {
          path : "/about",
          name : "about",
          title : "关于",
          component : About
        },
        {
          path : "/post/:id",
          name : "post",
          component : Article
        }
      ]
    },
    {
      path: "/loginCallback",
      component: LoginCallback
    }
  ]
})



export default router
