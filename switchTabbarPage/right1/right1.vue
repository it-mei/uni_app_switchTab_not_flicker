<template>
	<view class="container">
		<mrhardNavigate fontColor="#ffffff" bgColor="#000000" navigateTitle="right1页面"></mrhardNavigate>
		首页，right1页面的
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
			console.log('执行了right1的onLoadBf');
		},
		onShowBf() {
			console.log('执行了right1的onShowBf');
		}
	},
	components: {
		mrhardNavigate
	}
};
</script>

<style></style>
