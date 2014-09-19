chrome.contextMenus.create({
	type : normal,
	title : "tile",

	documentUrlPatterns : [
		"https://*/*",
		"http://*/*"
	],
	onclick : function(info, tab){
		console.log(info)
	}
})