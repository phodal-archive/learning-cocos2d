var BackgroundLayer = cc.Layer.extend({
	map00:null,
	map01:null,
	mapWidth:0,
	mapIndex:0,
	space:null,
	spriteSheet:null,
	objects:[],
	obstacle: null,

	ctor:function (space) {
		this._super();
		this.objects = [];
		this.space = space;
		this.init();
	},
	initObstacles : function(map) {
		this.obstacles = [];
		var mapWidth = map.getMapSize().width;
		var mapHeight = map.getMapSize().height;
		var tileWidth = map.getTileSize().width;
		var tileHeight = map.getTileSize().height;
		var collidableLayer = map.getLayer("collidable");
		var i, j;
		for (i = 0; i < mapWidth; i++){
			for (j = 0; j < mapHeight; j++){
				var tileCoord = new cc.Point(i, j);
				var gid = collidableLayer.getTileGIDAt(tileCoord);
				if(gid) {
					var properties = map.getPropertiesForGID(gid);
					var tileXPositon = i * tileWidth;
					var tileYPosition = (mapHeight * tileHeight) - ((j+1) * tileHeight);
					var react = cc.rect(tileXPositon, tileYPosition, tileWidth, tileHeight);
					this.obstacles.push(react);
				}
			}
		}
	},
	init:function () {
		this.map00 = cc.TMXTiledMap.create(res.map_tmx);
		var objGroup = this.map00.getObjectGroup('objects');
		var obj = objGroup.getObject('role');
		g_runnerStartX = obj.x;
		g_runnerStartY = obj.y;

		this.initObstacles(this.map00);

		this.addChild(this.map00);

		this.mapWidth = this.map00.getContentSize().width;
		this.scheduleUpdate();
	},
	checkAndReload:function (eyeX) {
		if(-eyeX < this.mapWidth){
			this.map00.setPositionX(eyeX);
		}
		return true;
	},

	isCollision: function (position) {
	},
	update:function () {
		var animationLayer = this.getParent().getChildByTag(TagOfLayer.Animation);
		var eyeX = animationLayer.getEyeX();
		var eyeY = animationLayer.getEyeY();
		animationLayer.setPosition(1, 30);
		//this.isCollision(new cc.p(eyeX, eyeY));
		this.checkAndReload(eyeX);
	}
});
