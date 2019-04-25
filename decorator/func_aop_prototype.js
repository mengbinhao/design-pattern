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