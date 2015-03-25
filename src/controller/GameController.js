var GameController = function (layer) {
	this.init(layer);
};

GameController.prototype = {
	init: function (layer) {

	},
	startGame: function(sender) {
		cc.log(sender);
	}
};
