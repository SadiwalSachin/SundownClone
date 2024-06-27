// const scroll = new LocomotiveScroll({
//   el: document.querySelector("#main"),
//   smooth: true,
// });

var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

let swiperContainer = document.querySelector(".swiper")
let swiperCursor = document.querySelector(".swiper .cursor");

swiperContainer.addEventListener("mouseenter",function(){
  gsap.to(swiperCursor,{
    scale:1,
    opacity:1
  })
})

swiperContainer.addEventListener("mousemove",function(event){
  gsap.to(swiperCursor,{
    x:event.x - swiperContainer.getBoundingClientRect().x - 100,
    y:event.y - swiperContainer.getBoundingClientRect().y - 100,
  })
})

swiperContainer.addEventListener("mouseleave",function(){
  gsap.to(swiperCursor,{
    scale:0,
    opacity:0
  })
})




// mobile navigation bar 

 function mobileNavigationBAr(){

  const menuBtn = document.querySelector("#menu")
  const crossBtn = document.querySelector("#cross")
  const mobileNav = document.querySelector("#mobile-nav")
  const mobileNavWrapper =  document.querySelector("#mobile-nav-wrapper")
  const mobileNavTimeline = gsap.timeline()
  
  menuBtn.addEventListener("click",function(event){
    event.preventDefault()
    
    menuBtn.style.display = "none"
    crossBtn.style.display = "block"
    // mobileNav.style.display="block"
    gsap.to(mobileNavWrapper,{
      height:"100vh",
      display:"block"
    })
    mobileNavTimeline.to(mobileNav,{
      height:"30vh",
      duration:.1,
      display:"block"
    })
    mobileNavTimeline.to("#mobile-nav a",{
      right:100,
      duration:1,
      opacity:1,
      stagger:.1,
      scale:1
    })
  
  })
  
  crossBtn.addEventListener("click",function(event){
    event.preventDefault()
    mobileNavTimeline.to(mobileNavWrapper,{
      height:"0",
      duration:.7,
      display:"none"
    })
    gsap.to("#mobile-nav a",{
      right:0,
      opacity:0,
      scale:0,
      stagger:.2,
      duration:.1,
    })
    mobileNavTimeline.to(mobileNav,{
      height:"0",
      duration:0.7,
      display:"none"
    })
    gsap.to(crossBtn,{
      display:"none",
    })
    gsap.to(menuBtn,{
      display:"block",
      delay:.5
    })
  
    
  })
}

mobileNavigationBAr()
