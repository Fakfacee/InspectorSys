import { request } from "./index.js";

export function baseDataList() {
  return request({
    url: "databaseget",
    method: "get",
    dataType: "JSON",
    header: {
      "custom-header": "Content-Type,Authorization", //自定义请求头信息
    },
  });
}

export function dataUpdate(formData) {
  return request({
    url: "tableDataChange",
    method: "post",
    data: formData,
  });
}
