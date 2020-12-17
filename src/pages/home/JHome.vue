<template>
  <el-container class="home">
    <el-header height="50px" class="header">
      <j-header></j-header>
    </el-header>
    <el-main class="main">
      <router-view></router-view>
    </el-main>
    <el-backtop target=".main"></el-backtop>
  </el-container>
</template>

<script>
  import JHeader from "./JHeader/JHeader";
  import JMain from "./JMain/JMain";
  export default {
    name: "JHome",
    components: {JMain, JHeader},
    data(){
      return {
        date : new Date()
      }
    },
    mounted(){
    }
  }
</script>

<style scoped>
  @import "index.scss";

</style>
