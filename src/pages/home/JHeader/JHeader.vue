<template>
  <div class="j-header">
    <h1 class="j-title">
      <a href="javascript:(0);"  @click="openLoginDialog">
        <el-dropdown size="medium" >
          <el-avatar
            :src="$store.getters.getUserAvatar"
            style="cursor:pointer"
            shape="square"
            fit="fill"
            class="el-dropdown-link"
            :title="$store.getters.isLogin ? user['userName'] : '请登录'"
            :size="48">
          </el-avatar>
          <el-dropdown-menu v-if="$store.getters.isLogin" slot="dropdown">
            <el-dropdown-item >{{user['userName']}}</el-dropdown-item>
            <el-dropdown-item >
              <span><el-button type="text" style="width: 100%" @click="handleLogout">退出</el-button></span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </a>
      <div class="j-text" style="margin-left:30px">Java Juice</div>
    </h1>
    <ul class="j-ul">
      <!--      <li class="j-li">
              <j-search></j-search>
            </li>-->
      <li v-for="(item,index) in routes"  class="j-li">
        <a v-if="item.name != 'Manage' & item.visible == true" href="javascript:void(0);" :class="{active : $store.state.activePath == item.path }" :key="index" @click="handleClick(item)">{{item.title}}</a>
      </li>
      <li class="j-li" v-if="$store.getters.isAdmin" >
        <el-button type="primary" @click="handleOpenDrawer" icon="el-icon-edit" style="margin:4px;"></el-button>
      </li>
    </ul>
    <j-drawer ref="drawer"></j-drawer>
    <el-dialog
      :visible.sync="$store.getters.loginDialogVisible"
      :modal="false"
      :before-close="closeLoginDialog"
      width="300px"
    >
      <span>当前仅支持Github登录，是否授权登录？</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="closeLoginDialog">取 消</el-button>
        <el-button type="primary" @click="handleLogin">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
  import JSearch from "../../../components/JSearch";
  import JDrawer from "../JDrawer/index";
  import store from "../../../store";


  export default {
    name: "JHeader",
    components: {JSearch,JDrawer},
    data:function () {
      return {
        routes: this.$router.options.routes[0].children,
        loginDialogVisible : this.$store.getters.loginDialogVisible
      }
    },
    computed:{
      user(){
        return this.$store.getters.getUser;
      }
    },
    methods:{
      /**
       * 点击头部导航条
       * @param item
       */
      handleClick(item){
        this.$router.push({name : item.name});
        this.$store.state.activePath = item.path;
      },
      handleOpenDrawer(){
        this.$refs.drawer.handleShowDrawer();
      },
      openLoginDialog(){
        if(!this.$store.getters.isLogin){
          this.$store.commit("setLoginDialogVisible",true);
        }
      },
      closeLoginDialog(){
        this.$store.commit('setLoginDialogVisible',false);
      },
      /**
       * 登录
       */
      handleLogin(){
        this.$loading({
          lock: true,
          text: '登录中',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)'
        });
        let url = "https://github.com/login/oauth/authorize?client_id=db812924f5cde0abec31"
        window.location = url;
      },
      handleLogout(){
        this.$confirm("是否确定退出？").then(() =>{
          this.$store.commit('removeToken');
          this.$store.commit('removeUser');
          this.$router.go(0);
        })
      }
    },
    created() {
      //获取路由中的第一层
      let path = this.$route.path;
      path = path.substr(1,path.length);
      path = path.indexOf("/") > 0 ? path.substr(0,path.indexOf("/")) : path;
      this.$store.state.activePath = "/" + path;
    }
  }
</script>

<style scoped>
  @import "index.scss";

</style>
