const leftBtn = document.querySelector(".left_btn");
const rightBtn = document.querySelector(".right_btn");
const carousel = document.querySelector(".corousel");

const scrollAmount = 300;

leftBtn.addEventListener("click", () => {
  carousel.scrollBy({
    left: -scrollAmount,
    behavior: "smooth",
  });
});

rightBtn.addEventListener("click", () => {
  carousel.scrollBy({
    left: scrollAmount,
    behavior: "smooth",
  });
});
