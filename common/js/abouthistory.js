var winTop = $(window).scrollTop();
var winH = $(window).height();
var winBot = winTop + winH;
$(window).resize(function(){
    winTop = $(window).scrollTop();
    winH = $(window).height();
    winBot = winTop + winH;
})
$(window).scroll(function(){
    winTop = $(window).scrollTop();
    winH = $(window).height();
    winBot = winTop + winH;
    console.log(winBot)
    $(".scroll-detect").each(function(){
        var thisTop = $(this).offset().top;
        var thisH = $(this).innerHeight();
        console.log(thisTop)
        if(thisTop + thisH < winBot){
            $(this).addClass("on-view")
        }
    })
})