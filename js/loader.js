/**
 * Created by xpc on 2014/9/19.
 */

var memory = {
    screens : {},
    setting : {
        url : ["./js/dom.js","./js/logic.js","logo.png","./js/screen-page-sta.js"],
        errorCallBack : function(e){

        }
    },
    images : [],
    dom : {},
    logic : {}
};
var loaded = 0,
    loading = memory.setting.url.length;


addScript(memory.setting, function(source){
    var isImage = /.+\.(jpg|png|gif)$/i.test(source.src);
    var progress = parseInt(++loaded / loading * 100);
    if(isImage) {
        var img = new Image();
        img.src = source.src;
        memory.images[source.src] = img;
    }
    document.getElementById("loading").innerText = "love's loading " + progress + "%";
    if(progress == 100){
        memory.logic.showScreen("#page-intro-first");
        //memory.screens["page-sta"].run();
    }
});