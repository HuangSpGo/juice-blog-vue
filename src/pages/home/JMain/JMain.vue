<template>
  <el-container class="j-main-container">
   <!-- <el-aside class="j-main-side" >
      <article-tree></article-tree>
    </el-aside>-->
    <el-container style="height: 100%;width: 100%;display: block;">
      <el-row style="width: 100%;margin-bottom: 20px;" :gutter="12" >
        <el-col :span="12">
          <el-card shadow="hover">
            鼠标悬浮时显示
          </el-card>
        </el-col>
        <el-col :span="12">
          <el-card shadow="hover">
            鼠标悬浮时显示
          </el-card>
        </el-col>
      </el-row>
      <el-row style="width: 100%;height:100px;" :gutter="12" >
        <el-col :span="12">
          <el-card shadow="hover">
            鼠标悬浮时显示
          </el-card>
        </el-col>
        <el-col :span="12">
          <el-card shadow="hover">
            鼠标悬浮时显示
          </el-card>
        </el-col>
      </el-row>
    </el-container>
  </el-container>
</template>

<script>
    import ArticleTree from "../../../components/blog/ArticleTree/ArticleTree";
    export default {
        name: "JMain",
        components: {ArticleTree},
        data(){
            return {

            }
        },
        methods:{

        },
        mounted(){
        }
    }
</script>

<style scoped>
@import "index.scss";
</style>
