
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
	ui: null,
    ctor:function () {
        this._super();
    },
	onEnter: function (){
		this._super();
		this.initUI();
	},
	initUI: function () {
		var bg = new cc.Sprite(res.MainBG);
		bg.attr({
			x: 0,
			y: 0,
			anchorX: 0,
			anchorY: 0
		});
		this.addChild(bg);
		//
		//this.ui = new cc.Sprite(res.ui_bg);
		//this.ui.x = cc.winSize.width / 2;
		//this.ui.y = cc.winSize.height / 2;
		//this.ui.scale = 0;
		//this.ui.attr({
		//	x: 100,
		//	y: 200,
		//	anchorX: 100,
		//	anchorY: 200
		//});
		//this.addChild(this.ui, 100);

		var title_bg = new cc.Sprite(res.title_bg);
		this.addChild(title_bg);
		title_bg.x = this.width / 2;
		title_bg.y = this.height / 2 + 40;

		var title = new cc.LabelTTF("Phodal", "Arial", 20);
		title.x = title_bg.width/2;
		title.y = title_bg.height/2;
		title_bg.addChild(title);

		//var button = new ccui.Button();
		//button.setTouchEnabled(true);
		//button.loadTextures(res.button1, res.button2, "");
		//this.ui.addChild(button);
		//button.x = this.ui.width / 2;
		//button.y = this.ui.height / 2 - 30;
	}
});
