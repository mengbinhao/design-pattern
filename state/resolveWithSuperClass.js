var State = function() {}

State.prototype.buttonWasPressed = function() {
	throw new TypeError('buttonWasPressed has to be overried')
}

var SuperStringLightState = function(light) {
	this.light = light
}

SuperStringLightState.prototype = new State()

SuperStringLightState.prototype.buttonWasPressed = function() {
	console.log('off light')
	this.light.setState(this.light.offLightState)
}