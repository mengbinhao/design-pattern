var Beverage = function(param) {
	var boilWater = function() {
		console.log('boil the water')
	}

	var brew = param.brew || function() {
		throw new TypeError('sub class need to overried')
	}

	var pourInCup = param.pourInCup || function() {
		throw new TypeError('sub class need to overried')
	}

	var addCondiments = param.addCondiments || function() {
		throw new TypeError('sub class need to overried')
	}

	var F = function() {}
	F.prototype.init = function() {
		boilWater()
		brew()
		pourInCup()
		addCondiments()
	}
	return F
}

var Coffee = Beverage({
	brew() {
		console.log('brew coffee')
	},
	pourInCup() {
		console.log('pour coffee')
	},
	addCondiments() {
		console.log('add sugar and milk')
	}
})

var coffee = new Coffee()
coffee.init()