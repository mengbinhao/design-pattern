let strategy = {
	s(salary) {
		return salary * 5
	},
	a(salary) {
		return salary * 4
	},
	b(salary) {
		return salary * 5
	}
}

let calculateBouns = function(level, salary) {
	return strategy[level](salary)
}

console.log(calculateBouns('s', 10000))
console.log(calculateBouns('a', 10000))
