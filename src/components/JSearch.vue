<template>
  <el-input placeholder="请输入内容" v-model="searchValue" class="input-with-select">
    <el-button @click="handlerSearch" slot="append" icon="el-icon-search"></el-button>
  </el-input>
</template>

<script>
    export default {
        name: "JSearch",
        data() {
            return {
                searchValue:""
            };
        },
        methods: {
            handlerSearch(){
                let searchValue = this.searchValue;
                if(searchValue == ""){
                    return ;
                }
            }
        },
        mounted() {
        }
    }
</script>

<style scoped>

</style>
