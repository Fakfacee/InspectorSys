<template>
  <div class="common-layout">
    <div class="app-container">
      <el-aside width="auto" class="side-bar">
        <side-bar />
      </el-aside>
      <el-container class="view-container">
        <div class="header">
          <Header />
          <!-- <div class="tags">
            <Tags />
          </div> -->
        </div>
        <div class="app-main">
          <app-main />
        </div>
      </el-container>
    </div>
  </div>
</template>

<script setup>
import Header from "./components/Header/index.vue";
import AppMain from "./components/AppMain/index.vue";
import SideBar from "./components/SideBar/index.vue";
import Tags from "./components/Tags/index.vue";
</script>

<style lang="scss" scoped>
.common-layout {
  position: relative;
  .app-container {
    height: 100%;
    width: 100%;
    display: flex;
    .side-bar {
    }

    .view-container {
      background-color: #fff;
      display: flex;
      flex-direction: column;
      box-sizing: border-box;
      .header {
        position: relative;
        /* height: 7%; */
        width: 100%;
        box-shadow: 2px 3px 4px 0px #d5d4d4;
        padding: 5px;
        box-sizing: border-box;
        .tags {
          margin-left: 20px;
        }
      }

      .app-main {
        width: 100%;
        /* height: 90%; */
        display: flex;
        flex-direction: column;
      }
    }
  }
}
</style>
