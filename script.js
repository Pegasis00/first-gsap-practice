const tl = gsap.timeline();


const navLinks = document.querySelectorAll("header nav ul li a");
tl.from(navLinks, {
    y: -50,
    opacity: 0,
    stagger: 0.2,
    duration: 0.6,
    ease: "power2.out"
});


const textLines = document.querySelectorAll(".hero .text h1, .hero .text p");
tl.from(textLines, {
    x: -100,
    opacity: 0,
    stagger: 0.3,
    duration: 1,
    ease: "power3.out"
}, "-=0.5");

const images = document.querySelectorAll(".hero .images img");
tl.from(images, {
    scale: 0.5,
    rotation: -45,
    opacity: 0,
    stagger: 0.3,
    duration: 0.8,
    ease: "back.out(1.7)"
}, "-=0.5");