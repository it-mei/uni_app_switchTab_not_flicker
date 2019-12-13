<template>
	<view class="container">
		<mrhardNavigate  fontColor="#ffffff" bgColor="#000000" navigateTitle="首页"></mrhardNavigate>
		<text>首页，index页面的</text>
	</view>
</template>

<script>
	import mrhardNavigate from '@/components/mrhard-navigate/mrhard-navigate.vue'
	export default {
		data(){
			return {
				index:'index'
			}
		},
		methods:{
			onLoadBf() {
				console.log('执行了index的onLoadBf')
			},
			onShowBf() {
				console.log('执行了index的onShowBf')
			},
			onHideBf(){
				console.log('index 被隐藏了')
			}
		},
		components:{
			mrhardNavigate
		}
	}
</script>

<style>
</style>
