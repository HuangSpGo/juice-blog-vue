<template>
  <el-container class="j-main-container">
    <el-aside class="j-main-side" >
      <article-tree></article-tree>
    </el-aside>

    <el-container style="height: 100%">
      <article-main></article-main>
    </el-container>
  </el-container>
</template>

<script>
    import ArticleTree from "../../blog/ArticleTree/ArticleTree";
    import ArticleMain from "../../blog/ArticleMain/ArticleMain";
    export default {
        name: "JMain",
        components: {ArticleMain, ArticleTree},
        data(){
            return {

            }
        },
        methods:{

        }
    }
</script>

<style scoped>
@import "index.scss";
</style>
