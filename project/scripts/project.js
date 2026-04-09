const menuButton = document.querySelector("#menuButton");
const navigation = document.querySelector(".navigation");
const currentYear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

function toggleMenu() {
  navigation.classList.toggle("open");

  if (navigation.classList.contains("open")) {
    menuButton.textContent = "✖";
    menuButton.setAttribute("aria-label", "Close navigation menu");
  } else {
    menuButton.textContent = "☰";
    menuButton.setAttribute("aria-label", "Open navigation menu");
  }
}

function setFooterInfo() {
  currentYear.textContent = new Date().getFullYear();
  lastModified.textContent = `Last Modified: ${document.lastModified}`;
}

if (menuButton && navigation) {
  menuButton.addEventListener("click", toggleMenu);
}

setFooterInfo();