<template>
  <el-scrollbar  style="height: 100%;width: 100%;">
    <article-list></article-list>
  </el-scrollbar>
</template>

<script>
    import ArticleList from "../ArticleList/ArticleList";
    export default {
        name: "ArticleMain",
        components: {ArticleList}
    }
</script>

<style scoped>

</style>
