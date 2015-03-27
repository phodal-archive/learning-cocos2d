var AnimationLayer = cc.Layer.extend({
	spriteSheet: null,
	runningAction: null,
	sprite: null,

	ctor:function () {
		this._super();
		this.init();
	},
	init:function () {
		this._super();

		// create sprite sheet
		cc.spriteFrameCache.addSpriteFrames(res.walk_plist);
		this.spriteSheet = new cc.SpriteBatchNode(res.walk_png);
		this.addChild(this.spriteSheet);

		// init runningAction
		var animFrames = [];
		for (var i = 1; i < 9; i++) {
			var str = "greenhood_walk_back_left_" + i + ".png";
			var frame = cc.spriteFrameCache.getSpriteFrame(str);
			animFrames.push(frame);
		}

		var animation = new cc.Animation(animFrames, 0.1);
		this.runningAction = new cc.RepeatForever(new cc.Animate(animation));
		this.sprite = new cc.Sprite("#greenhood_walk_back_left_1.png");
		this.sprite.attr({
			x: 480,
			y: 30
		});
		this.sprite.runAction(this.runningAction);
		this.spriteSheet.addChild(this.sprite);
	}
});
