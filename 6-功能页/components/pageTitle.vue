<template>
	<view>
		<view :style="{height:`${statusBarHeight}px`}" class="bg-white"></view>
		<view :style="{height:`${statusBarHeight}px`}" class="fixed-top bg-white"></view>
		<view class="flex align-center">
			<my-icon iconId="icon-jiantou-copy" class="mx-2" @my-click="quit"></my-icon>
			<view class="font-lg"><slot></slot></view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				statusBarHeight:this.$statusBarHeight
			};
		},
		methods: {
			quit() {
				uni.navigateBack({
					delta: 1
				});
			}
		},
	}
</script>

<style>

</style>
