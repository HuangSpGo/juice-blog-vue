<template>
      <el-row style="text-align: left" class="j-row" :gutter="24">
        <el-col :span="24">
          <el-card shadow="hover">
            <div slot="header" class="clear-fix">
              <span style="font-weight: bold">留言区</span>
            </div>
            <div class="root-reply box-reply">
              <el-avatar
                :src="handleAvatar(avatar)"
                shape="square"
                fit="fill"
                class="el-dropdown-link avatar"
                :size="90">
              </el-avatar>
              <div class="edit-mode">
                <div>
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
                  <el-button class="reply-button" type="primary" size="mini" @click="handleReplyArticle">回复</el-button>
                  <el-button class="reply-button" type="primary" size="mini" @click="handlePreview">预览</el-button>
                </div>
              </div>
            </div>
            <div v-if="firstReplyList.length > 0" class="root-reply box-reply replyList">
              <el-row v-for="(firstReply,index) in firstReplyList" :key="firstReply.id">
                <el-row>
                  <el-avatar
                    :src="handleAvatar(firstReply['fromUserAvatar'])"
                    fit="fill"
                    class="el-dropdown-link avatar"
                    style="margin:10px"
                    :size="60">
                  </el-avatar>
                  <div class="detail-mode">
                    <div>
                      <span style="color: inherit;font-weight: 900;">{{firstReply['fromUserName']}}</span>
                      <span style="margin-left:20px;font-size:small;opacity:0.9;">{{firstReply['replyTime']}}</span>
                    </div>
                    <div>
                      <span>{{firstReply['replyContent']}}</span>
                    </div>
                    <div class="reply-button" v-if="replyUserForm['replyId'] != firstReply['id']">
                      <el-button class="reply-button" size="mini" type="primary" @click="handleOpenReplyUser(firstReply)">回复</el-button>
                    </div>

                    <div v-if="replyUserForm['replyId'] == firstReply['id']">
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
                    <div class="reply-button" v-if="replyUserForm['replyId'] == firstReply['id']">
                      <el-button class="reply-button" size="mini" @click="cancelHandleReplyUser()">取消</el-button>
                    </div>


                  </div>
                </el-row>
                <el-row v-for="secondReply in firstReply['secondReplyList']">
                  <el-avatar
                    :src="handleAvatar(secondReply['fromUserAvatar'])"
                    fit="fill"
                    class="el-dropdown-link avatar"
                    style="margin:10px 10px 10px 80px"
                    :size="60">
                  </el-avatar>
                  <div class="detail-mode" style="width: 83%;">
                    <div>
                      <span style="color: inherit;font-weight: 900;">{{secondReply['fromUserName']}}</span>
                      <i class="el-icon-caret-right" style="margin:0px 10px"></i>
                      <span style="color: inherit;font-weight: 900;">{{secondReply['toUserName']}}</span>
                      <span style="margin-left:20px;font-size:small;opacity:0.9;">{{secondReply['replyTime']}}</span>
                    </div>
                    <div>
                      <span >{{secondReply['replyContent']}}</span>
                    </div>

                    <div class="reply-button" v-if="replyUserForm['replyId'] != secondReply['id']">
                      <el-button class="reply-button" size="mini" type="primary" @click="handleOpenReplyUser(secondReply)">回复</el-button>
                    </div>

                    <div v-if="replyUserForm['replyId'] == secondReply['id']">
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
                    <div class="reply-button" v-if="replyUserForm['replyId'] == secondReply['id']">
                      <el-button class="reply-button" size="mini" type="primary" @click="HandleReplyUser(secondReply)">确定</el-button>
                      <el-button class="reply-button" size="mini" @click="cancelHandleReplyUser()">取消</el-button>
                    </div>
                  </div>
                </el-row>
                <el-divider v-if="!(index == firstReplyList.length - 1)"></el-divider>
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
        inject : ['openLoginDialog'],
        data:function () {
          return {
            avatar: this.$store.getters.getUserAvatar,
            replyArticleForm : {
              fromUserName : "",
              fromUserId :  "",
              fromUserName : "",
              fromUserAvatar : this.$store.getters.getUserAvatar,
              articleId : this.articleId,
              replyContent : "",
              replyTarget : 1
            },
            replyUserForm : {
              replyId : undefined,
              fromUserId :  "",
              fromUserName : "",
              fromUserAvatar : this.$store.getters.getUserAvatar,
              articleId : this.articleId,
              toUserId : "",
              toUserName : "",
              toUserAvatar : "",
              replyContent : "",
              replyTarget : 2,
              toFirstReplyId : "",
            },
            firstReplyList : [
              /*{
                id : "1",
                fromUserName : "Juice",//评论者
                fromUserAvatar : "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
                toUserName : "",//被评论者
                replyTime : "5分钟前",//评论时间
                articleId : "",//回复的文章id
                replyContent : "写得真棒哈哈哈哈哈",//回复内容
                secondReplyList : [
                  {
                    id : "2",
                    fromUserName : "Coco",//评论者
                    fromUserAvatar : "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
                    toUserName : "Juice",//被评论者
                    replyTime : "4分钟前",//评论时间
                    articleId : "",//回复的文章id
                    replyContent : "谢谢！！！！",//回复内容
                  },
                  {
                    id : "3",
                    fromUserName : "Juice",//评论者
                    fromUserAvatar : "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
                    toUserName : "Coco",//被评论者
                    replyTime : "3分钟前",//评论时间
                    articleId : "",//回复的文章id
                    replyContent : "不用客气",//回复内容
                  }
                ]
              },
              {
                id : "4",
                fromUserName : "Juice",//评论者
                fromUserAvatar : "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
                toUserName : "",//被评论者
                replyTime : "5分钟前",//评论时间
                articleId : "",//回复的文章id
                replyContent : "写得真棒哈哈哈哈哈",//回复内容
                secondReplyList : [
                  {
                    id : "5",
                    fromUserName : "Coco",//评论者
                    fromUserAvatar : "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
                    toUserName : "Juice",//被评论者
                    replyTime : "4分钟前",//评论时间
                    articleId : "",//回复的文章id
                    replyContent : "谢谢！！！！",//回复内容
                  },
                  {
                    id : "6",
                    fromUserName : "Juice",//评论者
                    fromUserAvatar : "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
                    toUserName : "Coco",//被评论者
                    replyTime : "3分钟前",//评论时间
                    articleId : "",//回复的文章id
                    replyContent : "不用客气",//回复内容
                  }
                ]
              }*/
            ]
          }
        },
        methods : {
          isReplySelf(fromUserId) {
            if(!this.$store.getters.isLogin){
              return true;
            }
            let userId = this.$store.getters.getUser['id'];
            if (userId != fromUserId) {
              return true;
            } else {
              return false;
            }
          },
          beforeReplyCheck(newReply){
            if(!this.$store.getters.isLogin){
              this.openLoginDialog();
              return true;
            }
            if(!newReply.replyContent){
              this.$message.warning("请输入回复内容！")
              return true;
            }
          },
          /**
           * 处理头像
           */
          handleAvatar(avatar){
            if(!avatar){
              return window.baseParam.default_avatar;
            }
            return avatar;
          },
          /**
           * 回复文章
           */
          handleReplyArticle(){
            let newReply = this.replyArticleForm;
            if(this.beforeReplyCheck(newReply)){
              return false;
            }
            newReply.articleId = this.articleId;
            this.handleReply(newReply);
          },
          /**
           * 回复评论
           */
          handleReplyUser(oldReply){
            let newReply = this.replyUserForm;
            if(this.beforeReplyCheck(newReply)){
              return false;
            }
            let currentUserId = this.$store.getters.getUser['id'];
            if(currentUserId == oldReply.fromUserId){
              this.$message.error("无法回复自己！")
              return;
            }
            const firstReplyRef = this.$refs.firstReplyRef;
            const param = JSON.stringify(this.replyArticleForm);
            replyApi.save(param).then(res => {
              if(res.status == 200){
                this.$msgbox("评论成功");
                this.firstReplyList.push(res.data);
                this.replyArticleForm.replyContent = "";
                this.$nextTick(() =>{
                  setTimeout(() => {
                    firstReplyRef.scroll
                    Top  =firstReplyRef.scrollHeight
                  }, 13)

                })
              }else{
                this.$msgbox("评论失败","系统异常","error");
              }

            })
            newReply.toUserId = oldReply.fromUserId;
            newReply.toUserName = oldReply.fromUserName;
            newReply.toUserAvatar = oldReply.fromUserAvatar;
            newReply.fromUserName = this.$store.getters.getUser['userName'];
            newReply.articleId = this.articleId;
            if(oldReply['replyTarget'] == 1){
              newReply.toFirstReplyId = oldReply.id;
            }else{
              newReply.toFirstReplyId = oldReply.toFirstReplyId;
            }
            this.handleReply(newReply);
          },
          /**
           * 打开回复评论
           */
          handleOpenReplyUser(oldReply){
            console.log(oldReply);
            this.replyUserForm['replyId'] = oldReply.id;
            // replyApi.save().then(res => {
            //
            // })
          },
          cancelHandleReplyUser(){
            this.replyUserForm['replyId'] = undefined;
            this.replyUserForm['replyContent'] = "";
          },
          HandleReplyUser(oldReply){
            // fromUserName : "",
            //   fromUserAvatar : this.$store.getters.getUserAvatar,
            //   articleId : this.articleId,
            //   toUserName : "",
            //   replyContent : "",
            this.replyUserForm
          handleReply(newReply){
            let the = this;
            newReply.fromUserName = this.$store.getters.getUser['userName'];
            newReply.fromUserId = this.$store.getters.getUser['id'];
            newReply.fromUserAvatar = this.$store.getters.getUser['avatarUrl'];
            replyApi.save(newReply).then(res => {
              let newReply = res.data;
              if(newReply['replyTarget'] == 1){
                the.initReplyArticleForm();
              }else{
                the.initReplyUserForm();
              }
              the.hideReplyInput();
              the.appendReplyList(newReply);
              this.$message.success("回复成功！")
            })
          },
          handlePreview(){

          },
          /**
           * 显示回复输入框
           */
          showReplyInput(reply){
            this.showReplyId = reply.id;
            this.showReplyPlaceholder = "回复："+reply.fromUserName;
          },
          hideReplyInput(){
            this.showReplyId = "";
            this.showReplyPlaceholder = "";
            this.initReplyUserForm();
          },
          initReplyUserForm(){
            this.replyUserForm.toUserId = "";
            this.replyUserForm.toUserName = "";
            this.replyUserForm.toUserAvatar = "";
            this.replyUserForm.replyContent = "";
          },
          initReplyArticleForm(){
            this.replyArticleForm.replyContent = "";
          },
          appendReplyList(newReply){
            let replyTarget = newReply['replyTarget'];
            if(replyTarget == 1){//回复文章的评论
              this.firstReplyList.push(newReply);
            }else{//回复其他人的评论
              let firstReplyId = newReply['toFirstReplyId'];
              let firstReplyList = this.firstReplyList;
              for(let i = 0; i < firstReplyList.length; i++){
                let firstReply = firstReplyList[i];
                if(firstReply['id'] == firstReplyId){
                  firstReply.secondReplyList.push(newReply);
                }
              }
            }
          }
        },
        mounted() {
          let the = this;
          replyApi.loadByArticleId(this.articleId).then(res => {
            console.log("replyList = ",res.data)
            the.firstReplyList = res.data;
          })
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

  .box-reply div.edit-mode.replyUser {
    float: left;
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
    margin-bottom: 3px;
    cursor:pointer;
  }
  .box-reply .cancel-button{
    background: #f7f7f7;
    margin-top: 5px;
    margin-bottom: 3px;
    cursor:pointer;
  }


  .el-divider--horizontal{
    margin:12px 0;
  }
</style>

