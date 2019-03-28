//add muti rules validate for one DOM
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

Validator.prototype.add = function(dom, rules) {
	let _this = this
	for (let i = 0, rule; rule = rules[i++];) {
		(function(rule) {
			let strategyArg = rule.strategy.split(':')
			let errMsg = rule.errMsg
			_this.rules.push(function() {
				let strategy = strategyArg.shift()
				strategyArg.unshift(dom.value)
				strategyArg.push(errMsg)
				return strategies[strategy].apply(dom, strategyArg)
			})
		})(rule)
	}
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

