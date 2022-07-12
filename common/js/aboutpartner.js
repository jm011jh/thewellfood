setTimeout(()=>{
    $(".partner--container").addClass("init")
},200)

const list = document.querySelectorAll(".partner--list")
for(let i = 0; i<list.length; i++){
    list[i].querySelector("img").style.cssText = `transition-delay:${i/20}s`
}