import { createApp } from "vue";
import { createPinia } from 'pinia'
import router from './router'
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import App from "./App.vue";

import zhCn from 'element-plus/dist/locale/zh-cn.mjs'//中文语言

//公共样式
import './assets/style/index.css'
const pinia = createPinia()
const app = createApp(App);
app.use(pinia)
app.use(ElementPlus, { locale:zhCn }); // 使用 locale 配置语言
app.use(router)
app.mount("#app");
