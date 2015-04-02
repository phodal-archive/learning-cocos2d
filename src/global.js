var g_groundHeight = 54;
var g_runnerStartX = 472;
var g_runnerStartY = 100;

if(typeof TagOfLayer == "undefined") {
	var TagOfLayer = {};
	TagOfLayer.background = 0;
	TagOfLayer.Animation = 1;
	TagOfLayer.Status = 2;
}

if(typeof SpriteTag == "undefined") {
	var SpriteTag = {};
	SpriteTag.runner = 0;
	SpriteTag.coin = 1;
	SpriteTag.rock = 2;
}