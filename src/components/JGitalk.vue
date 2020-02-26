<template>
    <div id="gitalk-container"></div>
</template>

<script>
  import Gitalk from 'gitalk'
    export default {
        name : "JGitalk",
        props : {
          pageId : {
            type : String,
            default : ""
          }
        },
        methods : {
          initGitalk(){
            let the = this;
            const gitalk = new Gitalk({
              clientID: '93c7d7b418281c326c2a',
              clientSecret: '05ba71c81617f293515e43bd1c5d57444f68e88d',
              repo: 'juice-blog-gitalk.github.io',
              owner: 'HuangSpGo',
              admin: ['HuangSpGo'],
              id: the.pageId,      // Ensure uniqueness and length less than 50
              distractionFreeMode: false  // Facebook-like distraction free mode
            })
            gitalk.render('gitalk-container');
          }
        },
        mounted(){
          this.initGitalk();
        }
    }
</script>

<style scoped>

</style>
