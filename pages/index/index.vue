<template>
	<view class="content">
		<!-- 这里是个公共区域，可以删除，也可以用来每个tabbar页面都显示这个 -->
		<view class="page-container">
			<view class="page-container">
				<view v-for="item in tabBarList" :key="item.tagId" :class="{'hidden':tagId!=item.tagId}"><!--由于小程序不支持动态使用template，所以手动写了下方内容-->
					<index ref="index" v-if="item.pagePath == switchShowPage && item.tagId == 'index'"></index>
					<left1 ref="left1" v-if="item.pagePath == switchShowPage && item.tagId == 'left1'"></left1>
					<left2 ref="left2" v-if="item.pagePath == switchShowPage && item.tagId == 'left2'"></left2>
					<right1 ref="right1" v-if="item.pagePath == switchShowPage && item.tagId == 'right1'"></right1>
					<right2 ref="right2" v-if="item.pagePath == switchShowPage && item.tagId == 'right2'"></right2>
				</view>
			</view>
		</view>
		<mrhardTabbar></mrhardTabbar>
	</view>
</template>

<script>
import mrhardTabbar from '@/components/mrhard-tabbar/mrhard-tabbar.vue';
import index from '@/switchTabbarPage/index/index.vue';
import left1 from '@/switchTabbarPage/left1/left1.vue';
import left2 from '@/switchTabbarPage/left2/left2.vue';
import right1 from '@/switchTabbarPage/right1/right1.vue';
import right2 from '@/switchTabbarPage/right2/right2.vue';


export default {
	data() {
		return {
			title: 'Hello',
			onLoadList: [], //已执行onload周期的组件，因为原生里面，每个tabbar页面的onLoad周期只执行一次
			functionList: [] //待执行事件
		};
	},
	onLoad() {
		//分流onLoad周期
		this.doOnload();
	},
	onShow() {
		//分流onShow周期
		this.doOnshow();
	},
	onPullDownRefresh() {
		//分流刷新方法
		this.onPullDownRefresh();
	},
	components: {
		//将所有原本作为页面的页面，作为一个tabbar页面的组件
		mrhardTabbar,
		index,
		left1,
		left2,
		right1,
		right2
	},
	computed: {
		switchShowPage() {
			//通过计算属性取得应该展示的页面
			return this.$store.state.tabBar.switchShowPage;
		},
		tabBarList() {
			return this.$store.state.tabBar.tabBar.list;
		},
		tagId() {
			//这个标记当前战时的页面
			return this.$store.state.tabBar.tagId;
		}
	},
	methods: {
		doOnload(tagId) {
			//将onload方法，分流给每一个单个的组件
			if (this.onLoadList.indexOf(tagId || this.tagId) == -1) {
				//根据原生的规则，每个tabbar页面的onLoad只会执行一次
				this.onLoadList.push(tagId || this.tagId);
				this.$nextTick(() => {
					this.$nextTick(() => {
						this.$refs[tagId || this.tagId][0].onLoadBf && this.$refs[tagId || this.tagId][0].onLoadBf();
					});
				});
			}
		},
		doOnUnload(tagId) {
			//将onUnload方法，分流给每一个单个的组件
			//根据原生的规则，每个tabbar页面的onLoad只会执行一次
			this.$nextTick(() => {
				this.$nextTick(() => {
					this.$refs[tagId || this.tagId][0].onUnLoadBf && this.$refs[tagId || this.tagId][0].onUnLoadBf();
				});
			});
		},
		doOnHide(tagId) {
			//将onHide方法，分流给每一个单个的组件
			//根据原生的规则，每个tabbar页面的onLoad只会执行一次
			this.$refs[tagId || this.tagId][0].onHideBf && this.$refs[tagId || this.tagId][0].onHideBf();
		},
		doOnshow(tagId) {
			//将onShow方法，分流给每一个单个的组件
			this.$nextTick(() => {
				this.$nextTick(() => {
					this.$refs[tagId || this.tagId][0].onShowBf && this.$refs[tagId || this.tagId][0].onShowBf();
				});
			});
		},
		onPullDownRefresh(tagId) {
			//将下拉刷新方法分流给每个组件，如果组件内有，则调用，没有则停止刷新
			this.$nextTick(() => {
				this.$nextTick(() => {
					(this.$refs[tagId || this.tagId][0].onPullDownRefresh && this.$refs[tagId || this.tagId][0].onPullDownRefresh()) || uni.stopPullDownRefresh();
				});
			});
		}
	},
	watch: {
		tagId(n, o) {
			//tagId变化时候触发，分流给每一个单个的组件
			if (n != o) {
				uni.hideTabBar({
					animation: false
				});
				this.doOnload();
				this.doOnshow();
				this.doOnHide(o);
			}
		}
	}
};
</script>

<style>
.text-area {
	font-size: 24rpx;
	padding: 40rpx;
	text-align: center;
	border: 1px solid #327cc0;
	margin-bottom: 20rpx;
}

.page-container {
	/* border: 1px solid #327cc0; */
}
.page-info {
	font-size: 24rpx;
	padding: 40rpx;
	text-align: center;
}
.hidden{
	overflow: hidden;
}
</style>
