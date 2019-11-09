<template>
  <el-container class="j-main-container">
    <el-aside class="j-main-side" >
      <article-tree :treeData="treeData" @handlerClickNode="handlerClickTreeNode"></article-tree>
    </el-aside>
    <el-container style="height: 100%">
      <el-header height="50px" style="box-shadow: 0 1px 2px 0 rgba(0,0,0,.2);">
        <el-breadcrumb separator=">" style="font-size: 20px;padding:14px;">
          <el-breadcrumb-item v-for="(item,index) in breadcrumbData" :key="index">
            {{item}}
          </el-breadcrumb-item>
        </el-breadcrumb>
      </el-header>
      <el-scrollbar  style="height: 100%;width: 100%;">
        <article-list></article-list>
      </el-scrollbar>
    </el-container>
  </el-container>
</template>

<script>
    import ArticleTree from "../../components/blog/ArticleTree/ArticleTree";
    import ArticleList from "../../components/blog/ArticleList/ArticleList";

    export default {
        name: "BackEnd",
        components: {ArticleList, ArticleTree},
        data(){
          return {
              treeData: [{
                  label: 'JavaEE',
                  children: [{
                      label: '多线程',
                      children: [{
                          label: '锁的实现原理'
                      }]
                  }]
              }],
              breadcrumbData:["Java"],
              articleType:"Java"
          }
        },
        methods:{
            /**
             * 切换右侧文章列表
             * @param node
             */
            handlerClickTreeNode(data,node,nodeComp){
                //面包屑
                this.breadcrumbData = [];
                this.calculateBreadcrumbData(node);
                this.breadcrumbData.unshift("Java");
                //右侧文章列表

            },
            /**
             * 计算右侧面包屑
             * @param node
             */
            calculateBreadcrumbData(node){
              if(node.level != 1){
                this.breadcrumbData.unshift(node.data.label);
                this.calculateBreadcrumbData(node.parent);
              }else{
                this.breadcrumbData.unshift(node.data.label);
              }
            },
            changeArticleList(type){
                this.articleType = type;
            }
        },
        created() {
            //加载左侧树  数据
        }
    }
</script>

<style scoped>
  @import "index.scss";
</style>
