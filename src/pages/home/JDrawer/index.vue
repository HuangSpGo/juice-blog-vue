<template>
  <el-drawer
    :visible.sync="isShowDrawer"
    :before-close="handlerBeforeCloseDrawer"
    size="85%"
    :show-close="false"
    ref="articleDrawer"
    :with-header="false"
    :append-to-body="true"
  >
    <el-form
      ref="articleForm"
      :inline="true"
      :model="articleForm"
      :rules="articleRule">
      <el-form-item label="文章标题：" style="margin-left:30px;" prop="title">
          <el-input v-model="articleForm.title" style="width: 400px;" placeholder="请填写文章标题"></el-input>
      </el-form-item>
      <el-form-item label="文章类型：" style="margin-left:30px;" prop="type">
        <el-select v-model="articleForm.type" placeholder="请选择">
          <el-option
            v-for="item in articleTypes"
            :key="item.id"
            :label="item.name"
            :value="item.id">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button title="添加文章类型" icon="el-icon-circle-plus-outline" circle></el-button>
      </el-form-item>
    </el-form>
    <mavon-editor style="height: 80%;max-height: 650px;"
                  v-model="articleForm.content"
                  ref="md"
                  @imgAdd="handleImgUpload"
                  @imgDel="handleImgDelete"
    >
    </mavon-editor>
    <el-row width="100%" style="text-align: center;margin-top: 10px">
      <el-col>
        <el-button @click="handleCloseDrawer" round>取消</el-button>
        <el-button @click="handleSaveArticle" type="primary" round>保存</el-button>
      </el-col>
    </el-row>
  </el-drawer>
</template>

<script>
    import {fileApi} from '../../../api/FileOperatorApi'
    import {articleTypeApi} from '../../../api/ArticleTypeApi'
    import {articleApi} from '../../../api/ArticleApi'

    export default {
        name: "JDrawer",
        inject : ['reload'],
        props : {
          /*isShowDrawer : {
            type : Boolean,
            default : false
          }*/
        },
        data(){
          return {
            isShowDrawer : false,
            articleForm: {
              title : "",
              type : "",
              content : "",
            },
            articleTypes: [],
            articleRule: {
              title: [
                {required: true, message: '请填写文章标题！', trigger: 'blur'}
              ],
              type: [
                {required: true, message: '请选择文章类型！', trigger: 'blur'}
              ]
            },
            uploadFiles : {}
          }
        },
        methods : {
          handleShowDrawer(){
            this.isShowDrawer = true;
          },
          handlerBeforeCloseDrawer(done){
            let the = this;
            done()
            /*the.$confirm("是否保存为草稿？","提示")
               .then(() => {



               })
               .catch(() => {
                 done();
               });*/
          },
          handleCloseDrawer(){
            let the = this;
            the.$refs.articleDrawer.closeDrawer();
          },
          handleSaveArticle(){
            let the = this;
            if(the.articleForm.content == ""){
              the.$message.error("请填写文章内容！");
              return;
            }
            the.$refs.articleForm.validate((valid) => {
              if(valid){
                articleApi.save(the.articleForm).then(res => {
                  console.log("",res)
                  if(res.status == "200"){
                    the.$message.success("保存成功");
                    the.reload();
                    the.resetForm();
                    the.$refs.articleDrawer.closeDrawer()

                  }else{
                    the.$message.error("保存失败！");
                  }
                })
              }
            })
          },
          handleImgUpload(pos,file){
            let the = this;
            let fileList = [];
            fileList.push(file);
            fileApi.fileUpload(fileList).then(res => {
              let fileItemList = res.data;
              for (let i = 0; i < fileItemList.length; i++){
                let fileItem = fileItemList[i];
                let fileItemUrl = fileItem.fileUrl;
                the.$refs.md.$img2Url(pos, fileItemUrl);
                the.uploadFiles[fileItemUrl] = fileItem;
              }
            })
          },
          handleImgDelete(pos){
            let the = this;
            let uploadFile = the.uploadFiles[pos[0]];
            let fileIds = [];
            fileIds.push(uploadFile['fileId']);
            fileApi.deleteFiles(fileIds)
          },
          handleFindArticleTypeList(){
            articleTypeApi.findAll().then(res => {
              this.articleTypes = res.data;
            })
          },
          resetForm(){
            let the = this;
            the.$refs.articleForm.resetFields();
            the.articleForm.content = "";
          }
        },
        created(){
          this.handleFindArticleTypeList();
        }
    }
</script>

<style scoped>

</style>
