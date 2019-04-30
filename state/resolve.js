var OffLightState = function(light) {
	this.light = light
}

OffLightState.prototype.buttonWasPressed = function() {
	console.log('low light level')
	this.light.setState(this.light.weakLightState)
}

var WeakLightState = function(light) {
	this.light = light
}

WeakLightState.prototype.buttonWasPressed = function() {
	console.log('strong light level')
	this.light.setState(this.light.strongLightState)
}

var StrongLightState = function(light) {
	this.light = light
}

StrongLightState.prototype.buttonWasPressed = function() {
	console.log('off light')
	this.light.setState(this.light.offLightState)
}

var Light = function() {
	this.offLightState = new OffLightState(this)
	this.strongLightState = new OffLightState(this)
	this.strongLightState = new OffLightState(this)
	this.button = null
}

Light.prototype.init = function() {
	var button = document.createElement('DIV'),
			_this = this;

	this.button = document.body.appendChild(button)
	this.button.innerHTML = 'switch'

	this.currentState = this.offLightState

	this.button.onclick = function() {
		_this.currentState.buttonWasPressed()
	}
}

Light.prototype.setState = function(newState) {
	this.currentState = newState
}

var light = new Light()
light.init()