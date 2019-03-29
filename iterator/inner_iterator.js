//iterator rule has already defined
let each = function(arr, cb) {
	for (let i = 0, len = arr.length; i < len; i++) {
		cb.call(arr[i], i, arr[i])
	}
}

console.log(each([1,2,3], function(index, val) {
	console.log(index + '-' + val)
}))
