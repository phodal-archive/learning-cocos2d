
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
	ui: {},
	number: 1,
	gameController: null,
    ctor:function () {
        this._super();
    },
	initFunc: function () {
		this.gameController = new GameController(this);
	},
	onEnter: function (){
		this._super();
		this.initUI();
		this.initFunc();
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

		var boxFrame = cc.spriteFrameCache.getSpriteFrame('greenhood_walk_back_left_' + this.number + '.png');
		var sprite = cc.Sprite.create(boxFrame);
		sprite.setPosition(cc.p(200, 300));
		console.log(sprite);
		this.addChild(sprite,100);

		var size = cc.director.getWinSize();

		var bg = new cc.Sprite(res.background);
		bg.x = size.width/2;
		bg.y = size.height/2;
		this.addChild(bg);

		// 开始精灵
		var startSpriteNormal = new cc.Sprite(res.button1);
        var startSpriteSelected = new cc.Sprite(res.button2);
        var startMenuItem = new cc.MenuItemSprite(
	        startSpriteNormal,
	        startSpriteSelected,
	        this.menuItemStartCallback, this);
        startMenuItem.x = 200;
        startMenuItem.y = size.height - 170;

		// 设置图片菜单
		var settingMenuItem = new cc.MenuItemImage(
			res.button1,
			res.button2,
			this.menuItemSettingCallback, this);
        settingMenuItem.x = 480;
		settingMenuItem.y = size.height - 250;


		// 帮助图片菜单
		var helpMenuItem = new cc.MenuItemImage(
			res.button1,
			res.button2,
			this.menuItemHelpCallback, this);
        helpMenuItem.x = 600;
		helpMenuItem.y = size.height - 360;


		var mu = new cc.Menu(startMenuItem, settingMenuItem, helpMenuItem);
        mu.x = 0;
		mu.y = 0;
		this.addChild(mu);
	},
	updateNumber: function(num){
		this.number = num;
		var text = "";
		if(this.number > 0){
			text = this.number.toString();
		}
		this.label.setString(text);

		var frameName = "greenhood_walk_back_left_" + this.number.toString() + ".png";
		var frameSprite = cc.spriteFrameCache.getSpriteFrame(frameName);
		this.setSpriteFrame(frameSprite)
	},
	menuItemStartCallback:function () {
		this.gameController.startGame(this);
	},
	menuItemSettingCallback:function (sender) {
		this.gameController.settingGame(this);
	},
	menuItemHelpCallback:function (sender) {
		cc.log("menuItemHelpCallback!");
	}
});
