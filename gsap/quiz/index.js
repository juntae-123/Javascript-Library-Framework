const [dom] = document.body.getClientRects();
const { width, height } = dom;

gsap.to(".box", {
  backgroundColor: "blue",
  x: width - 100,

  duration: 2,
});

gsap.to(".box1", {
  backgroundColor: "blue",
  y: height - 100,
  buration: 2,
});

gsap.to(".box2", {
  backgroundColor: "blue",
  buration: 2,
  y: height - 100,
});

gsap.to(".box3", {
  backgroundColor: "blue",
  buration: 2,
  x: width - 100,
});
