//音频资源
import resourecs from './musicResourecs.js'
let music = resourecs.musicResourecs;

let audio;

export default {
	state: {

	},
	getters: {

	},
	mutations: {
		//监听
		addAudioEvent() {
			//播放事件
			audio.onPlay(() => {
				console.log('开始播放');
			})
			//暂停事件
			audio.onPause(() => {
				console.log('暂停播放');
			})
			//停止事件
			audio.onStop(() => {
				console.log('停止播放');
			})
			//播放结束事件
			audio.onEnded(() => {
				console.log('播放结束');
			})
			//播放错误事件
			audio.onError((res) => {
				console.log(res.errMsg);
				console.log(res.errCode);
			})
			// onTimeUpdate		
		},
		//销毁 依次取消监听
		destruction() {
			audio.offPlay();
			audio.offPause();
			audio.offStop();
			audio.offEnded();
			audio.offError()

		}
	},
	actions: {
		init({
			commit
		}) {
			//判断是否有音频
			if (audio) {
				return
			}
			audio = uni.createInnerAudioContext(); //实例化audio对象
			commit('addAudioEvent')
		}
	}
}
