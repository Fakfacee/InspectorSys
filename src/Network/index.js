import axios from "axios";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

import { ElNotification , ElMessageBox, ElMessage, ElLoading } from 'element-plus'

const instance = axios.create({
  baseURL: "/api",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use(
  (config) => {
    NProgress.start();
    // config.headers.Authorization = 'Bearer ' + sessionStorage.getItem('token')
    return config;
  },
  (error) => {
    // 处理请求错误
    console.error("请求发生错误", error);
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    NProgress.done();
    return response;
  },
  (error) => {
    console.error("响应发生错误", error);
    return Promise.reject(error);
  }
)

let downloadLoadingInstance;
export function downLoad(url, fileName) {
    downloadLoadingInstance = ElLoading.service({ text: "正在下载数据，请稍候", background: "rgba(0, 0, 0, 0.7)", })
    return instance.get(url, {
        responseType: 'blob'
    }).then((data) => {
        console.log(data);
        const blob = new Blob([data.data], { type: 'application/octet-stream' })
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = fileName;
        link.click()
        downloadLoadingInstance.close();
    }).catch((r) => {
        console.error(r)
        ElMessage.error('下载文件出现错误！')
        downloadLoadingInstance.close();
      })
}

export default instance;
