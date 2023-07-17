<template>
	<view class="box-window">
		<view class="box-top"></view>
		<!-- 备案信息 -->
		<view class = 'box-button'>
			<image src = '/static/beian.jpg' style="height: 20px;width: 20px;"></image>
			<text class="imf">粤公网安备 44049302000140号</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
.box-window{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 90vh;
}
.box-top{
	 flex: 1;
}
.box-button{
  display: flex;
  justify-content: center;
  align-items: center;
  
  height: 5vh;
	
}

</style>