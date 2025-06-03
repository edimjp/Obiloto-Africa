const navEl = document.querySelector("nav");
const aLinks = document.querySelectorAll("div.nav-links a");

window.addEventListener("scroll", () => {
  if (window.scrollY > 70) {
    navEl.classList.add("nav-himself");
    aLinks.forEach((link) => {
      link.classList.add("gray");
    });
  } else {
    navEl.classList.remove("nav-himself");
    aLinks.forEach((link) => {
      link.classList.remove("gray");
    });
  }
});
