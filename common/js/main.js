var swiperMain = new Swiper(".mainSwiper", {
  speed: 800,
  direction: "vertical",
  slidesPerView: "auto",
  mousewheel: true,
  touchRatio: 0,
  pagination: {
    el: ".swiper-pagination-main",
    clickable: true,
  },
});
var swiperSub = new Swiper(".subSwiper0", {
  // slidesPerView: "auto",
  speed: 800,
  effect: "fade",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next-sub0",
    prevEl: ".swiper-button-prev-sub0",
  },
});
var swiperSub = new Swiper(".subSwiper1", {
  // slidesPerView: "auto",
  speed: 800,
  effect: "fade",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next-sub1",
    prevEl: ".swiper-button-prev-sub1",
  },
});
var swiperSub = new Swiper(".subSwiper2", {
  // slidesPerView: "auto",
  speed: 800,
  effect: "fade",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next-sub2",
    prevEl: ".swiper-button-prev-sub2",
  },
});
var swiperSub = new Swiper(".subSwiper3", {
  // slidesPerView: "auto",
  speed: 800,
  effect: "fade",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next-sub3",
    prevEl: ".swiper-button-prev-sub3",
  },
});
const header = document.getElementById("header")
// var indexNow = swiperMain.activeIndex;
var indexNow = swiperMain.activeIndex;
if (indexNow == 0) {
  header.classList.add("white")
} else {
  header.classList.remove("white")
}

swiperMain.on("slideChange", function () {
  indexNow = swiperMain.activeIndex;
  console.log(indexNow)
  if (indexNow == 0) {
    header.classList.add("white")
  } else {
    header.classList.remove("white")
  }
})
header.addEventListener("mouseenter",function(){
  header.classList.remove("white")
})
header.addEventListener("mouseleave",function(){
  indexNow = swiperMain.activeIndex;
  if (indexNow == 0) {
    header.classList.add("white")
  } else {
    header.classList.remove("white")
  }
})