gsap.registerPlugin(ScrollTrigger);

const firstTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".first",

    start: "top top",
    end: "bottom top",
    pin: true,
  },
});
firstTimeline
  .to(".main__img > img", {
    rotate: "720deg",
    scale: 0,
    borderRadius: "9999px",
  })
  .to(".main__img > img", { rotate: "0deg", scale: 1, borderRadius: "0px" });
