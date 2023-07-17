<template>
	<view class="box-title">
		<view class = "box-right"></view>
		<view class="box-mid">
			<view class="title-text">报检系统后台操作端</view>
		</view>
		<view class="box-right">
			<view class="link-text" :class="{ 'active-link': isHovered }" 
			@mouseenter="isHovered = true" 
			@mouseleave="isHovered = false"
			@click="touser">用户中心 </view>
		
		</view>
	
	
	</view>
</template>

<script>
	export default {
	data() {
		return {
		    isHovered: false
		};
	},

	methods: {
		changeColor(event) {
		   event.target.classList.add('active-link'); // 鼠标停留时，将当前激活的功能索引设置为对应的索引
		},
		resetColor(event) {
		   event.target.classList.remove('active-link'); // 鼠标移开时，将当前激活的功能索引重置为-1
		},
		touser(){
			uni.navigateTo({ 
				url:'../user/user'
			})
			}
	},
	}
	
</script>

<style>
	.box-title{
		display: flex;
		flex-direction: row;
		align-items: center;
		width: 100%;
		background-color: #ffffff;
	    
	}
	.box-right{
		
		width: 40%;
	}
	.box-mid{
		width: 60%;
	}
	.box-right{
		width: 40%;
	}
	.title-text{
		display: flex;
		justify-content: center;
		font-size: 20px;
		
	}
	.link-text{
    display: flex;
    flex-direction: row;
    justify-content: center;
    font-size: 12px;
    color: #007aff;
    background-color: transparent;
	}
	
	.active-link {
	  color: #ff0000; /* 改变字体颜色 */
	  cursor: pointer;
	}
</style>