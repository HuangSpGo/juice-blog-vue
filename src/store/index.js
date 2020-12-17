import Vuex from "vuex";
import Vue from "vue";
import Cookie from 'js-cookie';


Vue.use(Vuex);

const state = {
  activePath:"",
  userInfo:null,
  token:null
}

const getters = {
  getToken :(state) => {
    if(!state.token){
      state.token = Cookie.get("token");
    }
    return state.token;
  },
  getUser :(state) => {
    if(!state.userInfo){
      state.userInfo = Cookie.get("userInfo") ? JSON.parse(Cookie.get("userInfo")) : null;
    }
    return state.userInfo;
  },
  getUserAvatar : (state) => {
    return state.userInfo ? state.userInfo['avatarUrl'] : window.baseParam.default_avatar;
  },
  isLogin : (state) =>{
    return state.userInfo ? true : false;
  },
  isAdmin : (state) =>{
    if(state.userInfo)
      return state.userInfo.role == 2;
    return false;
  }
}

const mutations = {
  setToken : (state,token) => {
    Cookie.set("token",token);
    state.token = token
  },
  removeToken : (state) => {
    Cookie.remove("token");
    state.token = "";
  },
  setUser : (state,userInfo) => {
    Cookie.set("userInfo",userInfo);
    state.userInfo = userInfo
  },
  removeUser : (state) => {
    Cookie.remove("userInfo");
    state.userInfo = "";
  }

}

const actions = {
  setToken (context,token) {
    context.commit('setToken',token)
  },
  setUser (context,userInfo) {
    context.commit('setUser',userInfo)
  }
}


const store = new Vuex.Store({//store对象
  state:state,
  getters:getters,
  mutations : mutations,
  actions : actions
})

export default store
