const tl = gsap.timeline();
tl.to(".box", { x: 100, duration: 1 });
tl.to(".box", { y: 100, duration: 1 });
tl.to(".circle", { x: 100, duration: 2 });

const tl1 = gsap.timeline();
tl1.to(".bigBox", { x: 100, duration: 1 });
