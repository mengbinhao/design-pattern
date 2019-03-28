// 1 the user has to know this is a Single class
// 2 the user has to know Singleton.getInsetance method

let Singleton = function (name) {
	this.name = name
}

Singleton.instance = null

Singleton.getInsetance = (name) => {
	if (!this.instance) {
		return this.instance = new Singleton(name)
	}
	return this.instance
}

let s1 = Singleton.getInsetance('lala')
let s2 = Singleton.getInsetance('lolo')
console.log(s1 === s2)
