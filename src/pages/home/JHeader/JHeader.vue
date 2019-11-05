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
      <li v-for="(item,index) in routes"  class="j-li">
        <a href="javascipt:void(0);" :class="{active : activeName == item.name }" :key="index" @click="handlerClick(item)">{{item.title}}</a>
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
                routes : this.$router.options.routes[0].children,
                activeName : this.$router.options.routes[0].children[0].name
            }
        },
        computed:{
        },
        methods:{
          handlerClick(item){
            this.$router.push({name : item.name});
            this.activeName = item.name;
          }
        }
    }
</script>

<style scoped>
@import "index.scss";
</style>
