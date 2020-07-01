import {
	Timer
} from './timer'
import {
	TimerStore
} from './timer-store'
export default {
	created() {
		this.$timerStore = new TimerStore()
	},
	beforeDestroy() {
		this.$timerStore.hide()
	},
	onShow() {
		this.$timerStore.show()
	},
	onHide() {
		this.$timerStore.hide()
	},
	methods: {
		$setTimeout(fn = () => {}, timeout = 0, ...arg) {
			const timer = new Timer(false, fn, timeout, ...arg)
			return this.$timerStore.addTimer(timer)
		},
		$setInterval(fn = () => {}, timeout = 0, ...arg) {
			const timer = new Timer(true, fn, timeout, ...arg)
			return this.$timerStore.addTimer(timer)
		},
		$clearInterval(id) {
			this.$timerStore.clear(id)
		},
		$clearTimeout(id) {
			this.$timerStore.clear(id)
		},
	}
};
