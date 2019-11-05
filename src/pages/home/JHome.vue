<template>
    <el-container class="home">
      <el-header height="120px" class="header">
        <j-header></j-header>
      </el-header>
      <el-main class="main">
        <router-view></router-view>
      </el-main>
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
          console.log("JHome  ",this.$route.params)
        }
    }
</script>

<style scoped>
@import "index.scss";

</style>
