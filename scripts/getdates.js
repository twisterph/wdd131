
const year = document.querySelector ("#currentyear");
const modified = document.querySelector ("#lastmodified");

if (year) {
    year.textContent = new Date().getFullYear();
}
if (modified) {
    modified.textContent = `Last Modified: ${document.lastModified}`;
}