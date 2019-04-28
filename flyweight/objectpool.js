var objectPoolFactory = function(createObjFn) {
	var objectPool = []
	return {
		create() {
			var obj = objectPool.length === 0 ? createObjFn.apply(this, arguments) : objectPool.shift()
			return obj
		},
		recover(obj) {
			objectPool.push(obj)
		}
	}
}