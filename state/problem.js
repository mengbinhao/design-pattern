var Light = function() {
	this.state = 'off'
	this.button = null
}

Light.prototype.init = function() {
	var button = document.createElement('DIV'),
			_this = this
	button.innerHTML = 'switch'
	this.button = document.body.appendChild(button)
	this.button.onclick = function() {
		_this.buttonWasPressed()
	}
}

Light.prototype.buttonWasPressed = function() {
	if (this.state === 'off') {
		console.log('open light')
		this.state = 'on'
	} else if (this.state === 'on') {
		console.log('off light')
		this.state = 'off'
	}
}

var light = new Light()
light.init()