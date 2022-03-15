const cookiesButton = document.querySelector(".cookies-button");
const wrapper = document.querySelector(".cookies-wrapper");

cookiesButton.addEventListener("click", () => {
  wrapper.classList.add("cookies-wrapper--closed");
});
