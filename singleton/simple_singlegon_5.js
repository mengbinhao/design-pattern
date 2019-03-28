// final common lazy Singleton
let getSingleInstance = function (fn) {
	let result
	return function () {
		return result || (result = fn.apply(this, arguments))
	}
}

let createLoginLayer = function () {
	let div = document.createElement('div')
	div.innerHTML = 'this is login window'
	div.style, dispaly = 'none'
	document.body.appendChild(div)
	return div
}

let cerateSingleLoginLayer = getSingleInstance(createLoginLayer)

document.getElementById('loginBtn').addEventListener('click', function () {
	let loginLayer = cerateSingleLoginLayer()
	loginLayer.style.display = 'block'
})

let createSingelFrame = getSingleInstance(function () {
	let frame = document.createElement('frame')
	document.body.appendChild(frame)
	return frame
})

document.getElementById('frameBtn').addEventListener('click', function () {
	let frame = createSingelFrame()
	frame.src = 'http://jack.com'
})