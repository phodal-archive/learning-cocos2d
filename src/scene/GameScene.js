var GameScene = cc.Scene.extend({
	ctor: function () {
		this._super();
	},
	onEnter:function () {
		this._super();
		this.addChild(new BackgroundLayer());
		this.addChild(new AnimationLayer());
		this.addChild(new StatusLayer());
	}
});
