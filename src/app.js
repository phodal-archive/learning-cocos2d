
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
	spriteSheet:null,
	runningAction:null,
	sprite:null,
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
		var size = cc.director.getWinSize();

		var bg = new cc.Sprite(res.game_ui);
		bg.x = size.width/2;
		bg.y = size.height/2;
		this.addChild(bg);

		// create sprite sheet
		cc.spriteFrameCache.addSpriteFrames(res.runner_plist);
		this.spriteSheet = new cc.SpriteBatchNode(res.runner_png);
		this.addChild(this.spriteSheet);


		// init runningAction
		var animFrames = [];
		for (var i = 0; i < 8; i++) {
			var str = "runner" + i + ".png";
			var frame = cc.spriteFrameCache.getSpriteFrame(str);
			animFrames.push(frame);
		}

		var animation = new cc.Animation(animFrames, 0.1);
		this.runningAction = new cc.RepeatForever(new cc.Animate(animation));
		this.sprite = new cc.Sprite("#runner0.png");
		this.sprite.attr({x:80, y:185});
		this.sprite.runAction(this.runningAction);
		this.spriteSheet.addChild(this.sprite);


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
