import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/login";
import Layout from "@/Layout";
import { useRouteStore } from "@/stores/app";
import { getRouteByName } from "@/utils/handleRoute";

const routes = [
  {
    path: "/",
    component: Login,
  },
  {
    path: "/layout",
    component: Layout,
    redirect: "/baseData",
    children: [
      // {
      //   path: "/index",
      //   component: () => import("@/views/home/index.vue"),
      //   name: "homeIndex",
      //   meta: { title: "主页", icon: "" },
      // },
      {
        path: "/baseData",
        component: () => import("@/views/baseData/index.vue"),
        name: "baseData",
        meta: { title: "基础数据查看", icon: "" },
      },
      // {
      //   path: "/dataDownload",
      //   component: () => import("@/views/dataDownload/index.vue"),
      //   name: "dataDownload",
      //   meta: { title: "数据下载", icon: "" },
      // },
      // {
      //   path: "/dataUpload",
      //   component: () => import("@/views/dataUpload/index.vue"),
      //   name: "dataUpload",
      //   meta: { title: "数据上传", icon: "" },
      // },
      {
        path: "/personalCenter",
        component: () => import("@/views/personalCenter/index.vue"),
        name: "personalCenter",
        meta: { title: "个人中心", icon: "" },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.afterEach((to, from, next) => {
  const routeStore = useRouteStore();
  let result = routeStore.visitedRoutes.find((item) => item.name == to.name);
  if (!result && to.name) {
    routeStore.visitedRoutes.push(getRouteByName(to.name, router.getRoutes()));
  }
});

export default router;
