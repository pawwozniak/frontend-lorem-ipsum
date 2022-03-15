let prevScrollPosition = window.pageYOffset;
const topbarBlack = document.querySelector(".topbar-black");
const nav = document.querySelector("nav");
const langFirst = document.querySelector(".lang-first");
const langItem = document.querySelectorAll(".lang-item");
const products = document.querySelectorAll(".products");
const dropdownMenu = document.querySelectorAll(".dropdown-menu");

nav.addEventListener("mouseleave", () => {
  dropdownMenu[0].classList.add("dropdown-menu--hidden");
  dropdownMenu[1].classList.add("dropdown-menu--hidden");
  langItem.forEach((el) => {
    el.classList.add("lang-item--hidden");
  });
});

window.onscroll = () => {
  const currentScrollPosition = window.pageYOffset;
  if (prevScrollPosition >= currentScrollPosition) {
    topbarBlack.classList.remove("topbar-black--hidden");
    nav.classList.remove("nav--hidden");
  } else {
    topbarBlack.classList.add("topbar-black--hidden");
    nav.classList.add("nav--hidden");
    dropdownMenu[0].classList.add("dropdown-menu--hidden");
    dropdownMenu[1].classList.add("dropdown-menu--hidden");
    langItem.forEach((el) => {
      el.classList.add("lang-item--hidden");
    });
  }
  prevScrollPosition = currentScrollPosition;
};

langFirst.addEventListener("mouseover", () => {
  if (langItem[0].classList.contains("lang-item--hidden")) {
    langItem.forEach((el) => {
      el.classList.remove("lang-item--hidden");
    });
  } else
    langItem.forEach((el) => {
      el.classList.add("lang-item--hidden");
    });
});

products.forEach((el, index) => {
  el.addEventListener("mouseover", () => {
    dropdownMenu[index].classList.remove("dropdown-menu--hidden");
  });
});
