<template>
	<view class="content_all">

		<view class="content_1">
			<view style="font-size: 25px;color: #fff;">报检系统后台管理端</view>
			<view class="list">
				<view class="list-item">
<input class="user-input" v-model="phoneno" type="number" maxlength="11" placeholder="请输入账号" />
				</view>
				<view class="list-item">
					<input class="password-input" v-model="password" type="text" maxlength="32" placeholder="请输入密码" />
				</view>
				<view class="list-item">
					<button class='button-login' typ='default' @click="bindLogin()">登 录</button>
				</view>
				<!-- <view class="list-call" >
					<image class="img" src="/static/shilu-login/phone.png"></image>
					<input class="biaoti" v-model="phoneno" type="number" maxlength="11" placeholder="请输入账号" />
				</view>
				<view class="list-call" style="margin-top: 20upx;">
					<image class="img" src="/static/shilu-login/block.png"></image>
					<input class="biaoti" v-model="password" type="text" maxlength="32" placeholder="请输入密码" password="true" />
				</view> -->
			</view>
		</view>
	</view>
</template>

<script>

	export default {
		data() {
			return {
				phoneno:'',
				password:'',
				people:[]
			};
		},
		onShow(){


		},
		methods: {
		    bindLogin() {
				if(this.phoneno.length == 0 || this.password.length == 0){ 
				        uni.showToast({
				        title: '用户名和密码不能为空',   
				        icon: 'none',   
				        duration: 2000   
			            })
				}else{ 
				  // 这里修改成跳转的页面 
				  uni.request({
				    url: getApp().globalData.url+'login',
				    method : 'POST',
				    dataType : 'JSON',
				    data: {
				    strUser:this.phoneno,
				    strPwd:this.password
				    },
				    success:(res) =>{
					if(res.statusCode == 200){

						//Status,UserId,Name,User_Identity,Contractor,Email,PhoneNo,PowerId,WelderNo
						if(res.data.Status == 0){
						  uni.showToast({
						    title: '用户名不存在,请进行注册',   
						    icon: 'none',   
						    duration: 2000   
						    })   
						}else if(res.data.Status ==1){
						var result = res.data
						//姓名
						getApp().globalData.name = result.Name,
						//承包商
						getApp().globalData.subcontractor = result.Contractor,
						//权限类别
						getApp().globalData.useridentity = result.User_Identity,
						//userid
						getApp().globalData.userid = result.UserId,
						//class_code 区分界面显示
						getApp().globalData.powerid = result.PowerId,
						getApp().globalData.welderno = result.WelderNo
						//result.UserId
						
						uni.navigateTo({			     
						  url: '/pages/index/index',
						})
						}
					}else{
						uni.showToast({
						  title: '登录失败，请联系系统管理员',   
						  icon: 'none',   
						  duration: 2000   
						  })   
						
					}
					
					}  ,  
				    fail:function(){
				      
				      uni.showToast({
				
				        title: '无法连接服务器',   
				        icon: 'none',   
				        duration: 2000   
				        }) 
				
				      }
				  })
				
				    }  
		    }
		}
	}
</script>

<style>
	.button-login{
		/* margin-top: 10upx; */
		height: 25rpx;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 12upx;
		border-radius: 20rpx;
		color: #012a6c;
	}
	.content_all{
		display: flex;
		align-items: center;
		height: 100vh;
		width: 100%;
		background-image: url(../../static/assets/login/loginBackground.jpg);
		background-size: 100% 100%;
		background-repeat: no-repeat;
	}
	.content_1{
		width: 30%;
		height: 70%;
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-left: 30rpx;
		padding: 10rpx;
	}	
	.list {
		position: relative;
		width: 80%;
		height: 40%;
		padding: 10rpx;
		border-radius: 8px;
		/* box-shadow: 0 0 6px rgba(0, 0, 0, .04); */
		border: 1rpx solid #aaa;
		margin-top: 10rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-evenly;
	}
	.list::before{
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(255, 255, 255,0.1); 
		filter: blur(5px);
	}
	.list-item{
		width: 80%;
	}
	.list .list-item input{
		width: 100%;
		height: 25rpx;
		border-radius: 20rpx;
		border: 1rpx solid #FFFFFF;
		background-color: rgb(240, 238, 239,0;);
		color:#FFFFFF;
		padding-left: 10rpx;
		/* margin-top: 10rpx; */

	}
	
	.uni-input-input, .uni-input-placeholder {
	    margin-left: 10px;
	    width: 100%;
		color:#fff;
	}
	.list-call{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		height: 25upx;
		color: #333333;
		width: 500upx;
		margin-bottom: 3upx;
		padding: 20upx;
		background-color: #F6F4FC;
		
	}
	.list-call .img{
		width: 20upx;
		height: 20upx;
	}
	.list-call .biaoti{
		flex: 1;
		text-align: left;
		font-size: 20upx;
		line-height: 100upx;
		margin-left: 16upx;
	}
	
	.dlbutton {
		color: #FFFFFF;
		font-size: 12upx;
		width:200upx;
		height:55upx;
		background-color: #1890FF;
		
		align-items: center;
		display: flex;
		justify-content: center;
		
		line-height: 100upx;
		text-align: center;
		/* margin-left: auto;
		margin-right: auto; */
		margin-top: 30upx;
	}
	.dlbutton hover {
		background-color: #1890cc;
	}
	.xieyi{
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		font-size: 22upx;
		margin-top: 80upx;
		color: #FFA800;
		text-align: center;
		height: 40upx;
		line-height: 40upx;
	}
	.xieyi text{
		font-size: 22upx;
		margin-left: 15upx;
		margin-right: 15upx;
	}
</style>
