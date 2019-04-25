let plane = {
	fire() {
		console.log('fire')
	}
}

let missileDecorator = function() {
	console.log('missile fire')
}

let atomDecorator = function() {
	console.log('atom fire')
}

let fire1 = plane.fire

plane.fire = function() {
	fire1()
	missileDecorator()
}

let fire2 = plane.fire

plane.fire = function() {
	fire2()
	atomDecorator()
}

plane.fire()