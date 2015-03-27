var GameScene = cc.Scene.extend({
	space: null,
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

		this.addChild(new BackgroundLayer());
		this.addChild(new AnimationLayer(this.space));
		this.addChild(new StatusLayer());

		this.scheduleUpdate();
	}
});
