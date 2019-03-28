let PerformanceS = function(){}

PerformanceS.prototype.calculate = function(salary) {
	return salary * 5
}

let PerformanceA = function(){}

PerformanceA.prototype.calculate = function(salary) {
	return salary * 4
}

let PerformanceB = function(){}

PerformanceB.prototype.calculate = function(salary) {
	return salary * 3
}

let Bouns = function() {
	this.salary = null
	this.strategy = null
}

Bouns.prototype.setSalary = function (salary) {
	this.salary = salary
}

Bouns.prototype.setStrategy = function (strategy) {
	this.strategy = strategy
}

Bouns.prototype.getBouns = function() {
	if (!this.strategy) {
		throw new Error('not exist strategy')
	}
	return this.strategy.calculate(this.salary)
}

let bouns = new Bouns()
bouns.setSalary(10000)
bouns.setStrategy(new PerformanceA())
console.log(bouns.getBouns())

bouns.setStrategy(new PerformanceB())
console.log(bouns.getBouns())
