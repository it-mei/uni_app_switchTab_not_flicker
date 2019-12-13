<template>
	<view class="navigate-bar" :style="{'background':bgColor||'transparent'}">
		<!-- #ifndef MP-ALIPAY -->
		<view class="back-btn" :style="{color:fontColor||'#ffffff'}" @click="navigateBack">
			<block v-if="navigateBackText">
				{{navigateBackText}}
			</block>
			<block v-else>
				<text v-if="pageNum>1||showBackBtn||costomBackFunction" class="iconfont icon-fanhui"></text>
			</block>
		</view>
		<view class="navigate-title" :style="{color:fontColor||'#ffffff'}" @click="navigateClick">
			{{navigateTitle||navigateText}}
		</view>
		<view class="right-btn">
			
		</view>
		<!-- #endif -->
	</view>
</template>

<script>
	export default {
		name:"mrhard-navigate",
		data() {
			return {
				
			};
		},
		props:[
			'navigateTitle',//标题名
			'fontColor',//文字颜色
			'bgColor',//背景颜色
			'navigateClickCallback',//点击标题事件后，触发的事件
			'showBackBtn',//是否展示返回按钮
			'costomBackFunction',//是否自定义返回事件
			'navigateBackText',//自定义返回文字
			'navigateBackCallback',//点击返回按钮后，触发的事件，优先取这个事件，未传入，则显示返回键
		],
		computed: {
			navigateText() {//计算属性取全局的标题设置
				if(this.$store&&this.$store.state&&this.$store.state.mrhard&&this.$store.state.mrhard.domData){
					return this.$store.state.mrhard.domData.navigateText 
				}else{
					return ""
				}
			},
			pageNum(){
				return getCurrentPages().length||1
			}
		},
		methods:{
			navigateClick(){
				this.$emit('navigateClickCallback');
			},
			navigateBack(){//点击返回按钮触发的事件
				if(this.costomBackFunction){//如果注入返回事件，则回调页面navigateBackCallback
					this.$emit('navigateBackCallback');
				}else{//否则触发返回
					uni.navigateBack()
				}
			}
		}
	}
</script>

<style lang="scss">
	@font-face {font-family: "iconfont";
	  src: url('https://at.alicdn.com/t/font_1313943_9h950n8d7gk.eot?t=1564136606309'); /* IE9 */
	  src: url('https://at.alicdn.com/t/font_1313943_9h950n8d7gk.eot?t=1564136606309#iefix') format('embedded-opentype'), /* IE6-IE8 */
	  url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAALkAAsAAAAABpwAAAKXAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDBgp8gQIBNgIkAwwLCAAEIAWEbQc9G88FEdWTO2R/TFBz7GHzHqjUMuRSNaBBNU+wy+MEVLbf+vZ05AR0tUW4/k86OGk5g2WCp//92p038wRxiWRp1E143VCIZkkbhAqJEAmFfzrmibiVv7Xp176wXRGGKTlP/dSs5HlW/kLoELZKNgAIgMvdj6Vv/G9lYTwXQbbBogBDGNspJ5BppgkHIG2BhRd4AgSM5UDdfwNs6CpPha/w+vVPz2z8BARAzCEDNZ/nmnoJdCC3+DabW5UFRcXzSMAJDjQyyTaRgfgG3UWMSPxqMwSU6zZJGmWrLTGglwBZ+WlfsjyMZfFEhJGJMdnipXDj7hjO+fflLS/B8REwsDBpjszeXHZzrFICL4hwugcKJoFBOqORRUoyTpXrbT49MMKd5X8ub43hpX88B0mB3EoAo2HU4cdiCQQ/+yk4AAogyFg7GInYxqcJV5qtf810sdfiLo+vdxu74mn3akPVpFiPpv+uvX4Dkvyeei4Dj/33IHWv389+P/7lmQpATtt0l/9ubdINI0Cwfi60GpZSRQzgvioJ3DljvZn0XqvgPylW1lirAiaNazmW9zZVvzPsQHlrJw846r3sNzatzgWRNGk4URdUMkgaOwmvwhSCZAblJsxNr9BgjZK4AOOOAohaN3Cq3ULVykhjn+E1+0NQm6LcfIAFKwwHe0uwVuyg+YJveSFkUSvyr+i2qRZTxfknyur9kMWpG7/ggnLGkPXlclUCEp6hDLbDaWIIwgO2GveqoUgSGntT3PJsrCFYK3bQfMG3vBBtrtb7/BXdNtUyU7CRfqKsvnXI4nQFedEvqwq+5Zr15XJVAhKeoQza4TQxhPF2A7Ya9ztCoUhgI1qrj+83zh9QlpUATrJzomJE9dJv3u4X2aKWw9cYAAA=') format('woff2'),
	  url('https://at.alicdn.com/t/font_1313943_9h950n8d7gk.woff?t=1564136606309') format('woff'),
	  url('https://at.alicdn.com/t/font_1313943_9h950n8d7gk.ttf?t=1564136606309') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
	  url('https://at.alicdn.com/t/font_1313943_9h950n8d7gk.svg?t=1564136606309#iconfont') format('svg'); /* iOS 4.1- */
	}
	
	.iconfont {
		font-family: "iconfont" !important;
		font-size: 16px;
		font-style: normal;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}
	.icon-fanhui:before {
		content: "\e60a";
	}
	/* #ifndef MP-ALIPAY */
		.navigate-bar{
			position: relative;
			left: 0;
			right: 0;
			// top: 24rpx;
			// padding-bottom: 24rpx;
			letter-spacing: 1rpx;
			width: 100%;
			height: 160rpx;
			line-height: 160rpx;
			font-size: 34rpx;
			z-index: 1;
			display: flex;
			justify-content: space-between;
			align-items: center;
			.navigate-title{
				flex: 1;
				text-align: center
			}
			.back-btn,.right-btn{
				padding: 0 24rpx;
				font-size: 32rpx;
				width: 200rpx;
				text-align: left;
			}
			.back-btn{
				.icon-fanhui{
					font-size: 32rpx;
				}
			}
		}
	/* #endif */
</style>
