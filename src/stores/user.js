import { defineStore } from "pinia";
import { reactive, ref } from "vue";

export const useUserStore = defineStore("user", () => {
    const userForm = reactive({})

    return {
        userForm
    };
  });
  