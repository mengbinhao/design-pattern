let plane = {
	fire() {
		console.log('fire')
	}
}

plane.fire()

let missileDecorator = function() {
	console.log('missile fire')
}

let fire1 = plane.fire

plane.fire = function() {
	fire1()
	missileDecorator()
}

plane.fire()

let fire2 = plane.fire

let atomDecorator = function() {
	console.log('atom fire')
}

plane.fire = function() {
	fire2()
	atomDecorator()
}

plan22问我e.fire()