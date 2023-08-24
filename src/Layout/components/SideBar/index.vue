<template>
  <!-- <el-row>
    <el-col :span="24" style="text-align: center;border-right: 1px solid #e0e0e0;">
      <h3>报检系统后台操作端</h3>
    </el-col>
  </el-row> -->
  <el-menu
    :default-active="route.fullPath"
    class="el-menu-container"
    router
    :collapse="routeStore.isCollapse"
    style="height: 100%;"
  >
  <el-menu-item index="#">	
    <el-icon v-if="routeStore.isCollapse"><WindPower /></el-icon>
        <template #title>
          <el-col style="text-align: center;">
      <h3>报检系统后台操作端</h3>
    </el-col>
        </template>
      </el-menu-item>
    <!-- <el-menu-item index="/index">
      <el-icon><House /></el-icon>
      <span>主页</span>
    </el-menu-item> -->
    <el-menu-item index="/baseData">
      <el-icon><Document /></el-icon>
      <span>基础数据查看</span>
    </el-menu-item>
    <!-- <el-menu-item index="/dataDownload">
      <el-icon><Download /></el-icon>
      <span>数据下载</span>
    </el-menu-item>
    <el-menu-item index="/dataUpload">
      <el-icon><Upload /></el-icon>
      <span>数据上传</span>
    </el-menu-item> -->
  </el-menu>
</template>

<script setup>
import { ref,inject,watch } from "vue";
import { House, Document, Download, Upload,WindPower } from "@element-plus/icons-vue";
import { useRouteStore } from '@/stores/app';
import { useRoute } from "vue-router";
const route = useRoute()
const routeStore = useRouteStore()

</script>

<style lang="scss" scoped>
.el-menu-container:not(.el-menu--collapse) {
  width: 250px;
  height: calc(100vh);
}
</style>
