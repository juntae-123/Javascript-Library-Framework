const swiper = new Swiper(".swiper", {
  pagination: {
    el: ".swiper-pagination",
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

const target = document.querySelector("#target");
target.addEventListener("mouseover", () => {
  swiper.slideNext(1000);
});
