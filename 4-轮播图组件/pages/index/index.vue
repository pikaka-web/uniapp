<template>
	<view class="content">
		<view :style="{height:`${statusBarHeight}px`}"></view>
		<search-box></search-box>
		<rotation-chart :imgArr="swiperImages"></rotation-chart>
	</view>
</template>

<script>
	import searchBox from '@/components/searchBox.vue';
	import rotationChart from '@/components/rotationChart.vue';
	export default {
		data() {
			return {
				statusBarHeight: this.$statusBarHeight,
				swiperImages:[
					{
						src:"/static/swiperImages/swipertab1.png"
					},
					{
						src:"/static/swiperImages/swipertab2.png"
					},
					{
						src:"/static/swiperImages/swipertab3.png"
					},
					{
						src:"/static/swiperImages/swipertab4.png"
					},
					{
						src:"/static/swiperImages/swipertab5.png"
					}
				]
			}
		},
		components: {
			searchBox,
			rotationChart
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
</style>
