<script>
	export default {
        globalData: {
			//本地测试
			//url: ['http://localhost:8080/wx/'],
			//线上发布
			url : ['https://cyhdl1ttleyuming.cn/wx/'],
			name:['登陆后显示个人信息'],
			subcontractor: null,
			useridentity  :null,
			userid : null,
			powerid  :null,
			openid : null,
			welderno : null,
			userid : null,
			rowData:null,
		},
		
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/* 标题字体 */
	.title-text{
		font-size: 16;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	/* 正文字体 */
	.imf-text{
	    font-size: 12;
	    display: flex;
	    padding-left: 10px;
		padding-top: 10px;
		padding-bottom: 10px;
	    align-items: center;	
	}
	/* 按钮 */
	.button{
		width: 35%;
		height: 100%;
		
	}
	.blank {
		height: 5px;
		width: 100%;
		display: flex;
		justify-content: center;
	}

	.gray-line {
		height: 1px;
		width: 100%;
		background-color: #ededed;
	}

	.black-line {
		height: 1px;
		width: 100%;
		background-color: black;

	}

	.white-line {
		height: 1px;
		width: 100%;
		background-color: #FFFFFF;

	}

	.triangle-topright {
		/* 右上三角*/
		width: 0;
		height: 0;
		border-left: 50px solid transparent;
		border-top: 50px solid #006699;
	}

	.triangle-topleft {
		/* 左上三角*/
		width: 0;
		height: 0;
		border-right: 50px solid transparent;
		border-top: 50px solid #006699;
	}

</style>