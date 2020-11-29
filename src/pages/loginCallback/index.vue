<template>
  <div
      v-loading="loading"
      v-loading.fullscreen.lock="true"
      element-loading-text="拼命加载中"
      element-loading-spinner="el-icon-loading"
      element-loading-background="rgba(0, 0, 0, 0.8)"
    >
  </div>
</template>

<script>
    import {loginApi} from '../../api/LoginApi';
    import {userApi} from "../../api/UserApi";

    export default {
        name: "LoginCallback",
        data(){
          return {
            loading: false
          }
        },
        created() {
          const code = this.$route.query.code;
          const type = this.$route.query.type
          this.login(code,type)
        },
        methods:{
          login(code,type){
            this.loading = true;
            loginApi.login(type, code).then(res => {
              if(res.status == "200"){
                const token = res.data;
                this.$store.commit("setToken",token);
                this.setUserInfo(token);
              }else{
                alert("登录失败，跳转回首页");
                this.loading = false;
                this.$router.push("/");
              }
            })
          },
          setUserInfo(token){
            userApi.getUserInfo(token).then(res => {
              if(res.data){
                this.$store.commit("setUser",res.data);
              }else{
                alert("登录获取用户信息失败");
              }
              this.loading = false;
              this.$router.push("/");
            })
          }
        }
    }
</script>

<style scoped>

</style>
