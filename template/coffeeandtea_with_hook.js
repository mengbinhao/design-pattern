//add type check
var Beverage = function() {}
Beverage.prototype.boilWater = function() {
	console.log('boil the water')
}

Beverage.prototype.brew = function() {
	throw new TypeError('sub class need to overried')
}

Beverage.prototype.pourInCup = function() {
	throw new TypeError('sub class need to overried')
}

Beverage.prototype.addCondiments = function() {
	throw new TypeError('sub class need to overried')
}

//add condiments as default
Beverage.prototype.customerWantsCondiments = function() {
	return true
}

Beverage.prototype.init = function() {
	this.boilWater()
	this.brew()
	this.pourInCup()
	if (this.customerWantsCondiments()) {
		this.addCondiments()
	}
}

var Coffee = function() {}
Coffee.prototype = new Beverage()
Coffee.prototype.brew = function() {
	console.log('brew coffee')
}
Coffee.prototype.pourInCup = function() {
	console.log('pour coffee')
}
Coffee.prototype.addCondiments = function() {
	console.log('add sugar and milk')
}

var coffee = new Coffee()
coffee.init()

var Tea = function() {}
Tea.prototype = new Beverage()
Tea.prototype.brew = function() {
	console.log('brew tea')
}
Tea.prototype.pourInCup = function() {
	console.log('pour tea')
}
Tea.prototype.addCondiments = function() {
	console.log('add lemon')
}
Tea.prototype.customerWantsCondiments = function() {
	return false
}

var tea = new Tea()
tea.init()