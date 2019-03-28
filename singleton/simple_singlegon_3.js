// not single responsibility

// transparent Singleton
let CreateDiv = (function () {
	let instance = null

	let CreateDiv = function(html) {
		if (!instance) {
			this.html = html
			this.init()
			return instance = this
		}
		return instance
	}

	CreateDiv.prototype.init = function() {
		let div = document.createElement('DIV')
		div.innerHTML = this.html
		document.body.appendChild(div)
	}

	return CreateDiv
})()

let s1 = new CreateDiv('lala')
let s2 = new CreateDiv('lolo')
console.log(s1 === s2)
