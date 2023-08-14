import { defineStore } from "pinia";
import { ref } from "vue";
import { getRouteByName } from "@/utils/handleRoute";

// const defineRoute = [
//   getRouteByName("homeIndex", [{
//     path: "/index",
//     name: "homeIndex",
//     meta: { title: "主页", icon: "" },
//   }]),
// ];

export const useRouteStore = defineStore("route", () => {
  const visitedRoutes = ref([]);

  const isCollapse = ref(false);
  const changeCollapse = () => (isCollapse.value = !isCollapse.value);
  return {
    visitedRoutes,
    isCollapse,
    changeCollapse,
  };
});
