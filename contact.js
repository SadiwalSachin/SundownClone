
const textTimeline = gsap.timeline()
const mainHeading = document.querySelectorAll("#top h1")
const mainImage = document.querySelector("#left img")

textTimeline.from(mainHeading,{
    y:100,
    duration:.8,
    stagger:.1
})
textTimeline.from("#bottom h2",{
    y:20,
    duration:.2,
    stagger:.3,
    opacity:0,
    scale:1
})

gsap.from(mainImage,{
    y:200,
    opacity:0,
    scale:1,
    duration:.5,
    delay:.3
})
gsap.from("#right #hero-shape1",{
    y:200,
    opacity:0,
    scale:1,
    duration:.7,
    delay:.8
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
  