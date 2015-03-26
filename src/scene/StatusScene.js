var StatusScene = cc.Scene.extend({
	ctor: function () {
		this._super();
	},
	onEnter:function () {
		this._super();
		this.initUI();
		var layer = new StatusLayer();
		this.addChild(layer);
	},
	initUI: function () {
		var bg = new cc.Sprite(res.game_ui);
		bg.attr({
			x: 0,
			y: 0,
			anchorX: 0,
			anchorY: 0
		});
		this.addChild(bg);

		this.map00 = cc.TMXTiledMap.create(res.map_tmx);
		this.addChild(this.map00);
	}
});
