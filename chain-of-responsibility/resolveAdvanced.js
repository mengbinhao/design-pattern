var order500 = function(orderType, pay, stock) {
	if (orderType === 1 && pay === true) {
		console.log('500元定金已支付,获得100优惠券')
	} else {
		return 'nextSuccessor'
	}
}

var order200 = function(orderType, pay, stock) {
	if (orderType === 2 && pay === true) {
		console.log('200元定金已支付,获得50优惠券')
	} else {
		return 'nextSuccessor'
	}
}

var orderNormal = function(orderType, pay,stock) {
	if (stock > 0) {
		console.log('普通购买,无优惠券')
	} else {
		console.log('手机库存不足')
	}
}

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

var chinaOrder500 = new Chain(order500)
var chinaOrder200 = new Chain(order200)
var chinaOrderNormal = new Chain(orderNormal)

chinaOrder500.setNextSuccessor(chinaOrder200)
chinaOrder200.setNextSuccessor(chinaOrderNormal)

chinaOrder500.passRequest(1, true, 500)
chinaOrder500.passRequest(2, true, 500)
chinaOrder500.passRequest(3, true, 500)
chinaOrder500.passRequest(1, false, 0)

// var order300 = function() {

// }
// var chinaOrder300 = new Chain(order300)
// chinaOrder500.setNextSuccessor(chinaOrder300)
// chinaOrder300.setNextSuccessor(chinaOrder200)

