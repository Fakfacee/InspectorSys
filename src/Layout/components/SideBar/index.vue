<template>
  <el-row>
    <el-col :span="24" style="text-align: center;border-right: 1px solid #e0e0e0;">
      <h3>报检系统后台操作端</h3>
    </el-col>
  </el-row>
  <el-menu
    default-active="/index"
    class="el-menu-vertical-demo"
    router
    style="height: 94%;"
  >
    <el-menu-item index="/index">
      <el-icon><House /></el-icon>
      <span>主页</span>
    </el-menu-item>
    <el-menu-item index="/baseData">
      <el-icon><Document /></el-icon>
      <span>基础数据查看</span>
    </el-menu-item>
    <el-menu-item index="/dataDownload">
      <el-icon><Download /></el-icon>
      <span>数据下载</span>
    </el-menu-item>
    <el-menu-item index="/dataUpload">
      <el-icon><Upload /></el-icon>
      <span>数据上传</span>
    </el-menu-item>
  </el-menu>
</template>

<script setup>
import { ref } from "vue";
import { House, Document, Download, Upload } from "@element-plus/icons-vue";

const isCollapse = ref(false)
</script>

<style lang="scss" scoped>
</style>
