let mult = function() {
	let retsul = 1
	for (let i = 0, len = arguments.length; i < len; i++) {
		retsul *= arguments[i]
	}
	return retsul
}

let plus = function() {
	let result = 0
	for (let i = 0, len = arguments.length; i < len; i++) {
		result += arguments[i]
	}
	return result
}

let createProxyFactory = function(fn) {
	let cache = {}
	return function() {
		let args = Array.prototype.join.call(arguments, ',')
		if (args in cache) {
			return cache[args]
		}
		return cache[args] = fn.apply(this, arguments)
	}
}

let proxyMult = createProxyFactory(mult)
let proxyPlus = createProxyFactory(plus)

console.log(proxyMult(2,3,4))
console.log(proxyMult(2,3,4))
console.log(proxyPlus(2,3,4))
console.log(proxyPlus(2,3,4))
