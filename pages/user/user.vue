<template>

	<view class = "window-box">
		<view class = "func-box">
			<view class="imf-text">姓名</view>
			<view class="imf-text">{{name}}</view>
			<view class="gray-line"></view>
			<view class="imf-text">单位</view>
			<view class="imf-text">{{subcontractor}}</view>
			<view class="gray-line"></view>
			<view class="imf-text">工种</view>
			<view class="imf-text">{{useridentity}}</view>
			<view class="gray-line"></view>
			<view class="imf-text">工号</view>
			<view class="imf-text">{{welderno}}</view>
			<view class="gray-line"></view>
			<button class = "button" @click="logOut">登出</button>
   	
		</view>
	</view>
	
	

</template>

<script>
	export default {
		data() {
			return {
				name:null,
				subcontractor:null,
				useridentity  :null,
				userid : null,
				powerid  :null,
				openid :null,
				welderno : null,
				userid : null,
			}
		},
		methods: {
			logOut(){
				 // 清除缓存数据
				      uni.removeStorageSync('name');
				      uni.removeStorageSync('subcontractor');
				      uni.removeStorageSync('useridentity');
				      uni.removeStorageSync('userid');
				      uni.removeStorageSync('powerid');
				      uni.removeStorageSync('openid');
				      uni.removeStorageSync('welderno');
				      uni.removeStorageSync('userid');
				
				      // 返回登录界面
				      uni.reLaunch({
				        url: '/pages/login/login',
				      });
				
			}
			
		},
		onLoad() {
			uni.getStorage({
				key:'userimf',
				success: (res) => {
					var userdata = res.data
					this.name = userdata.Name
					this.subcontractor =  userdata.Contractor
					//权限类别
					this.useridentity= userdata.User_Identity
					//userid
					this.userid = userdata.UserId
					//powerid 区分界面显示
					this.powerid =  userdata.Powerid
					this.welderno = userdata.WelderNo	
				}
			})

		}
	}
</script>

<style>

/* pages/main/user/user.wxss */
page{/*页面背景—————统一浅灰*/
  background-color: #ededed;
}


.function{
	background-color: #ffffff;
	
}
.window-box{
	display: flex;
	flex-direction: column;
}
.func-box {
    position: relative;
    left: 60rpx;
    margin: 40rpx 0;
    width: 40%;
    height: 90vh;
    background-color: #FFFFFF;
    border-radius: 10px;
	}
.button{
	position: relative;
	width: 240rpx;
	top: 80rpx;
	left: 12vw;
	display: flex;
	flex-direction: row;
	font-size: 14rpx;
	margin-left: 10px;
	height: 28px;
    align-items: center;
	justify-content: center;

	}
</style>
