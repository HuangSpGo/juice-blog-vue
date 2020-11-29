<template>
      <el-row style="text-align: left" class="j-row" :gutter="24">
        <el-col :span="24">
          <el-card shadow="hover">
            <div slot="header" class="clear-fix">
              <span style="font-weight: bold">留言区</span>
            </div>
            <div class="root-reply box-reply">
              <el-avatar
                :src="avatar"
                shape="square"
                fit="fill"
                class="el-dropdown-link avatar"
                :size="90">
              </el-avatar>
              <div class="edit-mode">
                <div>
                  <!--<el-input resize="none" type="textarea" :rows="4"></el-input>-->
                  <el-form ref="articleForm">
                      <mavon-editor
                      style="height: 100px;min-height: 100px;"
                      :subfield="false"
                      :toolbarsFlag="false"
                      :shortCut="false"
                      placeholder="欢迎留言......"
                      v-model="replyArticleForm.replyContent"
                      ref="replyMd"
                    >
                    </mavon-editor>
                  </el-form>
                </div>
                <div>
                  <el-button class="reply-button" type="primary" @click="handleReplyArticle">回复</el-button>
                  <el-button class="reply-button" type="primary" @click="handlePreview">预览</el-button>
                </div>
              </div>
            </div>
            <div class="root-reply box-reply replyList">
              <el-row v-for="firstReply in firstReplyList" :key="firstReply.id">
                <el-row>
                  <el-avatar
                    :src="firstReply['fromUserAvatar']"
                    fit="fill"
                    class="el-dropdown-link avatar"
                    style="margin:10px"
                    :size="60">
                  </el-avatar>
                  <div class="detail-mode">
                    <div>
                      <span style="color: inherit;font-weight: 900;">{{firstReply['fromUser']}}</span>
                      <span style="margin-left:20px;font-size:small;opacity:0.9;">{{firstReply['replyTime']}}</span>
                    </div>
                    <div>
                      <span>{{firstReply['replyContent']}}</span>
                    </div>
                    <div class="reply-button">
                      <el-button class="reply-button" size="mini" type="primary" @click="handleReply">回复</el-button>
                    </div>
                  </div>
                </el-row>
                <el-row v-for="secondReply in firstReply['secondReplyList']">
                  <el-avatar
                    :src="secondReply['fromUserAvatar']"
                    fit="fill"
                    class="el-dropdown-link avatar"
                    style="margin:10px 10px 10px 80px"
                    :size="60">
                  </el-avatar>
                  <div class="detail-mode" style="width: 83%;">
                    <div>
                      <span style="color: inherit;font-weight: 900;">{{secondReply['fromUser']}}</span>
                      <i class="el-icon-caret-right" style="margin:0px 10px"></i>
                      <span style="color: inherit;font-weight: 900;">{{secondReply['toUser']}}</span>
                      <span style="margin-left:20px;font-size:small;opacity:0.9;">{{secondReply['replyTime']}}</span>
                    </div>
                    <div>
                      <span >{{secondReply['replyContent']}}</span>
                    </div>
                    <div class="reply-button">
                      <el-button class="reply-button" size="mini" type="primary" @click="handleReply(secondReply)">回复</el-button>
                    </div>
                    <div v-if="replyUserForm.replyId == secondReply['id']">
                      <el-form ref="articleForm">
                        <mavon-editor
                          style="height: 100px;min-height: 100px;"
                          :subfield="false"
                          :toolbarsFlag="false"
                          :shortCut="false"
                          placeholder="欢迎留言......"
                          v-model="replyUserForm.replyContent"
                          ref="replyMd"
                        >
                        </mavon-editor>
                      </el-form>
                    </div>
                  </div>
                </el-row>
                <el-divider></el-divider>
              </el-row>
            </div>
          </el-card>
        </el-col>
      </el-row>
</template>

