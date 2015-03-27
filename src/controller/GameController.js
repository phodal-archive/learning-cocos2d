var GameController = function (layer) {
	this.init(layer);
};

GameController.prototype = {
	init: function (layer) {

	},
	settingGame: function(sender) {
		console.log('settings');
	},
	startGame: function(sender) {
		cc.log("==start game clicked");
		cc.director.runScene(new GameScene());
	}
};
