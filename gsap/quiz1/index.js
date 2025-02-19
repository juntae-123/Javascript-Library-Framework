const t1 = gsap.timeline();
t1.fromTo("h1", { x: 1, opacity: 0 }, { x: 1, opacity: 1, duration: 2 });
t1.fromTo("button", { opacity: 0 }, { opacity: 1, duration: 2 }, "<");
