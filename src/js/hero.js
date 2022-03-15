const bullet = document.querySelectorAll(".bullet");
const hero = document.querySelector(".hero");
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");

leftArrow.addEventListener("click", () => {
  const scroll = window.innerWidth;
  hero.scrollLeft -= scroll;
  const bulletNumber = Math.round(
    (hero.scrollLeft - window.innerWidth) / window.innerWidth
  );
  if (bulletNumber >= 0 && bulletNumber <= 3) {
    bullet.forEach((el) => el.classList.remove("bullet--active"));
    bullet[
      Math.round((hero.scrollLeft - window.innerWidth) / window.innerWidth)
    ].classList.add("bullet--active");
  }
});

rightArrow.addEventListener("click", () => {
  const scroll = window.innerWidth;
  hero.scrollLeft += scroll;
  const bulletNumber = Math.round(
    (hero.scrollLeft + window.innerWidth) / window.innerWidth
  );
  if (bulletNumber >= 0 && bulletNumber <= 3) {
    bullet.forEach((el) => el.classList.remove("bullet--active"));
    bullet[
      Math.round((hero.scrollLeft + window.innerWidth) / window.innerWidth)
    ].classList.add("bullet--active");
  }
});

bullet.forEach((el, index) => {
  el.addEventListener("click", () => {
    const scroll = window.innerWidth;
    hero.scrollLeft = index * scroll;
    bullet.forEach((el) => el.classList.remove("bullet--active"));
    el.classList.add("bullet--active");
  });
});
