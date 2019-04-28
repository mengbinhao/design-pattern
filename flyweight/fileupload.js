var Upload = function(type) {
	this.type = type
};

Upload.prototype.delFile = function(id) {
	uploadManager.setExternalState(id, this)

	if (this.size < 3000) {
		return this.dom.parentNode.removeChild(this.dom)
	}

	if (window.confirm(`Are u sure delete  ${this.fileName}?`)) {
		return this.dom.parentNode.removeChild(this.dom)
	}
};

var UploadFactory = (function() {
	var createdFlyWeightObjs = {}
	return {
		create(type) {
			if (createdFlyWeightObjs[type]) {
				return createdFlyWeightObjs[type]
			}
			return createdFlyWeightObjs[type] = new Upload(type)
		}
	}
})();

var uploadManager = (function() {
	var uploadeDatabase = {}
	return {
		add(id, type, fileName, fileSize){
			var flyWeightObj = UploadFactory.create(type)
			var dom = document.createElement('DIV')
			dom.innerHTML = `<span>fileName:${fileName},fileSize:${fileSize}</span><button class='delFile'>delete</button>`
			dom.querySelector('.delFile').onclick = function() {
				flyWeightObj.delFile(id)
			}
			document.body.appendChild(dom)

			uploadeDatabase[id] = {
				fileName,
				fileSize,
				dom
			}
			return flyWeightObj
		},
		setExternalState(id, flyWeightObj) {
			var uploadData = uploadeDatabase[id]
			for (let i in uploadData) {
				flyWeightObj[i] = uploadData[i]
			}
		}
	}
})();

var id = 0

window.startUpload = function(type, files) {
	for (let i = 0, file; file = [files++];) {
		var uploadObj = uploadManager.add(++id, type, file.fileName, file.fileSize)
	}
}

startUpload('plugin', [
	{
		fileName: '1.txt',
		fileSize: 1000
	},
	{
		fileName: '2.txt',
		fileSize: 3000
	}
])

startUpload('flash', [
	{
		fileName: '3.txt',
		fileSize: 1000
	},
	{
		fileName: '4.txt',
		fileSize: 3000
	}
])



