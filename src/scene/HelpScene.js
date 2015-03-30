var HelpScene = cc.Scene.extend({
	space: null,
	gameLayer:null,

	ctor: function (space) {
		this._super();
		this.space = space;
	},
	onEnter:function () {
		this._super();
		var size = cc.director.getWinSize();

		var bg = new cc.Sprite(res.MainBG);
		bg.x = size.width/2;
		bg.y = size.height/2;
		this.addChild(bg);
	}
});
