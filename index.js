var cursor = document.querySelector(".cursor");
var wrapper = document.querySelector("#wrapper");
var imageSlider = document.querySelector(".image-slider");
var imageDiv = document.querySelectorAll(".imgDiv img");
gsap.from(".nav-items",{
    opacity:0,
    y:-400,
    duration:0.3,
    delay:0.5,
    stagger:1
})

gsap.to(".animate-img", {
    x: "-50vw",
    duration: 8,
    delay: 2,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut"
});

wrapper.addEventListener("mousemove",(dets)=>{
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y,
        duration:0.5,
    });
});

imageSlider.addEventListener("mouseenter",()=>{
    console.log("Mouse Entered")
    gsap.to(cursor,{
        backgroundColor:"white",
    })
})

imageSlider.addEventListener("mouseleave",()=>{
    gsap.to(cursor,{
        backgroundColor:"#ffdcb3",
    })
})

imageDiv.forEach(imageDiv => {
    imageDiv.addEventListener("mouseenter", () => {
        gsap.to(cursor, {
            scale: 4,
            duration:0.2,
            ease: "power1.inOut"
        });
    });

    imageDiv.addEventListener("mouseleave", () => {
        gsap.to(cursor, {
            scale: 1,
            duration:0.2,
            ease: "power1.inOut",
        });
    });
});
gsap.from(".main-heading h1", {
    opacity: 0,
    y: 800,
    duration: 1,
    delay: 0.5,
});

gsap.to(".floating-txt-container", {
    x: "-50vw",
    duration: 8,
    delay: 3,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut"
});

gsap.from(".keypoint",{
    opacity:0,
    y: 50,
    duration:1,
    delay:0.4,
    scrollTrigger:{
        trigger:".keypoint",
        scroll:"body",
        start: "top 50%", 
        end: "top 50%", 
        // markers:true,
        srub:1,
        toggleActions: "play none none reverse"
    }
})


gsap.from(".review-card",{
    opacity:0,
    y: 50,
    duration:1,
    delay:0.4,
    scrollTrigger:{
        trigger:".review-card",
        scroll:"body",
        start: "top 80%", 
        end: "top 10", 
        // markers:true,
        srub:1,
        toggleActions: "play none none reverse"
    }
})