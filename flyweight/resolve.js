var module = function(sex) {
	this.sex = sex
}

module.prototype.takePhoto = function() {
	console.log(this.sex + ' ' + this.underware)
}

var maleModel = new module('male')
var femaleModel = new module('female')

for(let i = 0; i < 50; i++) {
	maleModel.underware = `underware${i}`
	maleModel.takePhoto()
}

for(let j = 0; j < 50; j++) {
	femaleModel.underware = `underware${i}`
	femaleModel.takePhoto()
}