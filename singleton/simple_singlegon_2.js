// 1 the user has to know this is a Single class
// 2 the user has to know Singleton.getInsetance method

// use closure to implement Singleton
let Singleton = function (name) {
	this.name = name
}

Singleton.getInsetance = ((name) => {
	let instance = null
	return function() {
		if (!instance) {
			return instance = new Singleton(name)
		}
		return instance
	}
})()

let s1 = Singleton.getInsetance('lala')
let s2 = Singleton.getInsetance('lolo')
console.log(s1 === s2)
