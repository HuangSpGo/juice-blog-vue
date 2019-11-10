import Vue from 'vue'
import Router from 'vue-router'

import JHome from '../pages/home/JHome'
import JMain from '../pages/home/JMain/JMain'
import About from '../pages/about/index'
import Java from '../pages/java/index'
import Web from '../pages/web/index'

Vue.use(Router)

const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
}


export default new Router({
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
        },
        {
          path : "/about",
          name : "about",
          title : "About",
          component : About
        }
      ]
    }
  ]
})
