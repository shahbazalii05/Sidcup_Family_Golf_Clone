var cursior = document.querySelector(".cursior");
var cursiorBlur = document.querySelector(".cursior-blur");
document.addEventListener("mousemove", function (details) {

    gsap.to(".cursior", {
        left: details.clientX - cursior.getBoundingClientRect().width / 2 + "px",
        top: details.clientY - cursior.getBoundingClientRect().width / 2 + "px"
    })

    gsap.to(".cursior-blur", {
        left: details.clientX - cursiorBlur.getBoundingClientRect().width / 2 + "px",
        top: details.clientY - cursiorBlur.getBoundingClientRect().width / 2 + "px"
    })
})
var nav = document.querySelector(".nav");
var li = document.querySelectorAll(".nav li");

li.forEach(function(li){
    li.addEventListener("mouseover",function(){
        if(nav.offsetHeight === 120)
        {
            gsap.to(li,{
                color:"black",
                cursor: "pointer"
            })
        }
        else 
        {
            gsap.to(li,{
                color:"#b7f900",
                cursor: "pointer"
            })
        }
    })
    li.addEventListener("mouseout",function(){
            gsap.to(li,{
                color:"white"
            })
    })
})

gsap.to(".nav", {
    backgroundColor: "black",
    height: "100px",
    duration: 1,
    scrollTrigger: {
        trigger: ".nav",
        scroller: "body",
        // markers:true,
        start: "top -10%",
        end: "top -11%",
        scrub: 1
    }
})

gsap.to(".main", {
    backgroundColor: "black",
    scrollTrigger: {
        trigger: ".main",
        scroller: "body",
        start: "top -15%",
        end: "top -90%",
        // markers:true,
        scrub: 2
    }
})
var cards = document.querySelectorAll(".cards");
document.addEventListener("mousemove", function (details) {
    var yval = gsap.utils.mapRange(0, window.innerHeight, 15, -15, details.clientY)
    var xval = gsap.utils.mapRange(0, window.innerWidth, -15, 15, details.clientX)
    cards.forEach(function (card) {
        gsap.to(card, {
            css: {
                perspective: "1000px",
                rotateX: yval + "deg",
                rotateY: xval + "deg",
                // scale3d: "1, 1, 1",
            }

        });
    });
})

document.addEventListener("mouseout", function (details) {
    cards.forEach(function (card) {
        gsap.to(card, {
            css: {
                perspective: "1000px",
                rotateX: "0deg",
                rotateY: "0deg",
                // scale3d: "1, 1, 1"
            }
        });
    });
})

var hov = document.querySelectorAll("#hov")
hov.forEach(function(hov){
    hov.addEventListener("mouseover",function(){
        gsap.to(".cursior", {
            height: "70px",
            width: "70px",
            borderRadius: "50%",
            position: "fixed",
            zIndex: 111,
            border: "1px solid white",
            backgroundColor: "transparent"
        });
    })
})

hov.forEach(function(hov){
    hov.addEventListener("mouseout",function(){
        gsap.to(".cursior", {
            height: "20px",
            width: "20px",
            backgroundColor: "#b7f900",
            borderRadius: "50%",
            border: "none",
            position: "fixed",
            zIndex: 111,
        });
    })
})

gsap.to("#colen1",{
    left:"15%", 
    top:"25%",
    scrollTrigger:{
        trigger:"#colen1",
        scroller:"body",
        start:"top 90%",
        end:"top 94%",
        scrub:2
    }
})

gsap.to("#colen2",{
    right:"15%", 
    bottom:"25%",
    scrollTrigger:{
        trigger:"#colen1",
        scroller:"body",
        start:"top 98%",
        end:"top 100%",
        scrub:2
    }
})

var para = document.querySelector(".page3 #para");
document.addEventListener("mousemove", function (details) {
    var ytrans = gsap.utils.mapRange(0, window.innerHeight, 5, -5, details.clientY)
    var xtrans = gsap.utils.mapRange(0, window.innerWidth, 15, -15, details.clientX)
        gsap.to(para, {
            css: {
                translateY: ytrans + "px",
                translateX: xtrans + "px",
                scrub:3
            } 
        });
})

gsap.to("#lastp",{
    top:"30px",
    scrollTrigger:{
        trigger:"#lastp",
        scroller:"body",
        // markers:true,
        start:"top 97%",
        end:"top 100%",
        scrub:2
    }
})

