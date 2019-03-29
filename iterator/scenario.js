// define a iterator function to iterate the obj which you want to iterate
// iterate according to priority
let getActiveUploadObj = function(){
	try {
		return new ActiveXObject('TXFTNActiveX.FTNUpload')
	} catch (e) {
		return false
	}
}

let getFlashUploadObj = function(){
	// if (global.sssss) {
	// 	let str = '<object type="application/x-shockwave-flash"></object>'
	// 	return $(str).appendTo($('body'))
	// }
	// return false
}

let getFormUploadObj = function(){
	// let str = '<input name="file" type="file" class="ui-file" />'
	// return $(str).appendTo($('body'))
	return 1
}

let iterateUploadObj = function() {
	for (let i = 0, fn; fn = arguments[i++];) {
		let uploadObj = fn()
		if (uploadObj) return uploadObj
	}
}

let ret = iterateUploadObj(getActiveUploadObj, getFlashUploadObj, getFormUploadObj)

console.log(ret)