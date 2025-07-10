const navEl = document.querySelector("nav");
const aLinks = document.querySelectorAll("div.nav-links a");
const hambuger = document.querySelector("nav svg.hamburger-menu");
const asideBar = document.querySelector("nav aside");
const cancelAsideBar = document.querySelector("aside div.as-logo svg");
const asideOverlay = document.querySelector("aside div.over-lay");
// console.log(asideBar);

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

//Open asidebar function
const openaSideBar = () => {
  asideBar.style.transform = "translateX(0)";
};

//Close asideBar function
const closeSideBar = () => {
  asideBar.style.transform = "translateX(-100vw)";
};

hambuger.addEventListener("click", openaSideBar);
cancelAsideBar.addEventListener("click", closeSideBar);
asideOverlay.addEventListener("click", closeSideBar);
