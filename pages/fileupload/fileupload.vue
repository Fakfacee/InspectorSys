<template>
	<view class = "window-box">
		<view class = "func-box">
			<view class="imf-text">图纸上传</view>
			<view v-if="powerid == 1">
			<view class="input-box">
				<input class = 'input' type="text" v-model="inputValue" placeholder="请选择需要上传文件" />
				<view class="button-box">
				  <button class = 'button-filechoose' @click="openFileExplorer">选择文件</button>
				  <button class = 'button-filechoose' @click="uploadFile">上传</button>
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
		inputValue:null,
		tempFilePaths:null,
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
		  var fileName = tempFilePaths[0].split('/').pop(); // 获取文件名
          const file = res.tempFiles;
		  //this.uploadFile(tempFilePaths);
          // 处理选择的文件
          console.log(file[0]);
		  this.inputValue = file[0].name
		  this.tempFilePaths = tempFilePaths
        },
        fail: (err) => {
          console.error('选择文件失败', err);
        }
      });
    },
	    uploadFile() {
		var file = this.tempFilePaths
		uni.uploadFile({
			url: getApp().globalData.url + 'uploadtableimf',
			filePath: file[0],
			name: 'file',
			formData:{
				'user':'test'
			},
			success:(uploadFileRes)=>{
				console.log(uploadFileRes.data)
				uni.showToast({
				        title: '文件上传成功',
				        icon: 'none',
				        duration: 1000,
				        mask: true,
				});
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
        flex-direction: column;
		margin-left: 10rpx;
		
	}
	.input{
		border: 1px solid black;
		margin-left: 20px;
		width: 60%;
	}
	.button-filechoose{
        font-size: 20rpx;
		
	}
	.button-box{
		width: 40%;
        display: flex;
		flex-direction: row;
		margin-top: 20rpx;
	}
	.gray-blank{
		margin-top: 80rpx;
	
	    height: 10rpx;
		background-color:rgba(211, 211, 211, 0.3); 
	}

</style>