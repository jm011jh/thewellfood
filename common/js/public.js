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