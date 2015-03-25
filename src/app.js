
var GameScene = cc.Scene.extend({
	ctor: function () {
		this._super();
	},
	onEnter:function () {
		this._super();
		var layer = new GameLayer();
		this.addChild(layer);
	}
});

var GameLayer = cc.Layer.extend({
    ctor:function () {
        this._super();
    },
	onEnter: function (){
		this._super();
		this.initUI();
	},
	initUI: function () {
		var bg = new cc.Sprite(res.MainBG);
		bg.anchorX = 0;
		bg.anchorY = 0;
		this.addChild(bg, 0);
	}
});
