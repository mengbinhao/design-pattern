var Chain = function(fn) {
	this.fn = fn
	this.successor = null
}

Chain.prototype.setNextSuccessor = function(successor) {
	return this.successor = successor
}

Chain.prototype.passRequest = function() {
	var ret = this.fn.apply(this, arguments)
	if (ret === 'nextSuccessor') {
		return this.successor && this.successor.passRequest.apply(this.successor, arguments)
	}
	return ret
}

Chain.prototype.next = function() {
	return this.successor && this.successor.passRequest.apply(this.successor, arguments)
}

var f1 = new Chain(function() {
	console.log(1)
	return 'nextSuccessor'
})

var f2 = new Chain(function() {
	console.log(2)
	setTimeout(() => {
		this.next()
	}, 1000)
})

var f3 = new Chain(function() {
	console.log(3)
})

f1.setNextSuccessor(f2).setNextSuccessor(f3)
f1.passRequest()





