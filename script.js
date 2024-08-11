

// gsap.from(".page2 .number",{
//     x:500,
//     opacity:0,
//     duration:1,
//     scrollTrigger:{
//         trigger:".page2 .number",
//         start:"top 60%",
//         scroller:"body",
//         markers:true,
//         scrub:1
//     }
// })

function nav_animation(){
    const nav_links = document.querySelectorAll(".nav__links li");

    nav_links.forEach(element => {
        console.log(element)
        element.addEventListener("mouseenter", (e) => {
            gsap.from(".nav_links li", {
                scale: 5,
                duration: 1,
                opacity: 0
            })
        });
        
    });


}

function back_tracker() {
    const cur = document.querySelector(".cursor");
    const body = document.querySelector("main");

    body.addEventListener("mousemove", (e) => {
        console.log(e);
        cur.style.transform = `translate(${e.clientX + 40}px,${e.clientY}px)`;
        setTimeout(() => {
            cur.style.transform = `translate(${e.clientX}px,${e.clientY}px)`;
        }, 1);
    });
}

function hero_section() {

    const tl = gsap.timeline();
    tl.from(".navbar ,nav__logo", {
        y: -50,
        opacity: 0,
        duration: .5,
        delay: 1
    }, "n")
    tl.from(".nav__links li", {
        y: -50,
        opacity: 0,
        duration: .5,
        stagger: .2,
    })

    tl.from(".navbar .menu__bar", {
        y: -40,
        opacity: 0,
        duration: .5
    }, "n")
    tl.from(".hero__para p", {
        opacity: 0,
        rotate: -15,
        stagger: .5,
        duration: .5,
        y: -40
    }, "b")

    tl.from(".button__1", {
        opacity: 0,
        duration: .6,
        scale: 0
    })

    tl.from(".button__2", {
        opacity: 0,
        duration: .6,
        scale: 0,
        delay: .2
    }, "b")

    tl.from(".hero__slider__imgs .hero__slide", {
        opacity: 0,
        stagger: .6,
        duration: 1,
        y: -70
    }, "a")
    tl.from(".hero__img", {
        opacity: 0,
        x: 70,
        duration: .7,
        delay: .3
    }, "a")

    tl.from(".hero__text", {
        opacity: 0,
        y: 40,
        duration: 2,
        ease: "expo.easeInOut",
    })

    tl.from(".circle", {
        rotate: -360,
        y: 20,
        repeat: -1,
        duration: 1.5,
        yoyo: 1
    })
}

function page2_animation() {

    const tl = gsap.timeline();

    tl.from(".page2 .page2__img", {
        x: -100,
        opacity: 0,
        scrollTrigger: {
            trigger: ".page2 .page2__img",
            start: "top 60%",
            end: "bottom 60%",
            scroller: "body",
            scrub: 1
        }
    })

    tl.from(".page2 .heading", {
        x: 100,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
            trigger: ".page2 .heading",
            scroller: "body",
            scrub: 1,
            start: "top 70%",
            end: "top 10%"
        }

    })

    tl.from(".page2 .number", {
        y: 70,
        opacity: 0,
        duration: 3,
        stagger: 1,
        scrollTrigger: {
            trigger: ".page2 .number",
            scroller: "body",
            scrub: 1,
            start: "top 75%",
            end: "top 100%",
            // markers:true
        }
    })
    tl.from(".page2__content__contianer button", {
        scale: 0,
        opacity: 0,
        duration: 3,
        scrollTrigger: {
            trigger: ".page2__content__contianer button",
            scroller: "body",
            scrub: 1,
            start: "top 78%",
            end: "top 100%",
            // markers:true
        }
    })


}

function page3_animation() {
    const tl = gsap.timeline();
    tl.from(".page3 .page3__img", {
        x: 50,
        opacity: 0,
        duration: 5,
        scrollTrigger: {
            trigger: ".page3 .page3__img",
            scroller: "body",
            scrub: 2,
            start: "top 30%",
            end: "top 80%",
            // markers:true
        }
    })

    tl.from(".page3 .heading", {
        x: -50,
        opacity: 0,
        duration: 3,
        scrollTrigger: {
            trigger: ".page3 .heading",
            scroller: "body",
            scrub: 1,
            start: "top 50%",
            end: "top 80%",
            // markers:true
        }
    })

    tl.from(".page3 p", {
        x: -50,
        opacity: 0,
        duration: 3,
        scrollTrigger: {
            trigger: ".page3 p",
            scroller: "body",
            scrub: 1,
            start: "top 55%",
            end: "top 80%",
            // markers:true
        }
    })
    tl.from(".page3 button", {
        x: -50,
        opacity: 0,
        duration: 3,
        scrollTrigger: {
            trigger: ".page3 button",
            scroller: "body",
            scrub: 1,
            start: "top 80%",
            end: "top 80%",
            // markers:true
        }
    })
}

function tabs_animation() {
    const tl = gsap.timeline();

    tl.from(".tabs .tab", {
        stagger: 1,
        x: -200,
        duration: 4,
        opacity: 0,
        scrollTrigger: {
            trigger: ".tabs .tab",
            scroller: "body",
            scrub: 1,
            start: "top 30%",
            end: "top 10%",
            // markers:true
        }
    })
}

function page_end() {
    const tl = gsap.timeline();

    tl.from(".page5 h1", {
        y: 50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
            trigger: ".page5 h1",
            scroller: "body",
            scrub: 2,
            start: "top 30%",
            end: "top 30%",
            // markers:true
        }
    })

    tl.from(".page5 img", {
        y: -100,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
            trigger: ".page5 img",
            scroller: "body",
            scrub: 2,
            start: "top 40%",
            end: "top 40%",
            //  markers:true
        }
    })

    tl.from(".circle2", {
        rotate: -360,
        repeat: -1,
        duration: 2,
        yoyo: 1,

    })
}
// nav_animation();
back_tracker();
hero_section();
page2_animation();
page3_animation();
tabs_animation();
page_end();