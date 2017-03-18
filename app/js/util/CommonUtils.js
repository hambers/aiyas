'use strict'

module.exports = {
	clientWidth:function() {
		let width = document.documentElement.clientWidth||document.body.clientWidth;
		return width;
	},
	clientHeight:function() {
		let height = document.documentElement.clientHeight||document.body.clientHeight;
		return height;
	}
}