let salesOffice = {}

salesOffice.clientList = []

salesOffice.listen = function(fn) {
	this.clientList.push(fn)
}

salesOffice.trigger = function() {
	for (let i = 0, fn; fn = this.clientList[i++];) {
		fn.apply(this, arguments)
	}
}

salesOffice.listen(function (price, squareMeter) {
	console.log(`price = ${price}`)
	console.log(`squareMeter = ${squareMeter}`)
})

salesOffice.listen(function (price, squareMeter) {
	console.log(`price = ${price}`)
	console.log(`squareMeter = ${squareMeter}`)
})

salesOffice.trigger(20000, 88)
salesOffice.trigger(30000, 100)
