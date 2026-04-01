const reviewDisplay = document.querySelector("#reviewCount");

let numReviews = Number(localStorage.getItem("numReviews-ls")) || 0;
numReviews += 1;
localStorage.setItem("numReviews-ls", numReviews);

reviewDisplay.textContent = numReviews;