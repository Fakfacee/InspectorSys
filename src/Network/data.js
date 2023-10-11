import request from "./index.js";

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

//数据更新修改
export function dataUpdate(formData) {
  return request({
    url: "tableDataChange",
    method: "post",
    data: formData,
  });
}

//删除
export function dataDelete(tableData) {
  return request({
    url: "deletetableimf",
    method: "post",
    data: tableData,
  });
}

//上传
export function drawingUpload(data) {
  return request({
    url: "uploadtableimf",
    method: "post",
    data:data
  })
}
