Function.prototype.after = function(afterfn) {
	let fn = this
	return function() {
		let ret = fn.apply(this, arguments)
		afterfn.apply(this, arguments)
		return ret
	}
}

//not single responsibility
// let showLogin = function() {
// 	console.log('open login window')
// 	log(this.getAttribute('tag'))
// }

let showLogin = function() {
	console.log('open login window')
}

let log = function() {
	console.log('loging....')
}

showLogin = showLogin.after(log)

document.querySelector('#btn').onclick = showLogin