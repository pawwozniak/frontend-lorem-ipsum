const placeholder = document.querySelectorAll(".placeholder");
const placeholderArrow = document.querySelectorAll(".placeholder-arrow");
const arrowPath = document.querySelectorAll(".arrow-path");

placeholder.forEach((el, index) => {
  el.addEventListener("mouseover", () => {
    const transform = el.querySelector(".transform");
    const img = el.querySelector("img");
    img.classList.add("hover");
    transform.classList.add("hover");
    placeholderArrow[index].classList.add("placeholder-arrow--active");
    arrowPath[index].classList.add("arrow-path--active");
  });

  el.addEventListener("mouseout", () => {
    const transform = el.querySelector(".transform");
    const img = el.querySelector("img");
    img.classList.remove("hover");
    transform.classList.remove("hover");
    placeholderArrow[index].classList.remove("placeholder-arrow--active");
    arrowPath[index].classList.remove("arrow-path--active");
  });
});
