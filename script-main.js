const menu = document.querySelector(".nav");
const menuItems = document.querySelectorAll(".menu-link");
const hamburger= document.querySelector(".hamburger-button");
const closeIcon= document.querySelector(".closeburger-icon");
const menuIcon = document.querySelector(".hamburger-icon");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach(
    function(menuItem) {
        menuItem.addEventListener("click", toggleMenu);
    }
)