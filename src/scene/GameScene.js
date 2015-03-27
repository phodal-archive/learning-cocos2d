var GameScene = cc.Scene.extend({
	space: null,
	gameLayer:null,

	ctor: function (space) {
		this._super();
		this.space = space;
	},
	initPhysics:function() {
		//1. new space object
		this.space = new cp.Space();
		//2. setup the  Gravity
		this.space.gravity = cp.v(0, -350);

		// 3. set up Walls
		var wallBottom = new cp.SegmentShape(this.space.staticBody,
			cp.v(0, g_groundHight),// start point
			cp.v(4294967295, g_groundHight),// MAX INT:4294967295
			0);// thickness of wall
		this.space.addStaticShape(wallBottom);
	},

	onEnter:function () {
		this._super();
		this.initPhysics();

		this.gameLayer = new cc.Layer();
		this.gameLayer.addChild(new BackgroundLayer(), 0, TagOfLayer.background);
		this.gameLayer.addChild(new AnimationLayer(this.space), 0, TagOfLayer.Animation);
		this.addChild(this.gameLayer);
		this.addChild(new StatusLayer(), 0, TagOfLayer.Status);

		this.scheduleUpdate();
	},
	update:function (dt) {
		this.space.step(dt);

		var animationLayer = this.gameLayer.getChildByTag(TagOfLayer.Animation);
		var eyeX = animationLayer.getEyeX();

		this.gameLayer.setPosition(cc.p(-eyeX,0));
	}
});
