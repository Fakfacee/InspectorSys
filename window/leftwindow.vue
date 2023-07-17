<template>
	<view class = "box-window">
	    <view class = "box-function">
	    	<view class="box-funcList">
				<view class="imf-text">功能列表</view>
				 <view class="fuc-list"
				      v-for="(item, index) in functionList"
				      :key="index"
				      @mouseover="changeColor(index)"
				      @mouseout="resetColor(index)"
				      :class="{ 'function-key': true, 'active': activeIndex === index }"
				      @click="functionActions[index]"
					>  
				      {{ item }}
				</view>
			</view>	
	    	<view class="box-funcPage">
			</view>
	    </view>
	    <view class = "box-status"></view>
		
    </view>

</template>

<script>
	export default {

		data() {
			return {
				title: 'Hello',
				functionList: ["基础数据查看", "数据下载"], // 功能列表
				activeIndex: -1 ,// 当前激活的功能索引
				functionActions: [
				      this.dataOperation, // 绑定功能1对应的触发函数
				      this.fileDwonload, // 绑定功能2对应的触发函数
				    ]
			}
		},
		
		onLoad() {

		},
		methods: {
			changeColor(index) {
			    this.activeIndex = index; // 鼠标停留时，将当前激活的功能索引设置为对应的索引
			},
			resetColor(index) {
			    this.activeIndex = -1; // 鼠标移开时，将当前激活的功能索引重置为-1
			},
			dataOperation(){
						uni.navigateTo({ 
							url:'../drawingimf/drawingimf'
							})
						},
			
			visualReport(){
						uni.navigateTo({ 
							url:'/pages/visualFuncPage/visualFuncPage'
							})
						},
			fileDwonload(){
				        uni.navigateTo({
				        	url :'/pages/filedwonload/filedwonload'
				        })
	
			},
			queryPage(){
				        console.log('按钮queryPage触发成功'),
				    uni.navigateTo({
				    	url:'../queryPage/queryPage'
				    	})
				    
	
			}
	
				
		}
	}
</script>

<style>
	    .box-window {
	        display: flex;
		}
		.box-title {
			width: 100vw;
			height: 6vh;
			background-color: #FFFFFF;
			display: flex;
			justify-content: center;
			border: 1px solid #E0EEE0;
			
		}
		
		.box-function {
			width: 100vw;
			height: 90vh;
			background-color:#FFFFFF ;
			display: flex;
			justify-content: left;
			
			
		}
		.fuc-list{
			display: flex;
			justify-content: center;
			align-items: center;
			
		}
		.box-funcList {
			width: 24vw;
			height: 90vh;
			background-color: #FFFFFF;

		}
		.box-funcPage {
			
		}
		.funcTitle{
			width: 100%;
			height: 4vh;
			padding-left: 5rpx;
			padding-bottom: 10rpx;

		}

		.MainFuncButton{
			width : 100%;
			height: 6vh;
		    type:default;
			background-color: #FFFFFF;
			border: none;
			box-shadow: none;
			border-radius: 0;
		
		}
		.button-text{
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: 15rpx;
		}

		.box-button{
			display: flex;
			flex-direction: row;
            justify-content: center;
			height: 20px;
			line-height: 20px;
			margin:0 auto; 
			padding:20px 0;
			
		}
		.logo{
			float: left;
			width: 20px;
			height: 20px;
		}
		.imf-text{
	    border-bottom: #939393 solid 1px;
			
		}
		.imf{
			float:left;
			height:20px;
			line-height:20px;
			margin: 0px 0px 0px 5px; 
			color:#939393;
			
		}
		.function-key {
		    /* 功能键的样式 */
		    padding: 10px;
		    cursor: pointer;
		  }
		
		.active {
		    /* 激活状态的样式 */
		    background-color: rgba(211, 211, 211, 0.3);
		    color: #BLACK;
		  }
</style>
