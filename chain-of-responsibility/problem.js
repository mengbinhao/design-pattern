var order = function(orderType, pay, stock) {
	if (orderType === 1) {
		if (pay === true) {
			console.log('500元定金已支付,获得100优惠券')
		} else {
			if (stock > 0) {
				console.log('普通购买,无优惠券')
			} else {
				console.log('手机库存不足')
			}
		}
	} else if (orderType === 2) {
		if (pay === true) {
			console.log('200元定金已支付,获得50优惠券')
		} else {
			if (stock > 0) {
				console.log('普通购买,无优惠券')
			} else {
				console.log('手机库存不足')
			}
		}
	} else if (orderType === 3) {
		if (stock > 0) {
			console.log('普通购买,无优惠券')
		} else {
			console.log('手机库存不足')
		}
	}
};

order(1, true, 500)