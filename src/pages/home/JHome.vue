<template>
  <el-container class="home">
      <el-header height="50px" class="header">
        <j-header></j-header>
      </el-header>
      <el-main class="main">
        <router-view></router-view>
      </el-main>
      <el-backtop target=".main"></el-backtop>
      <el-dialog
        :visible.sync="loginDialogVisible"
        :modal=true
        :append-to-body=true
        width="300px"
      >
        <span>当前仅支持Github登录，是否授权登录？</span>
        <span slot="footer" class="dialog-footer">
          <el-button @click="loginDialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="handleLogin">确 定</el-button>
        </span>
      </el-dialog>
  </el-container>
</template>

<script>
    import JHeader from "./JHeader/JHeader";
    import JMain from "./JMain/JMain";
    export default {
        name: "JHome",
        components: {JMain, JHeader},
        provide (){
          return {
            'openLoginDialog': this.openLoginDialog
          }
        },
        data(){
            return {
                 date : new Date(),
                 loginDialogVisible : false
            }
        },
        methods : {
          openLoginDialog(){
            if(!this.$store.getters.isLogin){
              this.loginDialogVisible = true;
            }
          },
          handleLogin(){
            this.$loading({
              lock: true,
              text: '登录中',
              spinner: 'el-icon-loading',
              background: 'rgba(0, 0, 0, 0.7)'
            });
            let url = "https://github.com/login/oauth/authorize?client_id=db812924f5cde0abec31&redirect_uri=http://localhost:8099/blog/oauth/github/callback"
            window.location = url;
          },
        },
        mounted(){
        }
    }
</script>

<style scoped>
@import "index.scss";

</style>
