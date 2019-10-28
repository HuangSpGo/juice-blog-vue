<template>
    <el-container class="home">
      <el-header height="120px" class="header">
        <j-header></j-header>
      </el-header>
      <el-main class="main">
        <j-main></j-main>
      </el-main>
    <!--  <el-footer style="height:40px;box-shadow: 0 1px 2px 0 rgba(0,0,0,.2);">
        {{date}}
      </el-footer>-->
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
        }
    }
</script>

<style scoped>
@import "index.scss";

</style>
