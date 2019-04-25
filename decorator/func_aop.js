var before = function(beforefn, fn) {
	return function() {
		beforefn.apply(this, arguments)
		fn.apply(this, arguments)
	}
}

var a = before(
	function(){console.log('1')},
	function() {console.log('2')}
)

a = before(a, function() {console.log(3)})

a()