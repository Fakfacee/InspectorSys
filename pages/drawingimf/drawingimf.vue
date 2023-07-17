<template>
	<view class="right-window">
		<view class="box-title">
			<view class="blank-box"></view>
			<!-- 输入框 -->
			<input class="input-label" type="text" v-model="searchVal" @confirm="search" placeholder="输入单管号"/>
			
		<view class="button-group">
			<!-- 搜索按钮 -->
			<button class="button" type= "default"@click="search">搜索</button>
			
			<!-- 添加按钮 -->
			<button class="button" type = "primary" @click="addFunction" v-if="powerid == 1">添加</button>
		
			<!-- 批量删除按钮 -->
			<button class="button" type="warn" @click="delTable" v-if="powerid == 1">删除</button>
		</view>
		</view>
		<view class="uni-container">
			<uni-table ref="table" :loading="loading" border stripe type="selection" emptyText="暂无更多数据" @selection-change="selectionChange">
				<uni-tr>
					<uni-th width="150" align="center">图纸号</uni-th>
					<uni-th width="150" align="center">焊口号</uni-th>
					<uni-th width="150" align="center">单管号</uni-th>
					<uni-th width="70" align="center">管径</uni-th>
					<uni-th width="70" align="center">材质</uni-th>
					<uni-th width="70" align="center">组对日期</uni-th>
					<uni-th width="70" align="center">组对检验日期</uni-th>
					<uni-th width="70" align="center">焊接日期</uni-th>
					<uni-th width="70" align="center">外观检验日期</uni-th>
					<uni-th width="70" align="center">外观检验结果</uni-th>
					<uni-th width="220" align="center">操作</uni-th>
				</uni-tr>
				<uni-tr v-for="(item, index) in tableDataShow" :key="index" >
				  <uni-td>
				    <template v-if="!item.editable">{{ item.DrawingNo }}</template>
				    <input v-else v-model="item.DrawingNo" />
				  </uni-td>
				  <uni-td >
				    <view v-if="!item.editable" class="table-list">{{ item.WeldNo }}</view>
				    <input v-else v-model="item.WeldNo" />
				  </uni-td>
				  <uni-td align="center">
				    <template v-if="!item.editable">{{ item.PipeNo }}</template>
				    <input v-else v-model="item.PipeNo " />
				  </uni-td>
				  <uni-td align="center">
				    <template v-if="!item.editable">{{ item.Size }}</template>
				    <input v-else v-model="item.Size" />
				  </uni-td>
				  <uni-td align="center">
				    <template v-if="!item.editable">{{ item.Material}}</template>
				    <input v-else v-model="item.Material" />
				  </uni-td>
				  <uni-td align="center">
				    <template v-if="!item.editable">{{ item.ZuDuiDate }}</template>
				    <input v-else v-model="item.ZuDuiDate" />
				  </uni-td>
				  <uni-td align="center">
				    <template v-if="!item.editable">{{ item.ZuDuiInspectDate }}</template>
				    <input v-else v-model="item.ZuDuiInspectDate" />
				  </uni-td>
				  <uni-td align="center">
				    <template v-if="!item.editable">{{ item.WeldingDate }}</template>
				    <input v-else v-model="item.WeldingDate" />
				  </uni-td>
				  <uni-td align="center">
				    <template v-if="!item.editable">{{ item.AppearanceInspectDate }}</template>
				    <input v-else v-model="item.AppearanceInspectDate" />
				  </uni-td>
				  <uni-td align="center">
				    <template v-if="!item.editable">{{ item.AppearanceResult}}</template>
				    <input v-else v-model="item.AppearanceResult" />
				  </uni-td>
				  <uni-td>
				    <view class="uni-group">
				      <button class="uni-button" size="mini" type="primary" @click="toggleEdit(index)" v-if="powerid == 1 || powerid == 4">修改</button>
					  <!-- 保存所有选择项目-->
					  <button class="button-save"  size = 'mini' @click="submit(index)">保存</button>
				    </view>
				  </uni-td>
				</uni-tr>
			</uni-table>
			<view class="uni-pagination-box"><uni-pagination show-icon :page-size="pageSize" :current="pageCurrent" :total="total" @change="change" /></view>
		</view>
	</view>
