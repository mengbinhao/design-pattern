var Light = function() {
	this.currentState = FSM.off
	this.button = null
}

Light.prototype.init = function() {
	var button = document.createElement('DIV'),
			_this = this

	button.innerHTML = 'already closed light'
	this.button = document.body.appendChild(button)
	this.button.onclick = function() {
		_this.currentState.buttonWasPressed.call(_this)
	}
}

var FSM = {
	off: {
		buttonWasPressed() {
			console.log('off light')
			this.button.innerHTML = 'on light if press me again'
			this.currentState = FSM.on
		}
	},
	on: {
		buttonWasPressed() {
			console.log('on light')
			this.button.innerHTML = 'off light if press me again'
			this.currentState = FSM.off
		}
	}
}

var light = new Light()
light.init()