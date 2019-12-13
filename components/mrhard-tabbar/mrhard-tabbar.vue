<template>
	<view class="tabbar" :style="{'background-color':tabBar.bgColor,'border-top-color':tabBar.borderColor}">
		<block v-for="(item, index) in tabBar.list">
			<view :class="['tabbar-item',item.showBig?'big':'']" :style="{color:item.pagePath==(switchShowPage)?tabBar.selectedColor:tabBar.color,'background-color':tabBar.bgColor,'border-color':item.showBig?(item.pagePath==(switchShowPage)?tabBar.selectedColor:tabBar.borderColor):''}" @click="clickTab(item)">
				<block v-if="tabBar.showType=='img'">
					<image class="tabbar-icon" :src="item.pagePath==(switchShowPage)? item.selectedIconPath : item.iconPath"></image>
				</block>
				<block v-if="tabBar.showType=='iconfont'">
					<view :class="['tabbar-icon','iconfont',item.fontClass]"></view>
				</block>
				<text class="tabbar-text">{{ item.text }}</text>
				<text class="tabbar-item-num" v-if="item.num">{{item.num}}</text>
			</view>
		</block>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		onReady() {
			try{
				uni.hideTabBar({
					animation: false
				})
			}catch(e){
				//TODO handle the exception
			}
		},
		mounted() {
			try{
				uni.hideTabBar({
					animation: false
				})
			}catch(e){
				//TODO handle the exception
			}
		},
		methods: {
			clickTab(item) {
				this.$store.commit('changePage',{
					navigateType:item.navigateType,
					tagId:item.tagId,
					url:item.pagePath
				})
			}
		},
		computed: {
			switchShowPage(){
				return this.$store.state.tabBar.switchShowPage
			},
			tabBar(){
				return this.$store.state.tabBar.tabBar
			}
		}
	};
</script>

