var goods = {
	'red|32G' : 3,
	'red|16G' : 0,
	'blue|32G' : 1,
	'blue|16G' : 6
}

var madiator = (function() {
	var colorSelect = document.getElementById('colorSelect'),
	    memorySelect = document.getElementById('memorySelect'),
	    numberInput = document.getElementById('numberInput'),
	    colorInfo = document.getElementById('colorInfo'),
	    memoryInfo = document.getElementById('memoryInfo'),
	    numberInfo = document.getElementById('numberInfo'),
			nextBtn = document.getElementById('nextBtn');

			return {
				changed(obj) {
					var color = colorSelect.value,
							memory = memorySelect.value,
							number = numberInput.value,
							stock = goods[`${color}|${memory}`];

					if (obj === colorSelect) {
						colorInfo.innerHTML = 'color'
					} else if (obj === memorySelect) {
						memoryInfo.innerHTML = memory
					} else if (obj === numberInfo) {
						numberInfo.innerHTML = number
					}

					if(!color){
						nextBtn.disabled = true
						nextBtn.innerHTML = 'please choose mobile phone color'
						return
					}
					if(!memory){
						nextBtn.disabled = true
						nextBtn.innerHTML = 'please choose mobile phone memory'
						return
					}
					if(Number.isInteger(number - 0) && number > 0){
						nextBtn.disabled = true
						nextBtn.innerHTML = 'please choose mobile phone number'
						return
					}

					nextBtn.disabled = false
					nextBtn.innerHTML = '放入购物车'
				}
			}
})()


colorSelect.onchange = function() {
	madiator.changed(this)
}

colorSelect.onchange = function() {
	memorySelect.changed(this)
}

numberInput.oninput = function() {
	madiator.changed(this)
}