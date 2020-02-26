<template>
    <div>
      <el-form
        :inline="true"
        :model="articleForm">
        <el-form-item label="文章标题：" style="margin-left:30px;">
          <el-input v-model="articleForm.title" placeholder="请填写文章标题"></el-input>
        </el-form-item>
        <el-form-item label="文章类型：" style="margin-left:30px;">

        </el-form-item>
      </el-form>
      <mavon-editor style="height: 500px;max-height: 500px;"
                    @save="handleSaveArticle"
      >
      </mavon-editor>
      <el-row width="100%" style="text-align: center;margin-top: 10px">
        <el-col>
          <el-button @click="handleCloseDrawer" round>取消</el-button>
          <el-button type="primary" round>保存</el-button>
        </el-col>
      </el-row>
    </div>
</template>

<script>
    export default {
        name: "JMavonEditor",
        data:function () {
          return {
            articleForm : {
              title : "",
              type : ""
            }
          }
        },
        methods : {
          handleSaveArticle(value,render){
            console.log("value = ",value)
            console.log("render = ",render)
          },
          handlerBeforeCloseDrawer(done){
            let the = this;
            the.$confirm("是否保存为草稿？","提示")
              .then(() => {



              })
              .catch(() => {
                done();
              });
          },
        }
    }
</script>

