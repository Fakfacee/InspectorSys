<template>
	<view class = "window-box">
		<view class = "func-box">
			<view class="imf-text">图纸上传</view>
			<view v-if="powerid == 1">
			<view class="input-box">
				<input class = 'input' type="text" v-model="inputValue" placeholder="请选择需要上传文件" />
				<view class="button-box">
				<button class = 'button-filechoose' @click="openFileExplorer">选择文件</button>
				<button class = 'button-filechoose' @click="submit">上传</button>
				</view>
			</view>
			</view>
			<view v-else>当前用户无上传权限</view>
			<view class="gray-blank"></view>
		</view>
		
	</view>
</template>


<script>
export default {
  data() {
	return {
		powerid: null,
	}
	},
	onLoad() {
		//将数据存储在本地读取，刷新更新
	    let userdata = uni.getStorageSync('userimf')
	    this.powerid = userdata.PowerId
		},
  methods: {
    openFileExplorer() {
      uni.chooseFile({
        count: 1, // 最多选择的文件数量
        success: (res) => {
		  const tempFilePaths = res.tempFilePaths;
          const file = res.tempFiles;
		  this.uploadFile(tempFilePaths);
          // 处理选择的文件
          console.log(file);
		  
        },
        fail: (err) => {
          console.error('选择文件失败', err);
        }
      });
    },
	    uploadFile(file) {
		uni.uploadFile({
			url: getApp().globalData.url + 'uploadtableimf',
			filePath: file[0],
			name: 'file',
			formData:{
				'user':'test'
			},
			success:(uploadFileRes)=>{
				console.log(uploadFileRes.data)
			}
		})
	   

	    }
  }
}
</script>

<style>
	.window-box{
		width: 100%;
		height: 100vh;
		display: flex;
		flex-direction: column;
		background: rgba(211, 211, 211, 0.3);
	}
	.func-box {
        position: relative;
        left: 60rpx;
        margin: 40rpx 0;
        width: 40%;
        height: 100vh;
        background-color: #FFFFFF;
        border-radius: 10px;
	}
	.input-box{
		display: flex;
        flex-direction: row;
		align-items: center;
		margin-left: 40rpx;
		
		
	}
	.input{
		border: 1px solid black;
		
	}
	.button-filechoose{
		display: flex;
		flex-direction: row;
		font-size: 14rpx;
	    margin-left: 10px;
	    height: 28px;
        align-items: center;
		
	}
	.button-box{
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
        margin-left: 80rpx;
	
	}
	.gray-blank{
		margin-top: 80rpx;
	
	    height: 10rpx;
		background-color:rgba(211, 211, 211, 0.3); 
	}

</style>