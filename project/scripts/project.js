const menuButton = document.querySelector("#menuButton");
const navigation = document.querySelector(".navigation");
const currentYear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

function toggleMenu() {
  navigation.classList.toggle("open");

  const isOpen = navigation.classList.contains("open");

  menuButton.textContent = isOpen ? "✖" : "☰";
  menuButton.setAttribute(
    "aria-label",
    isOpen ? "Close navigation menu" : "Open navigation menu"
  );
}

function setFooterInfo() {
  if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
  }

  if (lastModified) {
    lastModified.textContent = `Last Modified: ${document.lastModified}`;
  }
}

if (menuButton && navigation) {
  menuButton.addEventListener("click", toggleMenu);
}

setFooterInfo();