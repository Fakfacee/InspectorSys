(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-filedwonload-filedwonload"],{"00a5":function(t,e,n){var o=n("24fb");e=o(!1),e.push([t.i,".window-box[data-v-1163cb2c]{width:100%;height:100vh;display:flex;flex-direction:column;background:hsla(0,0%,82.7%,.3)}.func-box[data-v-1163cb2c]{position:relative;left:%?60?%;margin:%?40?% 0;width:40%;height:100vh;background-color:#fff;border-radius:10px}.input-box[data-v-1163cb2c]{display:flex;flex-direction:row;align-items:center;margin-left:%?40?%}.input[data-v-1163cb2c]{border:1px solid #000}.button[data-v-1163cb2c]{position:relative;width:%?240?%;top:%?20?%;left:%?80?%;display:flex;flex-direction:row;font-size:%?14?%;margin-left:10px;height:28px;align-items:center;justify-content:center}.button-box[data-v-1163cb2c]{display:flex;flex-direction:row;justify-content:flex-end;margin-left:%?80?%}.gray-blank[data-v-1163cb2c]{margin-top:%?80?%;height:%?10?%;background-color:hsla(0,0%,82.7%,.3)}",""]),t.exports=e},"107f":function(t,e,n){"use strict";n.r(e);var o=n("7b44"),a=n("571b");for(var i in a)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(i);n("1426");var l=n("f0c5"),c=Object(l["a"])(a["default"],o["b"],o["c"],!1,null,"1163cb2c",null,!1,o["a"],void 0);e["default"]=c.exports},1426:function(t,e,n){"use strict";var o=n("5e09"),a=n.n(o);a.a},"571b":function(t,e,n){"use strict";n.r(e);var o=n("97a6"),a=n.n(o);for(var i in o)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(i);e["default"]=a.a},"5e09":function(t,e,n){var o=n("00a5");o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var a=n("4f06").default;a("1f860b24",o,!0,{sourceMap:!1,shadowMode:!1})},"7b44":function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){}));var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"window-box"},[n("v-uni-view",{staticClass:"func-box"},[n("v-uni-view",{staticClass:"imf-text"},[t._v("DWR下载")]),n("v-uni-button",{staticClass:"button",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.downloadDwrFile.apply(void 0,arguments)}}},[t._v("点击开始下载")]),n("v-uni-view",{staticClass:"gray-blank"}),n("v-uni-view",{staticClass:"imf-text"},[t._v("焊口信息汇总表下载")]),n("v-uni-button",{staticClass:"button",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.downloadSumFile.apply(void 0,arguments)}}},[t._v("点击开始下载")]),n("v-uni-view",{staticClass:"gray-blank"})],1)],1)},a=[]},"97a6":function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("d3b7"),n("3ca3"),n("ddb0"),n("2b3d"),n("9861");var o={data:function(){return{downloadProgress:[0]}},onLoad:function(){},methods:{downloadDwrFile:function(){var t=new XMLHttpRequest;t.open("GET",getApp().globalData.url+"downloaddwrfile"),t.responseType="blob",t.onload=function(){if(200===t.status){var e=new Blob([t.response],{type:"application/octet-stream"}),n=document.createElement("a");n.href=window.URL.createObjectURL(e),n.download="dwr.xlsx",n.click()}else console.log("Failed to download file")},t.onprogress=function(t){if(t.lengthComputable){var e=t.loaded/t.total*100;100==e.toFixed(2)&&uni.showToast({title:"下载完成",icon:"none",duration:1e3,mask:!0})}},t.send()},downloadSumFile:function(){var t=new XMLHttpRequest;t.open("GET",getApp().globalData.url+"downloadsumfile"),t.responseType="blob",t.onload=function(){if(200===t.status){var e=new Blob([t.response],{type:"application/octet-stream"}),n=document.createElement("a");n.href=window.URL.createObjectURL(e),n.download="summary.xlsx",n.click()}else uni.showToast({title:"下载失败",icon:"none",duration:1e3,mask:!0})},t.onprogress=function(t){if(t.lengthComputable){var e=t.loaded/t.total*100;100==e.toFixed(2)&&uni.showToast({title:"下载完成",icon:"none",duration:1e3,mask:!0})}},t.send()}}};e.default=o}}]);