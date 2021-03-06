var AnimationLayer = cc.Layer.extend({
	spriteSheet: null,
	runningAction: null,
	sprite: null,
	space: null,
	body: null,
	shape: null,

	ctor: function (space) {
		this._super();
		this.space = space;
		this.init();

		this._debugNode = cc.PhysicsDebugNode.create(this.space);
		//this._debugNode.setVisible(false);

		this.addChild(this._debugNode, 10);
	},
	init: function () {
		this._super();

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

		//create runner through physic engine
		this.sprite = new cc.PhysicsSprite("#greenhood_walk_back_left_1.png");
		var contentSize = this.sprite.getContentSize();
		console.log(this.sprite.getContentSize())
		// init body
		this.body = new cp.Body(1, cp.momentForBox(1, contentSize.width - 24, contentSize.height));
		this.body.p = cc.p(g_runnerStartX, g_runnerStartY);
		//this.body.applyImpulse(cp.v(-10, 0), cp.v(0, 0));//run speed
		this.space.addBody(this.body);
		//init shape
		this.shape = new cp.BoxShape(this.body, contentSize.width - 24, contentSize.height);
		this.space.addShape(this.shape);

		this.sprite.setBody(this.body);
		this.sprite.runAction(this.runningAction);

		this.spriteSheet.addChild(this.sprite);

		this.scheduleUpdate();
	},
	getEyeX: function () {
		return this.sprite.getPositionX() - g_runnerStartX;
	},
	getEyeY: function () {
		return this.sprite.getPositionY();
	}
});
