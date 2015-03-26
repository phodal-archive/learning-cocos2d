var StatusLayer = cc.Layer.extend({
	ctor:function () {
		this._super();
		this.init();
	},

	init:function () {
		this._super();

		this.labelCoin = new cc.LabelTTF("Coins:0", "Helvetica", 20);
		this.labelCoin.fillStyle =  cc.color(0,255,0);
		this.labelCoin.x = 70;
		this.labelCoin.y = cc.winSize.height -20;

		this.addChild(this.labelCoin);

		this.labelMeter = new cc.LabelTTF("0M", "Helvetica", 20);
		this.labelMeter.fillStyle =  cc.color(0,255,0);
		this.labelMeter.x = cc.winSize.width - 70;
		this.labelMeter.y = cc.winSize.height - 20;

		this.addChild(this.labelMeter);
	}
});
