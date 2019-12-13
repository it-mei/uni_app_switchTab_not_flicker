export default {
	state: {
		switchShowPage:'/pages/index/index',//默认展示的一个页面,手写首页地址,
		tagId:'index',//默认展示的一个页面,手写首页地址
		tabBar: {
			color: '#C1C0C9',
			selectedColor: '#FE8B1E',
			showType:"img",//img/图片模式,iconfont/字体图标模式
			borderColor:"#bbbbbb",
			bgColor:"#ffffff",
			list: [{
					pagePath: "/pages/left1/left1",
					tagId:"left1",//用于标记显示某个页面
					navigateType: "switchTab",
					showBig:false,
					fontClass:"icontab_bar_optional_se",
					iconPath: require('@/static/tabbar-img/icon1.png'),
					selectedIconPath: require('@/static/tabbar-img/icon1_1.png'),
					text: '左侧1',
					num: 0
				},
				{
					pagePath: "/pages/left2/left2",
					tagId:"left2",//用于标记显示某个页面
					navigateType: "switchTab",
					showBig:false,
					fontClass:"icontab_bar_market_sele",
					iconPath: require('@/static/tabbar-img/icon3.png'),
					selectedIconPath: require('@/static/tabbar-img/icon3_3.png'),
					text: '左侧2',
					num: "新"
				},
				{
					pagePath: "/pages/index/index",
					tagId:"index",//用于标记显示某个页面
					navigateType: "switchTab",
					showBig:true,
					fontClass:"icontab_bar",
					iconPath: require('@/static/tabbar-img/icon4.png'),
					selectedIconPath: require('@/static/tabbar-img/icon4_4.png'),
					text: '首页',
					num: 0
				},
				{
					pagePath: "/pages/right1/right1",
					tagId:"right1",//用于标记显示某个页面
					navigateType: "switchTab",
					showBig:false,
					fontClass:"icontab_bar_mine_select",
					iconPath: require('@/static/tabbar-img/icon2.png'),
					selectedIconPath: require('@/static/tabbar-img/icon2_2.png'),
					text: 'right1',
					num: 10
				},
				{
					pagePath: "/pages/right2/right2",
					tagId:"right2",//用于标记显示某个页面
					navigateType: "switchTab",
					showBig:false,
					fontClass:"icontab_bar_market_sele",
					iconPath: require('@/static/tabbar-img/icon3.png'),
					selectedIconPath: require('@/static/tabbar-img/icon3_3.png'),
					text: 'right2',
					num: "新"
				}
			]
		}
	},
	mutations: {
		changePage(state, options = {}) { //跳转拦截器,约定跳转都走这个方法
			if(options.navigateType=='switchTab'){
				this.state.tabBar.switchShowPage = options.url;
				this.state.tabBar.tagId = options.tagId;
				if(getCurrentPages()[getCurrentPages().length-1].route!='pages/index/index'){
					uni.switchTab({
						url:'/pages/index/index' 
					})
				}
			} else {
				uni[options.navigateType]({
					url: options.url
				})
			}
		}
	}
}