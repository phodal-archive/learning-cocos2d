var HelpController = function (layer) {
	this.init(layer);
};

HelpController.prototype = {
	init: function (layer) {

	},
	help: function() {
		cc.director.runScene(new HelpScene());
	}
};
