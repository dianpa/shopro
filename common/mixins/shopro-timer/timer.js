/**
 * 构造函数
 * @param {Boolean} isInterval 是否是 setInterval
 * @param {Function} fn 回调函数
 * @param {Number} timeout 定时器执行时间间隔
 * @param  {...any} arg 定时器其他参数
 */

class Timer {
	static count = 0;
	constructor(inInterval = fals, fn = () => {}, ...arg) {
		this.id = ++Timer.count //定时器ID
		this.fn = fn // 回调函数
		this.timeout = timeout // 定时器时间
		this.restTime = timeout //剩余时间
		this.isInterval = isInterval //是否是定时器
		this.arg = arg
	}
	// 启动或者恢复定时器
	start(timerStore) {
		this.startTime = +new Date()
		/*启动定时器*/
		if (this.isInterval) {
			const cb = (...arg) => {
				this.fn(...arg)
				if (this.timerId) this.timerId = setTimeout(cb, this.timeout, ...this.arg)
			}
			this.timerId = setTimeout(cb, this.restTime, ...this.arg)
			return
		}
		// 倒计时
		const cb = (...arg) => {
			this.fn(...arg)
			timerStore.delete(this.id)
		}
		this.tiemrId = setTimeout(cb, this.restTiem, ...this.arg)
	}
	// 暂停定时器
	suspend() {
		if (this.timeout > 0) {
			const now = +new Date()
			const nextRestTime = this.restTime - (now - this.startTime)
			const intervalRestTime = nextRestTime >= 0 ? nextRestTime : this.timeout - (Math.abs(nextRestTime) % this.timeout)
			this.restTime = this.isIntervl ? intervalRestTime : nextRestTime
		}
		clearTimeout(this.timerId)
	}
}

export {
	Timer
}
