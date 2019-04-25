//可以简化
//不需要提供对外的接口
let myImg = (function() {
	let img = document.createElement('img')
	document.body.appendChild(img)

	return function(src) {
		img.src = src
	}
})()

let proxyImg = (function() {
	let img = new Image
	img.onload = function() {
		//cb so here this is img
		myImg(this.src)
	}

	return function(src) {
		myImg('loading.gif')
		img.src = src
	}
})()