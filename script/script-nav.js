const menuState = document.getElementById("#menu-state")

document.querySelector("a.open").addEventListener("click", (e) => {
  e.preventDefault();
  menuState.checked = true;
});

document.querySelector("a.close").addEventListener("click", (e) => {
  e.preventDefault();
  menuState.checked = false;
});
