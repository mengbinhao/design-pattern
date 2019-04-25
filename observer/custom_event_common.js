// 1 每个发布者对象都增加clientList、trigger、remove，资源浪费
// 2 订阅者需要知道售楼处对象叫salesOffice
let Observer = {
	clientList: {},
	listen(key, fn) {
		if (!this.clientList[key]) {
			this.clientList[key] = []
		}
		this.clientList[key].push(fn)
	},
	trigger() {
		let key = Array.prototype.shift.call(arguments)
				fns = this.clientList[key]

		if (!fns || fns.length === 0) return

		for (let i = 0, fn; fn = fns[i++];) {
			fn.apply(this, arguments)
		}
	},
	remove(key, fn) {
		let fns = this.clientList[key]
		if (!fns) return

		//if not pass fn means delete all this type of fns
		if (!fn) {
			fns && fns.length === 0
		} else {
			//bug~~~~~~~~~~~~~~~~~~~~~~~~~~~~`
			// for (let i = 0, _fn; _fn = fns[i++];) {
			// 	if (_fn === fn) {
			// 		fns.splice(_fn, 1)
			// 		//return
			// 	}
			// }
			// desc不会出现上面asc的动态变化程度的问题
			for (let len = fns.length - 1; len >= 0; len--) {
				if (fns[len] === fn) {
					fns.splice(fn, 1)
					//return
				}
			}
		}
	}
}

let installObserver = function(obj) {
	for (let key in Observer) {
		obj[key] = Observer[key]
	}
}

let salesOffice = {}

installObserver(salesOffice)

let fn = function(price) {
	console.log(`${price}`)
}

salesOffice.listen('squareMeter88', fn)

salesOffice.listen('squareMeter88', fn)

salesOffice.trigger('squareMeter88', 20000)

salesOffice.remove('squareMeter88', fn)

salesOffice.trigger('squareMeter88', 20000)