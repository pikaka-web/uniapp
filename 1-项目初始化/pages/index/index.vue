<template>
	<view class="content">
		<view :style="{height:`${statusBarHeight}px`}"></view>
		sdasdasd
	</view>
</template>

<script>
	//设置占位符
	//getSystemInfoSync 获取系统信息API
	//var statusBarHeight = uni.getSystemInfoSync().statusBarHeight;
	export default {
		data() {
			return {
				statusBarHeight:this.$statusBarHeight
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
</style>
