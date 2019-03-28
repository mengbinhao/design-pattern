
//恶汉
let loginLayer = (function() {
	let div = document.createElement('div')
	div.innerHTML = 'this is login window'
	div.style,dispaly = 'none'
	document.body.appendChild(div)
	return div
})()

document.getElementById('loginBtn').addEventListener('click', function() {
	loginLayer.style.display = 'block'
})

//懒汉
let createLoginLayer = (function() {
	let div
	return function() {
		if (!div) {
			div = document.createElement('div')
			div.innerHTML = 'this is login window'
			div.style,dispaly = 'none'
			document.body.appendChild(div)
		}
		return div
	}
})()

document.getElementById('loginBtn').addEventListener('click', function() {
	let loginLayer = createLoginLayer()
	loginLayer.style.display = 'block'
})
