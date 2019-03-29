//iterator has to involke obviously
let Iterator = function(obj) {
	let current = 0

	let next = function() {
		current++
	}

	let getCurrent = function() {
		return obj[current]
	}

	let isDone = function() {
		return current >= obj.length
	}

	return {
		next,
		isDone,
		getCurrent,
		length:　obj.length
	}
}

let compare = function(iterator1, iterator2) {
	if (iterator1.length !== iterator2.length) return
	while (!iterator1.isDone() && !iterator2.isDone()) {
		if (iterator1.getCurrent() !== iterator2.getCurrent()) {
			throw new Errow('not equal')
		}
		iterator1.next()
		iterator2.next()
	}
	console.log('equal')
}

let iterator1 = Iterator([1,2,3])
let iterator2 = Iterator([1,2,3])

compare(iterator1, iterator2)