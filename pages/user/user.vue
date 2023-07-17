<template>
	<view>
		<view class="top_box">
		   <image src="/pages/image/titleUser.jpg" class = "titleUser"/>
		</view>
		
		<view class="graydivide"></view>
		
		<view class='function'>
		  <view style="width:100%">
		    <view class="functioninformation" ><!--左边图片&文字-->
		      <view class="imf-text">姓名</view><!--文字-->
		      <view class="imf-text">{{name}}</view><!--文字-->
		    </view>
		  </view>
		</view>
		<view class="whitedivide"></view>
		<view class='function'>
		  <view style="width:100%">
		    <view class="functioninformation" ><!--左边图片&文字-->
		      <view class="imf-text">单位</view><!--文字-->
		      <view class="right-text">{{subcontractor}}</view><!--文字-->
		    </view>
		  </view>
		</view>
		<view class="whitedivide"></view>
		<view class='function'>
		  <view style="width:100%">
		    <view class="functioninformation" ><!--左边图片&文字-->
		      <view class="imf-text">工种</view><!--文字-->
		      <view class="right-text">{{useridentity}}</view><!--文字-->
		    </view>
		  </view>
		</view>
		<view class="whitedivide"></view>
		<view class='function'>
		  <view style="width:100%">
		    <view class="functioninformation" ><!--左边图片&文字-->
		      <view class="imf-text">工号</view><!--文字-->
		      <view class="right-text">{{welderno}}</view><!--文字-->
		    </view>
		  </view>
		</view>
		
		<view class = 'blanke'></view>
		<view class="logOut-box">
		  <view class = 'log-out' @click="logOut">登出</view>
		
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
			this.name = getApp().globalData.name
			this.subcontractor =  getApp().globalData.subcontractor
			//权限类别
			this.useridentity= getApp().globalData.useridentity
			//userid
			this.userid = getApp().globalData.userid
			//powerid 区分界面显示
			this.powerid =  getApp().globalData.powerid
			this.welderno = getApp().globalData.welderno	
		}
	}
</script>

<style>

/* pages/main/user/user.wxss */
page{/*页面背景—————统一浅灰*/
  background-color: #ededed;
}
.top_box{/*顶部空白栏*/
  
  background-color: aliceblue;
  width: 100%;
  height: 120px;
}
.titleUser{
width: 100%;
height: 100%;
}

.text {/*文字*/
  font-size: 20px;
  font-style: normal;
  font-weight: normal;
  width: 80px;
  height: 40px;
  position: relative;
  left: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #000000;
}
.right-text {/*右边文字*/
display: flex;
height: 20px;
font-size: 20px;
flex-direction: column;
justify-content: center;
color: #000000;
position: relative;
}
.blanke{
background-color: #ededed;
height: 80px;

}
.logOut-box{
width: 100%;
background-color: #ededed;
display: flex;
justify-content: center;
}
.log-out{
  background-color: #ffffff;
  width:60% ;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.whitedivide {/*白色分割线 - 改灰色*/ 
  height: 1px;
  background-color: #ededed;
  width: 100%;
  position:relative;
  top: 0px;
}

.function{
	background-color: #ffffff;
	
}
</style>
