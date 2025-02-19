gsap.registerPlugin(ScrollTrigger);

const t1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".third",
    markers: true,
    start: "-20% bottom",
  },
});

// t1.fromTo(".box", { x: 0, opacity: 0 }, { x: 300, duration: 2, opacity: 1 });
t1.fromTo(
  "h2",
  { y: 30, opacity: 0 },
  { y: 0, opacity: 1, duration: 1, stagger: 1 }
);
