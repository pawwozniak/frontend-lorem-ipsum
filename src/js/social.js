const picture = document.querySelectorAll(".picture");
const background = document.querySelectorAll(".background");

picture.forEach((el, index) => {
  el.addEventListener("mouseover", () => {
    background[index].classList.add("background--active");
  });
  el.addEventListener("mouseout", () => {
    background[index].classList.remove("background--active");
  });
});
