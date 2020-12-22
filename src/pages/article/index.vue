<template>
  <div style="padding:0px 100px;">
    <div style="width:100%;padding:10px 0px;background: white;margin: 3px 0;box-shadow: 0 1px 2px 0 rgba(0,0,0,.2);">
      <el-breadcrumb
        separator-class="el-icon-arrow-right"
        style="font-size: large;margin-left:20px;"
      >
        <el-breadcrumb-item style="font-weight: bold">文章</el-breadcrumb-item>
        <el-breadcrumb-item>{{article.title}}</el-breadcrumb-item>
      </el-breadcrumb>

    </div>
      <mavon-editor
        v-model="article.content"
        :editable="false"
        defaultOpen="preview"
        :toolbarsFlag="false"
        :subfield="false"
        style="min-height: 600px"
      >
      </mavon-editor>
    <j-reply :article-id="article.id"></j-reply>
  </div>

</template>

<script>
    import JReply from '../../components/JReply'
    import {articleApi} from '../../api/ArticleApi'

    export default {
        name: "Article",
        components : {JReply},
        data(){
          return {
            article : {
              id:"",
              content : ""
            }
          }
        },
        methods : {
          initData(){
            articleApi.loadById(this.article.id).then(res => {
              this.article = res.data;
            })
          }
        },
        mounted(){
          this.initData();
        },
        created(){
          this.article.id = this.$route.params.id;
        }
    }
</script>

<style scoped>

</style>
