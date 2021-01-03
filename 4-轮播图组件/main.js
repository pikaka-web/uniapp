import Vue from 'vue'
import App from './App'
import myIcon from './components/myIcon.vue';

Vue.config.productionTip = false

App.mpType = 'app'
Vue.prototype.$statusBarHeight = uni.getSystemInfoSync().statusBarHeight;
Vue.component('myIcon',myIcon)

const app = new Vue({
	...App
})
app.$mount()
