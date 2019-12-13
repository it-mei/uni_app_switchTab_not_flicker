<template>
	<view class="container">
		<mrhardNavigate fontColor="#ffffff" bgColor="#000000" navigateTitle="left2页面"></mrhardNavigate>
		首页，left2页面的
	</view>
</template>

<script>
import mrhardNavigate from '@/components/mrhard-navigate/mrhard-navigate.vue';
export default {
	data() {
		return {};
	},
	methods: {
		onLoadBf() {
			console.log('执行了left2的onLoadBf');
		},
		onShowBf() {
			console.log('执行了left2的onShowBf');
		}
	},
	components: {
		mrhardNavigate
	}
};
</script>

<style></style>
