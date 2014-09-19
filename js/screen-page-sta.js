/**
 * Created by xpc on 2014/9/19.
 */

//控制js下载顺序
memory.screens["page-sta"] = (function(){
    var dom = memory.dom,
        $ = dom.$,
        id = "#page-sta";

    function setup(){
        var context = $("#sta-canvas")[0],
            ctx = context.getContext("2d");
        ctx.scale(context.width, context.height);
        ctx.save();

        ctx.fillStyle = "#273c69";
        ctx.fillRect(0,0,1,1);

        for(i = 0;i <= 1;i+=0.1) {
            ctx.beginPath();
            ctx.moveTo(i, 1);
            ctx.lineTo(i+0.08, 1);
            ctx.lineTo(i+0.04, 0.9);
            ctx.closePath();
            ctx.fillStyle = "rgba(26,36,61,.2)";
            ctx.fill();
        }
    }

    function run(){
        memory.logic.showScreen(id);
        setup();
    }

    return {
        run : run
    }
})();

