  $("#header").mouseleave(function(){
    $(this).removeClass("hover")
    $(".header--menu-sub ul").removeClass("on")
  })
  $("#header .header--menu li").mouseenter(function(){
    var idx = $(this).index();
    $("#header").addClass("hover")
    $(".header--menu-sub ul").removeClass("on")
    $(".header--menu-sub ul").eq(idx).addClass("on")
  })
  $("#header .header--menu-sub ul").mouseleave(function(){
    $(".header--menu-sub ul li").removeClass("on")
  })
  $("#header .header--menu-sub ul li").mouseenter(function(){
    $(".header--menu-sub ul li").removeClass("on")
    $(this).addClass("on")
  })
  // $("#header .header--menu li a").mouseleave(function(){
  //   $("#header").removeClass("hover")
  // })
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
    
    $(".scroll-detect").each(function(){
        var thisTop = $(this).offset().top;
        var thisH = $(this).innerHeight();
    
        if(thisTop + thisH < winBot){
            $(this).addClass("on-view")
        }
    })
})
$(".init").each(function(){
  setTimeout(()=>{
    $(this).addClass("on-view")
  },10)
})

$(".header--btn-ham").click(function(){
  $("#aside").addClass("on")
})
$(".aside--close-btn").click(function(){
  $("#aside").removeClass("on")
})
$(".aside--menu-btn").click(function(){
  $(".aside--sub-menu").removeClass("open")
  $(this).next().addClass("open")
})