<style lang="scss">
	@font-face {
		font-family: "iconfont";
		src: url('//at.alicdn.com/t/font_1334383_zv3tk6gu7hn.eot?t=1564990171531');
		/* IE9 */
		src: url('//at.alicdn.com/t/font_1334383_zv3tk6gu7hn.eot?t=1564990171531#iefix') format('embedded-opentype'),
			/* IE6-IE8 */
			url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAS4AAsAAAAACZgAAARpAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDOAqFeIRyATYCJAMYCw4ABCAFhG0HfBs8CMgOJQXBwABggGJGPDzt9+3cmXmz4pokmSYsbYL600ZKIUFslCQevYQ3/HvaG5iOfhOdZjgWLyovzcHdDvqiUR7Mg2Opnw2UB/Qu2WUP9AuhAUUXyIDXYL4HeIYLE3g+gV6LEljcVjXgwF4hbBaIR4YSAXuXRYlhhm59Ddm3iHeg0Z3eWF4CvNU/P/6Dg7AnaTJh2xedSiko+WX5jLXS/td6qSKAtDwXbgeRsQ8oxGOop8PKzOyz0vsptXYM6BZdibJy6c/Y/y2jaFlfNN2coVHy/+MlohI0/Yh9km34ZSlLbG06mhTU0miSUcugSaCWxQEJ1BLX6cVPIO6BQBnnSjIdM4l5ATYnEAxXurlTjlNnaWdjGIU9ba6FRR+7Z46jYxxj6izw6uMzwvi8Q/9UqHsiNBoNhL5ZN9WgMhiIq0ZMTtXp9I2swp2yFH/Uic8YwlYaq0/rQ5fpRDlfjhX2mbtgzSpPnOicNX/1Wh/RnO6cWRHrVsURG1ZGr40VxvrcbJ/rs/YsVrwKq6VpGna6crbX9Va5ucObmLNw7jQvoXXy1dt9Z3ni6/ZExeXpcHyVbuRsr/N6uExXVSFixR2n+SimepNzenyoudPWaz2laLZ23cvZ57F3Pu+w88c07DFpQLHXPbM1hNYK0wyhwl4O7LZN6rNJqQAKanFSd1nu2uIj0rbDB8TVT2Jw7/GJwyN66abJINSEVnI87j2JCVy2tKJ2J+g0JghNNqIRQsUIOr7iXYuvt7UFBcuEa9cIwUGLAP/HVnesmND525950Z5BpdSRp/N3PPWhI5ys5wE9fe2r99tMOHrtodWsuREDR93Z0N1305RKYt4Jw/EQ+yYB7t5gJQk1Ib0zR4fDiuWTiaqM8EGDibG9BLjgJpw0VajeofleWTF9lof70m2sB+G/NuSk00ULu7U3nz+XZ/Sdc0ZY3IvqGqMcytuGW6eCf6NdL/wxHQg+oBRfgEOCDj44LF74YNAQIED7p52Z/2Yt0PbmGKsxp9LlfLhiOjbApeBrN1bAF8Xv27ooPUtbgPR8kH6kJ46qlDZD+coFay3vYZnQ/pHmq1E9sFrHLnrFAC0FRt0rSzeRupbQbcKGpMsCZN3WkQW7D40+R6rK2Avotaf64D5jOFai9GDXBIQwbCskg95DNuwysmDvQmPSW2VFalhBr4fwOGafzWAcyzkk4pEUiodDRqJSkpKddzTq2xA1WC7inHKdTSBOw8RhalKKN1+NlIgrYwfNECqN50lIcioFrIKLIblcBdWcikUSPonmeXVecjIZ9kZJEpUCOLrBQUR4iBQkNhzEkFBRItX5eY6+j2+DUAaTE+Fixn4ECQhHg1k6lCpJSgpktUaZamxbHqIxBCUNj0eCSBwVBagKXIhczKhA6vC1WIgELwmdI6WWJ5mmkWk1SfXrFEtZesxOFG5QI0WOEk3U6DL2WiQeIBZxA1RqfjYKIvkADfKHFIwSuVXyAR8ioeyRIf6rs6N2W1KkpAczAAAAAAA=') format('woff2'),
			url('//at.alicdn.com/t/font_1334383_zv3tk6gu7hn.woff?t=1564990171531') format('woff'),
			url('//at.alicdn.com/t/font_1334383_zv3tk6gu7hn.ttf?t=1564990171531') format('truetype'),
			/* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
			url('//at.alicdn.com/t/font_1334383_zv3tk6gu7hn.svg?t=1564990171531#iconfont') format('svg');
		/* iOS 4.1- */
	}

	.iconfont {
		font-family: "iconfont" !important;
		font-size: 32rpx;
		font-style: normal;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	.icontab_bar_optional_se:before {
		content: "\e669";
	}

	.icontab_bar_mine_select:before {
		content: "\e66a";
	}

	.icontab_bar_market_sele:before {
		content: "\e668";
	}

	.icontab_bar:before {
		content: "\e633";
	}

	.iconfanhui:before {
		content: "\e602";
	}


	.tabbar {
		display: flex;
		justify-content: space-around;
		/* height: 8vh; */
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 100;
		height: 120rpx;
		background-color: #ffffff;
		border-top: 1px solid rgba(193, 192, 201, 0.5);
	}

	.tabbar-item {
		flex: 1;
		text-align: center;
		color: #c1c0c9;
		padding: 15upx 0;
		position: relative;
	}

	.tabbar-item.active {
		color: #fe8b1e;
	}
	.tabbar-item.big{
		position: relative;
		top: -60rpx;
		font-size: 130%;
		background: #000;
		border-radius: 50%;
		overflow: hidden;
		border: 1px solid;
	}
	.tabbar-icon {
		width: 60upx;
		height: 60upx;
		display: block;
		margin: 0 auto;
		margin-bottom: 1vw;
		font-size: 60rpx;
		line-height: 1em;
	}

	.tabbar-text {
		font-size: 20upx;
		letter-spacing: 0;
		text-align: center;
		line-height: 11px;
		display: block;
	}

	.tabbar-item-num {
		position: absolute;
		top: 1vw;
		font-size: 20upx;
		padding: 4upx;
		border-radius: 50%;
		background-color: #ff4a39;
		color: #ffffff;
		width: 28upx;
		height: 28upx;
		text-align: center;
		line-height: 28upx;
		left: 45upx;
		margin: auto;
		right: 0;
	}
</style>
