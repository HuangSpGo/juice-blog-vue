<template>
  <div class="j-header">
    <h1 class="j-title">
      <img style="height: 119px;" src="../../../assets/image/logo.jpg">
      <div class="j-text">Juice博客</div>
    </h1>
    <ul class="j-ul">
      <li class="j-li">
        <j-search></j-search>
      </li>
      <li v-for="item in liList" class="j-li">
        <a href="javascipt:void(0);" :class="{active : activeName == item.name}" @click="handlerClick(item)">{{item.name}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
    import JSearch from "../../../components/JSearch";
    export default {
        name: "JHeader",
        components: {JSearch},
        data:function () {
            return {
                liList:[
                    {
                        name : "首页",
                        url : "Home"
                    },
                    {
                        name : "Java",
                        url : "Java"
                    },
                    {
                        name : "前端",
                        url : "前端"
                    },
                    {
                        name : "关于",
                        url : "关于"
                    }
                ],
                activeName:""
            }
        },
        computed:{
        },
        methods:{
          handlerClick(item){
            let name = item.name;
            let url = item.url;
            this.activeName = name;
          }
        }
    }
</script>

<style scoped>
@import "index.scss";
</style>
