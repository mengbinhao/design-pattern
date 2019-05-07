Function.prototype.before = function(beforefn) {
	let fn = this
	return function() {
		beforefn.apply(this, arguments)
		return fn.apply(this, arguments)
	}
}

Function.prototype.after = function(afterfn) {
	let fn = this
	return function() {
		let ret = fn.apply(this, arguments)
		afterfn.apply(this, arguments)
		return ret
	}
}

Function.prototype.around = function(beforeFun, afterFun) {
	var fn = this
	return function() {
		return fn.before(beforeFun).after(afterFun).apply(this, arguments)
	}
}