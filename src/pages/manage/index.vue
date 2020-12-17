<template>
  <el-container class="home">
    <el-aside width="220px" >
      <el-menu
        class="el-menu-vertical-demo"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        @select="selectMenu"
      >
        <JMenu :menus="menus" ></JMenu>
      </el-menu>
    </el-aside>
    <el-main style="text-align: left">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item v-for="(item,index) in breadcrumbList" :key="index"></el-breadcrumb-item>
      </el-breadcrumb>
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script>
    import JMenu from '../../components/JMenu'

    export default {
        name: "Manage",
        components : {JMenu},
        data(){
          return {
            activeIndex : "",
            breadcrumbList : [],
            menus: [
            {
              name : "article",
              title : "文章管理",
              children : [
                {
                  name : "ArticleManage",
                  title : "文章列表",
                },
                {
                  name : "UserManage",
                  title : "用户列表",
                },
              ]
            }
          ],
          }
        },
        methods : {
          selectMenu(item){
            console.log("",this.$router.currentRoute)
          }
        }
    }
</script>

<style scoped>
  @import "index.scss";

</style>
