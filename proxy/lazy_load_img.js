let myImg = (function() {
	let img = document.createElement('img')
	document.body.appendChild(img)

	return {
		setSrc(src) {
			img.src = src
		}
	}
})()

let proxyImg = (function() {
	let img = document.createElement('img')
	img.onload = function() {
		myImg.setSrc(this.src)
	}

	return {
		setSrc(src) {
			myImg.setSrc('loading.gif')
			img.src = src
		}
	}
})()