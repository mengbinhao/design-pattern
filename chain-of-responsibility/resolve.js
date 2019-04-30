var order500 = function(orderType, pay, stock) {
	if (orderType === 1 && pay === true) {
		console.log('500元定金已支付,获得100优惠券')
	} else {
		order200(orderType, pay, stock)
	}
}

var order200 = function(orderType, pay, stock) {
	if (orderType === 2 && pay === true) {
		console.log('200元定金已支付,获得50优惠券')
	} else {
		orderNormal(orderType, pay, stock)
	}
}

var orderNormal = function(orderType, pay, stock) {
	if (stock > 0) {
		console.log('普通购买,无优惠券')
	} else {
		console.log('手机库存不足')
	}
}

order500(1, true, 500)
order500(1, false, 500)
order500(2, true, 500)
order500(2, false, 500)
order500(3, false, 0)