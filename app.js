const menuCollapseEl = document.querySelector(".menu__collapse");
const linksContainerEl = document.querySelector(".menu-container");
if (menuCollapseEl && linksContainerEl) {
  menuCollapseEl.addEventListener("click", () => {
    linksContainerEl.classList.toggle("active");

    const purpleLogoEl = document.querySelector(".purple__logo");
    if (linksContainerEl.classList.contains("active")) {
     menuCollapseEl.src ="./assets/images/menu_close_icon.svg";
     purpleLogoEl.src = "./assets/images/close_door_logo.svg";
    } else {
     menuCollapseEl.src ="./assets/images/menu_open_icon.svg";
     purpleLogoEl.src = "./assets/images/hire_me.svg";
     
    }
  });
}
