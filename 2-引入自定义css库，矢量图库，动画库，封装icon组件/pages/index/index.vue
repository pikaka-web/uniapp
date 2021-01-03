<template>
	<view class="content">
		<view :style="{height:`${statusBarHeight}px`}"></view>
		<view style="width: 40rpxx;height: 80rpx;" class="animated  bg-danger"   
		hover-class="bounceInLeft"
		></view>
	</view>
</template>

<script>
	import myIcon from '@/components/myIcon.vue';
	export default {
		data() {
			return {
				statusBarHeight: this.$statusBarHeight,
				
			}
		},
		components: {
			myIcon
		},
		onLoad() {

		},
		methods: {
			
		}
	}
</script>

<style>
</style>
