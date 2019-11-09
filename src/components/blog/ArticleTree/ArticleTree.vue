<template>
  <el-scrollbar  style="height: 100%;">
    <el-tree :data="treeData" :props="defaultProps" @node-click="handlerClickNode"></el-tree>
  </el-scrollbar>
</template>

<script>
    export default {
        name: "ArticleTree",
        components: {
        },
        props:{
            treeData :{
                type : Array,
            },
            defaultProps: {
                children: 'children',
                label: 'label'
            }
        },
        methods:{
            handlerClickNode(data,node,nodeComp){
                this.$emit("handlerClickNode",data,node,nodeComp)
            }
        }
    }
</script>

<style>
  .el-scrollbar__wrap{
    overflow-x: hidden;
  }

  .el-tree-node__content{
    height: 50px;
  }
</style>
