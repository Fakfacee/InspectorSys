<template>
  <el-row justify="space-between" align="center">
    <el-col :span="8" style="display: flex; align-items: center">
      <div class="left-side">
        <el-button
          link
          :icon="routeStore.isCollapse ? Expand : Fold"
          @click="routeStore.changeCollapse"
        />
        <el-breadcrumb separator="/" class="breadcrumb">
          <el-breadcrumb-item
            v-for="router in routers"
            :key="router.path"
            :to="{ path: router.path }"
            >{{ router.meta.title }}</el-breadcrumb-item
          >
        </el-breadcrumb>
      </div>
    </el-col>
    <el-col :span="4">
      <div class="right-side">
        <div class="tooltip">
          <el-link
            :icon="FullScreen"
            :underline="false"
            style="font-size: 20px; margin-right: 5px"
          />
          <el-link
            :icon="Refresh"
            :underline="false"
            style="font-size: 20px"
            @click="reload"
          />
        </div>
        <div class="avatar">
          <el-dropdown>
            <el-avatar :size="50" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item @click="() => routerPush('/personalCenter')"
                  >个人中心</el-dropdown-item
                >
                <el-dropdown-item @click="() => routerPush('/')"
                  >退出登录</el-dropdown-item
                >
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script setup>
import { Refresh, FullScreen, Fold, Expand } from "@element-plus/icons-vue";
import { computed, provide, ref } from "vue";
import { useRouter } from "vue-router";
import { useRouteStore } from "@/stores/app";
const routeStore = useRouteStore();
const router = useRouter();
const routers = computed(() => {
  return router.currentRoute.value.matched.filter((item) => item.meta.title);
});

function routerPush(path) {
  router.push(path);
}

function reload() {
  location.reload();
}
</script>

<style lang="scss" scope>
.left-side {
  width: 100%;
  margin-left: 20px;
  display: flex;
  align-items: center;
  column-gap: 20px;
  .el-button {
  }
  .breadcrumb {
    font-size: 17px;
  }
}
.right-side {
  padding: 10px;
  display: flex;
  justify-content: end;
  align-items: center;
  .tooltip {
    margin-right: 10px;
    font-size: 32px;
  }
}
.tabs {
  position: absolute;
  bottom: 0;
  .el-tabs__header {
    margin: 0;
  }
}
</style>
