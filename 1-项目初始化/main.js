import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'
//全局设置占位符
Vue.prototype.$statusBarHeight = uni.getSystemInfoSync().statusBarHeight;

const app = new Vue({
    ...App
})
app.$mount()
