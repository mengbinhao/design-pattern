let plane = function(){}

plane.prototype.fire = function() {
	console.log('fire')
}

let missileDecorator = function(plane) {
	this.plane = plane
}

missileDecorator.prototype.fire = function() {
	this.plane.fire()
	console.log('missileDecorator')
}

let atomDecorator = function(missileDecorator) {
	this.missileDecorator = missileDecorator
}

atomDecorator.prototype.fire = function() {
	this.missileDecorator.fire()
	console.log('atomDecorator')
}

let p = new plane()
let m = new missileDecorator(p)
let a = new atomDecorator(m)
a.fire()