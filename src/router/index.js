import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/index'

import JHome from '../pages/home/JHome'
import JMain from '../pages/home/JMain/JMain'
import About from '../pages/about/index'
import Manage from '../pages/manage/index'
import Article from '../pages/article/index'
import ArticleManage from "../pages/manage/articleList/index";
import UserManage from '../pages/manage/userList/index'
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
        {
          path : "manage",
          name : "Manage",
          meta : "管理",
          title : "管理",
          component : Manage,
          isAdmin : store.getters.isAdmin,
          children : [
            {
              path : "articleManage",
              name : "ArticleManage",
              meta : "文章列表",
              title : "文章列表",
              component : ArticleManage,
            },
            {
              path : "userManage",
              name : "UserManage",
              title : "用户列表",
              meta : "用户列表",
              component : UserManage,
            }
          ]
        },
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
