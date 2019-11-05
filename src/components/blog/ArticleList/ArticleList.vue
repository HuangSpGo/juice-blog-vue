<template>
  <ul class="j-article-list-ul">
    <li v-for="(article,index) in articleList" :key="index" class="j-article-list-li">
      <div class="j-article-list-single">
          <!--评论区-->
          <div class="j-article-list-communication">
            <ul style="padding-left: 30px;">
              <li><i class="el-icon-star-off" @click="handlerStar(article)"></i></li>
              <li class="text">{{article.star_count}}</li>
            </ul>
            <ul>
              <li><i class="el-icon-s-comment"></i></li>
              <li class="text">{{article.discussion_count}}</li>
            </ul>
          </div>

          <!--文章区域-->
          <div class="j-article-list-article">
            <ul style="height: 100%">
              <li style="height: 30%;"><i class="el-icon-tickets" title="类型"></i>{{article.type}}</li>
              <li style="height: 70%;">
                <a class="j-article-title" href="www.baidu.com">{{article.title}}</a>
              </li>
            </ul>
          </div>

          <!--作者区域-->
          <div class="j-article-list-author">
            <ul >
              <li>
                <div>
                  <div class="left">作者：</div>
                  <div class="right">
                    <a href="www.baidu.com">{{article.author}}</a>
                  </div>
                </div>
              </li>
              <li>
                <div>
                  <div class="left">发表时间：</div>
                  <div class="right">{{article.create_time}}</div>
                </div>
              </li>
            </ul>

          </div>
      </div>
    </li>
  </ul>
</template>

<script>
    export default {
        name: "ArticleList",
        data(){
            return{
                articleList:[
                    {
                        id : 1,
                        title : "关于如何榨出美味橙汁的教程！！",
                        author : "果汁先生",
                        create_time : "19-10-13 21:38:59",
                        star_count : 999,
                        discussion_count : 666,
                        type : "美食"
                    },
                    {
                        id : 2,
                        title : "关于如何制作可口汉堡的教程！！",
                        author : "果汁先生",
                        create_time : "19-10-13 21:38:59",
                        star_count : 999,
                        discussion_count : 666,
                        type : "美食"
                    },
                    {
                        id : 2,
                        title : "关于如何制作可口汉堡的教程！！",
                        author : "果汁先生",
                        create_time : "19-10-13 21:38:59",
                        star_count : 999,
                        discussion_count : 666,
                        type : "美食"
                    },
                    {
                        id : 2,
                        title : "关于如何制作可口汉堡的教程！！",
                        author : "果汁先生",
                        create_time : "19-10-13 21:38:59",
                        star_count : 999,
                        discussion_count : 666,
                        type : "美食"
                    },
                    {
                        id : 2,
                        title : "关于如何制作可口汉堡的教程！！",
                        author : "果汁先生",
                        create_time : "19-10-13 21:38:59",
                        star_count : 999,
                        discussion_count : 666,
                        type : "美食"
                    },
                    {
                        id : 2,
                        title : "关于如何制作可口汉堡的教程！！",
                        author : "果汁先生",
                        create_time : "19-10-13 21:38:59",
                        star_count : 999,
                        discussion_count : 666,
                        type : "美食"
                    },
                    {
                        id : 2,
                        title : "关于如何制作可口汉堡的教程！！",
                        author : "果汁先生",
                        create_time : "19-10-13 21:38:59",
                        star_count : 999,
                        discussion_count : 666,
                        type : "美食"
                    },
                    {
                        id : 2,
                        title : "关于如何制作可口汉堡的教程！！",
                        author : "果汁先生",
                        create_time : "19-10-13 21:38:59",
                        star_count : 999,
                        discussion_count : 666,
                        type : "美食"
                    },
                    {
                        id : 2,
                        title : "关于如何制作可口汉堡的教程！！",
                        author : "果汁先生",
                        create_time : "19-10-13 21:38:59",
                        star_count : 999,
                        discussion_count : 666,
                        type : "美食"
                    },
                    {
                        id : 2,
                        title : "关于如何制作可口汉堡的教程！！",
                        author : "果汁先生",
                        create_time : "19-10-13 21:38:59",
                        star_count : 999,
                        discussion_count : 666,
                        type : "美食"
                    }
                ]
            }
        },
        methods : {
            handlerStar(article){
              alert(JSON.stringify(article))
            }
        }
    }
</script>

<style>
.j-article-list-ul{
  height: 100%;
  width: 100%;
  margin: 0;
  margin-block-start: 0px;
  margin-block-end: 0px;
  list-style-type: none;
  padding-inline-start: 0px;
}

.j-article-list-li{
}

.j-article-list-single{
  height: 100px;
}

.j-article-list-single div{
  height: 100%;
  float: left;
}

.j-article-list-single ul{
  margin-block-start: 0px;
  margin-block-end: 0px;
  list-style-type: none;
  padding-inline-start: 0px;
}

.j-article-list-communication{
  width: 15%;
  font-size: 34px;
  text-align: left;
  text-align: center;
  box-shadow: 2px 2px 5px -3px rgba(189,119,153,.20);
}

.j-article-list-communication ul{
  width: 25%;
  float: left;
  padding: 20px 12px;
}

.j-article-list-communication .text{
  font-size: 20px;
}

.j-article-list-communication i{
  cursor: pointer;
}

.j-article-list-article{
  width: 60%;
  box-shadow: 0 4px 5px -3px rgba(189,119,153,.13);
}

.j-article-list-author{
  width: 24.5%;
  float: right;
  box-shadow: -2px 2px 5px -3px rgba(189,119,153,.20);
}

.j-article-list-author ul{
  height: 100%;
}

.j-article-list-author ul li{
  height: 50%;
}

.j-article-list-author ul li div{
  width: 100%;
  font-size: 16px;
  line-height: 50px;
}

.j-article-list-author ul li div .left{
  width: 40%;
  text-align: right;
}

.j-article-list-author ul li div .right{
  width: 60%;
  text-align: left;
}

.j-article-list-author a{
  text-decoration: none;
}

.j-article-title{
  font-size: 1.3rem;
  font-weight: 500;
  line-height: 1.2;
  color: #2e3135;
}
</style>
