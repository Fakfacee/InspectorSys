<template>
	<view class="content_all">
		<view class="content_1 content">
			<view class="header">
			</view>
			<view style="margin-top: 20upx;font-size: 25px;">报检系统后台管理端</view>
			<view class="list">
				<view class="list-call" >
					<image class="img" src="/static/shilu-login/phone.png"></image>
					<input class="biaoti" v-model="phoneno" type="number" maxlength="11" placeholder="请输入账号" />
				</view>
				<view class="list-call" style="margin-top: 20upx;">
					<image class="img" src="/static/shilu-login/block.png"></image>
					<input class="biaoti" v-model="password" type="text" maxlength="32" placeholder="请输入密码" password="true" />
				</view>
			</view>
			<view class="blank"></view>
			<button class='button-login' type = 'default' @click="bindLogin()">登 录</button>
		
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
		margin-top: 10upx;
		height: 40upx;
		width: 250upx;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 15upx;
	}
	.content_all{
		display: flex;
		justify-content: center;
		flex-direction: row;
		align-items: center;
		height: 100vh;
		width: 100%;
		
	}
	.content_1{
		width: 50%;
		height: 50%;
		margin-left: 100upx;
		
	}
	.content {
		display: flex;
		flex-direction: column;
		/* justify-content:center; */
		/* align-items: center; */
		
		
	}
	.header {
		font-size: 50px;
	}
	
	
	.list {
		display: flex;
		flex-direction: column;
		padding-top: 40upx;
		/* padding-left: 70upx;
		padding-right: 70upx; */
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