<script>
  import {replyApi} from '../api/ReplyApi'

    export default {
        name: "JReply",
        props:{
          articleId : ""
        },
        data:function () {
          return {
            avatar: this.$store.getters.getUserAvatar,
            replyArticleForm : {
              fromUser : "",
              fromUserAvatar : this.$store.getters.getUserAvatar,
              articleId : this.articleId,
              replyContent : "",
            },
            replyUserForm : {
              replyId : "",
              fromUser : "",
              fromUserAvatar : this.$store.getters.getUserAvatar,
              articleId : this.articleId,
              toUser : "",
              replyContent : "",
            },
            firstReplyList : [
              {
                id : "1",
                fromUser : "Juice",//评论者
                fromUserAvatar : "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
                toUser : "",//被评论者
                replyTime : "5分钟前",//评论时间
                articleId : "",//回复的文章id
                replyContent : "写得真棒哈哈哈哈哈",//回复内容
                secondReplyList : [
                  {
                    id : "2",
                    fromUser : "Coco",//评论者
                    fromUserAvatar : "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
                    toUser : "Juice",//被评论者
                    replyTime : "4分钟前",//评论时间
                    articleId : "",//回复的文章id
                    replyContent : "谢谢！！！！",//回复内容
                  },
                  {
                    id : "3",
                    fromUser : "Juice",//评论者
                    fromUserAvatar : "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
                    toUser : "Coco",//被评论者
                    replyTime : "3分钟前",//评论时间
                    articleId : "",//回复的文章id
                    replyContent : "不用客气",//回复内容
                  }
                ]
              },
              {
                id : "4",
                fromUser : "Juice",//评论者
                fromUserAvatar : "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
                toUser : "",//被评论者
                replyTime : "5分钟前",//评论时间
                articleId : "",//回复的文章id
                replyContent : "写得真棒哈哈哈哈哈",//回复内容
                secondReplyList : [
                  {
                    id : "5",
                    fromUser : "Coco",//评论者
                    fromUserAvatar : "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
                    toUser : "Juice",//被评论者
                    replyTime : "4分钟前",//评论时间
                    articleId : "",//回复的文章id
                    replyContent : "谢谢！！！！",//回复内容
                  },
                  {
                    id : "6",
                    fromUser : "Juice",//评论者
                    fromUserAvatar : "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
                    toUser : "Coco",//被评论者
                    replyTime : "3分钟前",//评论时间
                    articleId : "",//回复的文章id
                    replyContent : "不用客气",//回复内容
                  }
                ]
              }
            ]
          }
        },
        created() {
          if(this.articleId){
            replyApi.loadByArticleId(this.articleId).then(res => {
              this.firstReplyList = res.data;
            })
          }
        },
        methods : {
          /**
           * 回复文章
           */
          handleReplyArticle(){
            if(!this.$store.getters.isLogin){
              this.$message.warning("请先登录！")
              return;
            }
            if(!this.replyArticleForm.replyContent){
              this.$message.warning("请输入回复内容！")
              return;
            }
            const param = JSON.stringify(this.replyArticleForm);
            replyApi.save(param).then(res => {
              this.$msgbox("评论成功");
            })
          },
          /**
           * 回复评论
           */
          handleReply(oldReply){
            console.log(oldReply);
            this.replyUserForm.replyId = oldReply.id;
            // replyApi.save().then(res => {
            //
            // })
          },
          handlePreview(){

          },

        }
    }
</script>

<style lang>
  .box-reply {
    background: #f7f7f7;
    border: 1px solid #dcdcdc;
    height: 180px;
    margin-bottom:5px;
    -webkit-box-shadow: 0 1px 2px hsla(0,0%,65%,.5);
    box-shadow: 0 1px 2px hsla(0,0%,65%,.5);
    z-index: 99;
  }

  .replyList{
    height: auto;
  }

  .box-reply div.edit-mode {
    float: right;
    width: 86%;
    margin: 25px 25px 15px 0;
  }

  .box-reply div.detail-mode {
    float: right;
    width: 89%;
    margin: 5px 25px 15px 0;
  }


  .box-reply .avatar{
    margin:20px;
  }

  .box-reply .reply{
    margin: 8px;
  }

  .box-reply .reply-button{
    margin-top: 5px;
    cursor:pointer;
  }

  .el-divider--horizontal{
    margin:12px 0;
  }
</style>

