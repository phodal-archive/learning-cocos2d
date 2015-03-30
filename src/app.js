
var MainScene = cc.Scene.extend({
	ctor: function () {
		this._super();
	},
	onEnter:function () {
		this._super();
		var layer = new MainLayer();
		this.addChild(layer);
	}
});

var MainLayer = cc.Layer.extend({
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

		// 开始精灵
		var startMenuItem = new cc.MenuItemImage(
	        res.start_button,
	        res.start_button2,
	        this.menuItemStartCallback, this);
        startMenuItem.x = 200;
        startMenuItem.y = size.height - 170;

		// 设置图片菜单
		var settingMenuItem = new cc.MenuItemImage(
			res.settings_button,
			res.settings_button2,
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
		console.log('start game');
		this.gameController.startGame(this);
	},
	menuItemSettingCallback:function (sender) {
		this.gameController.settingGame(this);
	},
	menuItemHelpCallback:function (sender) {
		cc.log("menuItemHelpCallback!");
	}
});
