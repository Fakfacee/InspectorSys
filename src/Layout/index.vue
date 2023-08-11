<template>
  <div class="common-layout">
    <div class="app-container">
      <div class="side-bar"><side-bar /></div>
      <div class="view-container">
        <div class="header">
          <Header />
          <div class="tags"><Tags /></div>
        </div>
        <div class="app-main">
          <app-main />
        </div>
      </div>
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
  height: 100vh;
  width: 100vw;
  .app-container {
    height: 100%;
    display: flex;
    .side-bar {
      width: 15%;
      height: 100%;
    }

    .view-container {
      background-color: #fff;
      width: 85%;
      display: flex;
      flex-direction: column;
      box-sizing: border-box;
      .header {
        position: relative;
        height: 10%;
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
        height: 90%;
        display: flex;
        flex-direction: column;
      }
    }
  }
}
</style>
