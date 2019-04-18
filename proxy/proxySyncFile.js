let syncFiles = (id) => {
	console.log(`starting sync ${id}`)
}

let proxySyncFile = (function() {
	let cache = [], timer

	return function(id) {
		cache.push(id)
		if (timer) return
		timer = setTimeout(function() {
			syncFiles(cache.join(','))
			//clear work
			clearTimeout(timer)
			timer = null
			cache.length = 0
		}, 2000)
	}
})()