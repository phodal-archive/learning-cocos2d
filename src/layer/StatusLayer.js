var StatusLayer = cc.Layer.extend({
	ctor:function () {
		this._super();
		this.init();
	},

	init:function () {
		this._super();

		this.labelCoin = new cc.LabelTTF("Coins:0", "Helvetica", 20);
		//this.labelCoin.setColor(cc.c3(0,0,0));//black color
		this.labelCoin.x = 70;
		this.labelCoin.y = cc.winSize.height -20;

		this.addChild(this.labelCoin);

		//this.labelMeter = cc.LabelTTF("0M", "Helvetica", 20);
		//this.labelMeter.setPosition(cc.p(cc.winSize.width - 70, cc.winSize.height - 20));
		//this.addChild(this.labelMeter);
	}
});
