<template>
  <div class="main-container">
    <div class="main-view">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.main-container {
  padding: 20px 0 0 20px;
  .main-view {
    padding:10px;
    /* box-shadow: -5px -4px 3px 0px #ebe9e9; */
    /* border: 1px solid #ccc; */
  }
}
</style>
