import { defineStore } from "pinia";
import { ref } from "vue";
import { getRouteByName } from "@/utils/handleRoute";

export const useRouteStore = defineStore("route", () => {
  const visitedRoutes = ref([]);

  return {
    visitedRoutes,
  };
});
