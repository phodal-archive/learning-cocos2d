var res = {
	MainBG : "res/background.jpg",
	button1: "res/button1.png",
	button2: "res/button2.png",
	background: "res/background.jpg",
	title_bg: "res/title_bg.png",
	game_ui: "res/game_ui.jpg",
	map_png: "res/magecity_0.png",
	map_tmx: "res/map.tmx",
	walk_png  : "res/walk.png",
	walk_plist : "res/walk.plist",
	ui_bg: "res/ui_bg.png"
};

var g_resources = [];
for (var i in res) {
    g_resources.push(res[i]);
}
