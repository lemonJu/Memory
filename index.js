//console.log("da");
$(function(){
    var pageNum = 0,
        isScroll = false,
        minPage = 0,
        maxPage = 6;
	$(document).delegate(".wall a","click",function(){
		var src = $(this).find("img").attr("src");
		$('.img-display > img').attr("src", src);
		$('.img-display').fadeIn();
		
	});
	
	if(window.addEventListener) {
        document.addEventListener("DOMMouseScroll", scroll, false);
    }
    window.onmousewheel = document.onmousewheel = scroll;

    function scroll(event){
        console.log(isScroll);
        if(isScroll) return false;
        if( event.wheelDelta > 0 ){
            pageNum ++;
        } else {
            pageNum --;
        }
        console.log("get scroll");
        isScroll = true;
        $('main .main-inner').animate({
            left : pageNum*700
        },{
            duration : 1000,
            complete : function(){isScroll = false;}
        });
        isScroll = true;
    }



});