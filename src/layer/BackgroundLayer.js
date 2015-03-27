var BackgroundLayer = cc.Layer.extend({
	ctor:function () {
		this._super();
		this.init();
	},

	init:function () {
		this.map00 = cc.TMXTiledMap.create(res.map_tmx);
		this.addChild(this.map00);
	}
});
