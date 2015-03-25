var GameController = function (layer) {
	this.init(layer);
};

GameController.prototype = {
	init: function (layer) {

	},
	startUI: function(sender){
		sender.removeAllChildren();
		var bg = new cc.Sprite(res.game_ui);
		bg.attr({
			x: 0,
			y: 0,
			anchorX: 0,
			anchorY: 0
		});
		sender.addChild(bg);
	},
	settingGame: function(sender) {
		this.startUI(sender);
		cc.log(sender);
	},
	startGame: function(sender) {
		this.startUI(sender);
		cc.log(sender);
	}
};
