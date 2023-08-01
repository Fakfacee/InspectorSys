<template>
    <view class = "window-box">
    	<view class = "func-box">
    		<view class="imf-text">DWR下载</view>
            <button class="button" @click='downloadDwrFile'>点击开始下载</button>
            <view class="gray-blank"></view>
            <view class="imf-text">焊口信息汇总表下载</view>
            <button class="button" @click='downloadSumFile'>点击开始下载</button>
            <view class="gray-blank"></view>
		</view>
    </view>
</template>


<script>

	export default {
		data() {
			return {
				 downloadProgress: [0],

			}
		},
		onLoad() {
		
		},
		methods: {
			//最终方案，基于shr进行下载
			        downloadDwrFile(){
			            var xhr = new XMLHttpRequest();
						var self = this;
			            xhr.open('GET', (getApp().globalData.url+'downloaddwrfile'));
			            xhr.responseType = 'blob';
			            xhr.onload = function() {
			                if (xhr.status === 200) {
								//console.log('xhr为：',xhr)
			                    var filename = 'dwr.xlsx';
								//console.log('xhr.response为：',xhr.response)
			                    var blob = new Blob([xhr.response], { type: 'application/octet-stream' });
			                    var link = document.createElement('a');
			                    link.href = window.URL.createObjectURL(blob);
								//console.log(link.href)
			                    link.download = filename;
			                    link.click();
			                } else {
			                    console.log('Failed to download file');
			                }
						
			            };
						
					    xhr.onprogress = function(event) {
					        if (event.lengthComputable) {
					            var percentComplete = (event.loaded / event.total) * 100;
					    		//console.log('下载进度',percentComplete.toFixed(2))
								if(percentComplete.toFixed(2) ==100.00){
									uni.showToast({
									            title: '下载完成',
									            icon: 'none',
									            duration: 1000,
									            mask: true,
									          });
								}
								
								//self.$set(self.downloadProgress,0,percentComplete.toFixed(2))
					            
					        }
					    };
			     
			            xhr.send();
			        },
					downloadSumFile() {
					    var xhr = new XMLHttpRequest();
					    xhr.open('GET', (getApp().globalData.url+'downloadsumfile'));
					    xhr.responseType = 'blob';
					    xhr.onload = function() {
					        if (xhr.status === 200) {
								//console.log(xhr)
					            var filename = 'summary.xlsx';
								//console.log(xhr.response)
					            var blob = new Blob([xhr.response], { type: 'application/octet-stream' });
					            var link = document.createElement('a');
					            link.href = window.URL.createObjectURL(blob);
								//console.log(link.href)
					            link.download = filename;
					            link.click();
					        } else {
		
					                uni.showToast({
					                        title: '下载失败',
					                        icon: 'none',
					                        duration: 1000,
					                        mask: true,
					                });
					            }
					    
						
					    };
						xhr.onprogress = function(event) {
						    if (event.lengthComputable) {
						        var percentComplete = (event.loaded / event.total) * 100;
								//console.log('下载进度',percentComplete.toFixed(2))
								if(percentComplete.toFixed(2) ==100.00){
									uni.showToast({
									            title: '下载完成',
									            icon: 'none',
									            duration: 1000,
									            mask: true,
									          });
								}
						        
						    }
						};
					    xhr.send();
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
	.button{
		position: relative;
		width: 240rpx;
		top: 20rpx;
		left: 80rpx;
		display: flex;
		flex-direction: row;
		font-size: 14rpx;
	    margin-left: 10px;
	    height: 28px;
        align-items: center;
		justify-content: center;
		
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
