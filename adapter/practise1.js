var googleMap = {
	show() {
		console.log('googleMap')
	}
}

var baiduMap = {
	display() {
		console.log('baiduMap')
	}
}

var renderMap = function (map) {
	if (map.show instanceof Function) {
		map.show()
	}
}

var baiduAdapter = {
	show() {
		return baiduMap.display()
	}
}

renderMap(googleMap)
renderMap(baiduAdapter)