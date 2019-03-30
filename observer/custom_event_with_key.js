let salesOffice = {}

salesOffice.clientList = {}

salesOffice.listen = function(key, fn) {
	if (!this.clientList[key]) {
		this.clientList[key] = []
	}
	this.clientList[key].push(fn)
}

salesOffice.trigger = function() {
	let key = Array.prototype.shift.call(arguments)
			fns = this.clientList[key]
	if (!fns || fns.length === 0) return
	for (let i = 0, fn; fn = fns[i++];) {
		fn.apply(this, arguments)
	}
}

salesOffice.listen('squareMeter88', function (price) {
	console.log(`squareMeter88_price = ${price}`)
})

salesOffice.listen('squareMeter120', function (price) {
	console.log(`squareMeter120_price = ${price}`)
})

salesOffice.trigger('squareMeter88', 20000)
salesOffice.trigger('squareMeter88', 15000)
salesOffice.trigger(30000)
