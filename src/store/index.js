import Vuex from "vuex";
import Vue from "vue";


Vue.use(Vuex);

const state = {
  activePath:"",
  userInfo:null
}

const getters = {
  getToken :(state) => {
    if(!state.token){
      state.token = sessionStorage.getItem('token');
    }
    return state.token;
  },
  getUser :(state) => {
    if(!state.userInfo){
      state.userInfo = JSON.parse(sessionStorage.getItem('userInfo'))
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
    sessionStorage.setItem("token",token);
    state.token = token
  },
  setUser : (state,userInfo) => {
    sessionStorage.setItem("userInfo",JSON.stringify(userInfo));
    state.userInfo = userInfo
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
