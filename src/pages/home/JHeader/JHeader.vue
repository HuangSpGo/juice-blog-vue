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
        <a href="javascipt:void(0);" :class="{active : activePath == item.path }" :key="index" @click="handlerClick(item)">{{item.title}}</a>
      </li>
      <li class="j-li">
        <el-button type="primary" @click="drawer = true" icon="el-icon-edit" circle></el-button>
      </li>
    </ul>
    <el-drawer
      :visible.sync="drawer"
      :before-close="handlerBeforeCloseDrawer"
      size="80%"
      title="新建Blog标题"
      :show-close="false">
      <el-form
        :inline="true"
        :model="articleForm">
        <el-form-item label="文章标题：" style="margin-left:30px;">
          <el-input v-model="articleForm.title" placeholder="请填写文章标题"></el-input>
        </el-form-item>
        <el-form-item label="文章类型：" style="margin-left:30px;">

        </el-form-item>
      </el-form>
      <mavon-editor style="height: 500px"></mavon-editor>
      <el-row width="100%" style="text-align: center;margin-top: 10px">
        <el-col>
          <el-button round>取消</el-button>
          <el-button type="primary" round>保存</el-button>
        </el-col>
      </el-row>
    </el-drawer>
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
                activePath : "",
                drawer : false,
                articleForm : {
                  title : "",
                  type : ""
                }
            }
        },
        computed:{
        },
        methods:{
          handlerClick(item){
            this.$router.push({name : item.name});
            this.activePath = item.path;
          },
          handlerBeforeCloseDrawer(done){
            this.$message("关闭抽屉前");
            done();
          }
        },
        created() {
          //获取路由中的第一层
          let path = this.$route.path;
          path = path.substr(1,path.length);
          path = path.indexOf("/") > 0 ? path.substr(0,path.indexOf("/")) : path;
          this.activePath = "/" + path;
        }
    }
</script>

<style scoped>
@import "index.scss";

</style>
