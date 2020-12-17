<template>
  <div>
    <template v-for="navMenu in menus">
      <!-- 最后一级菜单 -->
      <el-menu-item v-if="!navMenu.children"
                    :key="navMenu.name" :data="navMenu" :index="navMenu.name"
                    @click="handleClickMenu(navMenu)"
      >
        <span slot="title">{{navMenu.title}}</span>
      </el-menu-item>

      <!-- 此菜单下还有子菜单 -->
      <el-submenu v-if="navMenu.children"
                  :key="navMenu.name" :data="navMenu" :index="navMenu.name">
        <template slot="title">
          <span> {{navMenu.title}}</span>
        </template>
        <!-- 递归 -->
        <JMenu :menus="navMenu.children"></JMenu>
      </el-submenu>
    </template>
  </div>
</template>

<script>
    export default {
        name: "JMenu",
        props : {
          menus : {
            type : Array,
            default : []
          }
        },
        methods : {
          handleClickMenu(item){
            this.$router.push({name: item.name});
          }
        }
    }
</script>

<style lang="css">

  .el-submenu{
    text-align: left;
  }
</style>
