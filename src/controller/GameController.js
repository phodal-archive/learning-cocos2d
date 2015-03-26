var GameController = function (layer) {
	this.init(layer);
};

GameController.prototype = {
	init: function (layer) {

	},
	startUI: function(sender){
		cc.director.runScene(new StatusScene())
	},
	cleanScene: function (sender) {
		sender.removeAllChildren();
	},
	settingGame: function(sender) {
		this.startUI(sender);
	},
	startGame: function(sender) {
		this.cleanScene(sender);
		this.startUI(sender);
	}
};