</template>

<script>
import Vue from 'vue'
export default {
	data() {
		return {
			isEditing:false,
			searchVal: '',
			tableDataShow: [{'DrawingNo':'数据加载中，请稍后'},{'DrawingNo':''}],
			tableData : [],
			// 每页数据量value
			pageSize: 10,
			// 当前页
			pageCurrent: 1,
			// 数据总量
			total: 0,
			loading: false,
			powerid: null,
			activitytype : null,
			rowData : null,
		}
	},
	onLoad() {
		//将数据存储在本地读取，刷新更新
	    this.powerid = getApp().globalData.powerid,
		
		uni.request({
			url:getApp().globalData.url+'databaseget',
			method:'GET',
			dataType : 'JSON',
			header: {
			    'custom-header': 'Content-Type,Authorization' //自定义请求头信息
			},
			
			success: (res) => {
				if(res.statusCode == 200){
	
					var resultList = [];
					var i;
					this.tableData = res.data;
					
					this.dataLoaded = true
					
					this.selectedIndexs = []
					this.getData()
					//Vue.set(this.tableData,0,result);
				}else{
                    uni.showToast({
						title: '刷新失败，服务器无响应',
						icon: 'error'
					})		
				}
				
			}
		})
		
		//默认显示前20条数据

	},
	methods: {
		//搜索匹配
		search() {

		    const regex = new RegExp(this.searchVal, 'i'); // 创建不区分大小写的正则表达式
		    const filteredData = this.tableDataShow.filter(item => {
		      return regex.test(item.DrawingNo); // 使用正则表达式进行模糊匹配
		    });
			console.log(filteredData)
		      // 更新表格数据
		    this.tableDataShow = filteredData;
		    },
		onKeyInput(e){
			console.log(e)
			console.log(event.target.value)
			//this.inputValue = event.target.value
		},
		submit(index){
			var index = index
			//转化原始数据索引
			var rawIndex = parseInt((this.pageCurrent-1)*10)+parseInt(index)
			//当前页面数据
			const modifiedData = this.tableDataShow[index]
			//原始数据
			const rowData = this.rowData[index]
			//比较并标记_edible true数据有变动
 			for (const key in modifiedData){
							if(modifiedData[key] !== rowData[key] ){
							   modifiedData[key + '_edible'] = true
							}else{
								modifiedData[key + '_edible'] = false
							}
						}
			//当前更改类型
			modifiedData.type = this.activitytype;
			
			uni.request({
				url:getApp().globalData.url + 'tableDataChange',
				method : 'POST',
				dataType:'JSON',
				data:{
					tableData : modifiedData
				},
				success(res) {
					if(res.statusCode == 200 ){
						uni.showToast({
						  title: '保存成功',
						  icon: 'none'
						})
						uni.reLaunch({
						  url: '/pages/drawingimf/drawingimf'
						})
						
					}else{
						uni.showToast({
						  title: '保存失败',
						  icon: 'none'
						})
					}
				}
				
			})
		},
		changerow(e){
			uni.navigateTo({
				url: './tabledataedit/tabledataedit'
			})
			
		},
		deleterow(e){
            this.isEditing = false;
		},
		// 多选处理
		selectedItems() {
			return this.selectedIndexs.map(i => this.tableData[i])
		},
		// 多选
		selectionChange(e) {
			this.selectedIndexs = e.detail.index
		},
		//批量删除
		delTable() {
			const selectedRows = this.selectedItems()
			if (selectedRows.length === 0) {
			  // 如果没有选中行，给出提示
			  uni.showToast({
			    title: '请选择要删除的行',
			    icon: 'none'
			  })
			  return
			}
			// 获取选中行的索引
			const selectedIndexes = this.selectedIndexs
			var deletDatas = []
			// 删除选中行
			for (var i in selectedIndexes){
				this.tableDataShow.splice(selectedIndexes[i], 1)
				//console.log(this.tableDataShow[i])
				deletDatas.push(this.rowData[i])
			}
	
			
			//提交删除行数据
			uni.request({
				url:getApp().globalData.url + 'deletetableimf',
				method : 'POST',
				dataType:'JSON',
				data:{
					tableData : deletDatas
				},
				success(res) {
					if(res.statusCode == 200 ){
						//提交成功，刷新页面
						uni.showToast({
						  title: '删除成功，即将刷新页面',
						  icon: 'none'
						})
						uni.reLaunch({
						  url: '/pages/drawingimf/drawingimf'
						})
						
					}else{
						uni.showToast({
						  title: '请求失败，请刷新后重试',
						  icon: 'none'
						})
						
					}
				}
			})

		},
		addFunction() {
			console.log('增加函数触发')
		    this.tableDataShow.unshift({ 'DrawingNo': '请输入添加信息' ,'editable':true});
			this.activitytype = 'add'
			
		  },
		// 分页触发
		change(e) {
			this.$refs.table.clearSelection()
			this.selectedIndexs.length = 0
			console.log('页面触发，当前页面为：')
			console.log(e.current)
			this.pageCurrent = e.current
			this.getData()
		},
		// 获取数据n
	    async getData() {
	      //console.log('当前页面')
	      //console.log(this.pageCurrent)
	      await this.$nextTick() // 等待下一次 DOM 更新
		  if (this.dataLoaded) {
	         //console.log('总数据条数')
	         //console.log(Object.keys(this.tableData).length)
			 var maxrow = Object.keys(this.tableData).length
			 var maxPage = (maxrow / this.pageSize)+1
			 const tableDataArray = Object.values(this.tableData)// 将对象转换为数组
			 //默认从第一页开始 pageCurrent = 1 数据为 0-20
			 var start = (this.pageCurrent - 1)*10
			 var end = this.pageCurrent * 10
			 const dataSlice = tableDataArray.slice(start, end)
			  console.log(dataSlice)
			 //在20条显示数据中添加编辑属性
			 for(var i in dataSlice){
				 dataSlice[i].editable = false
			 }
			 this.tableDataShow = dataSlice
		     this.rowData = JSON.parse(JSON.stringify(dataSlice))
			 this.total = maxrow
			 //console.log(dataSlice)
		  }else { // 数据还未加载完成
                console.log('数据还未加载完成')
                setTimeout(() => {
                this.getData()
                }, 1000) // 等待一秒后再次尝试获取数据长度
            }
	    },
		toggleEdit(index) {
			const newData = [...this.tableDataShow]; // 创建一个新的数组
			newData[index].editable = true; // 更新新数组中对应元素的editable属性
			this.tableDataShow = newData; // 将新数组赋值给tableDataShow
			console.log(index)
			this.activitytype = 'edit'
		}
	}
}
</script>

<style>
/* #ifndef H5 */
/* page {
	padding-top: 85px;
} */
/* #endif */
.uni-group {
	display: flex;
	align-items: center;
},
.table-list{
  text-align: center;
  vertical-align: middle;
}
.box-title{
	height: 40px;
	display: flex;
	flex-direction: row;
    align-items: center;	

}
.blank-box{
	width: 80px;
	
}
.button-group{
 display: flex;
 flex-direction: row;
 justify-content: space-between;
 width: 60%;

}
.input-label{
	border: 1px solid #ccc;
	width: 200px;
	
}
.button{
	height: 35px;
	width: 70px;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
}
.button-save{

	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	background-color: #4caf50;
	color: aliceblue;
}
.right-window{
	display: flex;
	flex-direction: column;
	width: 80vw;
	
}
</style>
