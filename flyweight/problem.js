var module = function(sex, underware) {
	this.sex = sex
	this.underware = underware
}

module.prototype.takePhoto = function() {
	console.log(this.sex + ' ' + this.underware)
}

for(let i = 0; i < 50; i++) {
	var maleModel = new module('male', 'underware' + i)
	maleModel.takePhoto()
}

for(let j = 0; j < 50; j++) {
	var femaleModel = new module('female', 'underware' + j)
	femaleModel.takePhoto()
}