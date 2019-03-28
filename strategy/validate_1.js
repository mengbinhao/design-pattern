//only one rule validate for one DOM
let strategies = {
	isNonEmpty(value, errMsg) {
		if (value === '') {
			return errMsg
		}
	},
	minLength(value, length, errMsg) {
		if (value.length < length) {
			return errMsg
		}
	},
	isMobile(value, errMsg) {
		if (!(/^1\d{10}$/).test(value)) {
			return errMsg
		}
	}
}


let Validator = function() {
	this.rules = []
}

Validator.prototype.add = function(dom, rule, errMsg) {
	let ary = rule.split(':')
	this.rules.push(function() {
		let strategy = ary.shift()
		ary.unshift(dom.value)
		ary.push(errMsg)
		return strategies[strategy].apply(dom, ary)
	})
}

Validator.prototype.start = function() {
	let errMsgs = []
	for (let i = 0, validatorFun; validatorFun = this.rules[i++];) {
		let msg = validatorFun()
		if (msg) {
			errMsgs.push(msg)
		}
	}
	return errMsgs
}

