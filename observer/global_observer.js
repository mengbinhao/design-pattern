let Observer = (function() {

	let clientList = {},
			listen,
			trigger,
			remove

	listen = function (key, fn) {
		if (!clientList[key]) {
			clientList[key] = []
		}
		clientList[key].push(fn)
	}

	trigger = function () {
		let key = Array.prototype.shift.call(arguments)
				fns = clientList[key]

		if (!fns || fns.length === 0) return

		for (let i = 0, fn; fn = fns[i++];) {
			fn.apply(this, arguments)
		}
	}

	remove = function (key, fn) {
		let fns = clientList[key]
		if (!fns) return

		//if not pass fn means delete all this type of fns
		if (!fn) {
			fns && fns.length === 0
		} else {
			// desc不会出现上面asc的动态变化程度的问题
			for (let len = fns.length - 1; len >= 0; len--) {
				if (fns[len] === fn) {
					fns.splice(fn, 1)
				}
			}
		}
	}

	return {
		listen,
		trigger,
		remove
	}
})()

Observer.listen('squareMeter88', function (price) {
	console.log(`squareMeter88_price = ${price}`)
})

Observer.listen('squareMeter88', function (price) {
	console.log(`squareMeter88_price = ${price}`)
})

Observer.trigger('squareMeter88', 2000)