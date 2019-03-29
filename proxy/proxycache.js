let mult = function() {
	let result = 1
	for (let i = 0, len = arguments.length; i < len; i++) {
		result *= arguments[i]
	}
	return result
}

let proxyMul = (function() {
	let cache = {}
	return function() {
		let args = Array.prototype.join.call(arguments, ',')
		if (args in cache) {
			return cache[args]
		}
		return cache[args] = mult.apply(this, arguments)
	}
})()

console.log(proxyMul(2,3))
console.log(proxyMul(2,3))
