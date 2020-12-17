<template>
  <el-container class="j-main-container">
    <el-container style="height: 100%;width: 100%;display: block;">
      <el-row v-for="(articleList,articleType) in articleMap" class="j-row" :gutter="24" >
        <el-col :span="24">
          <el-card shadow="hover">
            <div slot="header" class="clear-fix">
              <span style="font-weight: bold">{{getArticleType(articleType)}}</span>
            </div>
            <li v-for="article in articleList" :key="article.id" class="title">
              <a  href="javascript:(0);" @click="openArticleDetail(article.id)" >{{ article.title }}</a>
            </li>
          </el-card>
        </el-col>
      </el-row>
      <el-divider></el-divider>
      <j-reply articleId="homePage"></j-reply>
    </el-container>
  </el-container>
</template>

<script>
    import ArticleTree from "../../../components/blog/ArticleTree/ArticleTree";
    import JReply from '../../../components/JReply'
    import JGitalk from '../../../components/JGitalk'
    import {articleApi} from '../../../api/ArticleApi'
    import {articleTypeApi} from '../../../api/ArticleTypeApi'

    export default {
        name: "JMain",
        components: {ArticleTree,JReply,JGitalk},
        data(){
            return {
              articleMap : [],
              articleTypeList : []
            }
        },
        methods:{
          openArticleDetail(id){
            this.$router.push({path : `/post/${id}`});
            this.$store.state.activePath = "";
          },
          findAllType(){
            articleTypeApi.findAll().then(res => {
              this.articleTypeList = res.data;
              this.findArticleList();
            })
          },
          findArticleList(){
            articleApi.findAllArticleGroupByType().then(res => {
              this.articleMap = res.data;
            });
          },
          getArticleType(typeId){
            let typeName = typeId;
            this.articleTypeList.forEach(type => {
              if(type.id == typeId){
                typeName =  type.name;
              }
            })
            return typeName;
          },
          initData(){
            this.findAllType();
          }
        },
        mounted(){
          this.initData();
        },
        created(){
        }
    }
</script>

<style scoped>
@import "index.scss";
</style>
