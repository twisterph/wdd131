const places = [
  {
    name: "Atacama Desert",
    region: "North",
    description:
      "The Atacama Desert is one of the driest places on Earth and is known for its unique landscapes, salt flats, and clear skies.",
    image: "images/atacama-desert.webp",
    alt: "Beautiful landscape of the Atacama Desert in Chile"
  },
  {
    name: "Easter Island",
    region: "North",
    description:
      "Easter Island is famous for its giant moai statues and its important cultural history in the Pacific.",
    image: "images/easter-island.webp",
    alt: "Moai statues on Easter Island in Chile"
  },
  {
    name: "Santiago",
    region: "Central",
    description:
      "Santiago is the capital of Chile and offers modern city life, museums, parks, and views of the Andes Mountains.",
    image: "images/santiago.webp",
    alt: "Skyline of Santiago Chile with mountains in the background"
  },
  {
    name: "Valparaiso",
    region: "Central",
    description:
      "Valparaiso is known for its colorful hills, street art, historic funiculars, and creative atmosphere.",
    image: "images/valparaiso.webp",
    alt: "Colorful hillside homes in Valparaiso Chile"
  },
  {
    name: "Patagonia",
    region: "South",
    description:
      "Patagonia is a breathtaking region with glaciers, mountains, lakes, and hiking trails for nature lovers.",
    image: "images/patagonia.webp",
    alt: "Mountains and lakes in Patagonia Chile"
  },
  {
    name: "Pucon",
    region: "South",
    description:
      "Pucon is a popular destination for outdoor adventures, volcano views, lakes, and relaxing hot springs.",
    image: "images/pucon.webp",
    alt: "Volcano and lake scenery in Pucon Chile"
  }
];
const placesContainer = document.querySelector("#placesContainer");
const resultsMessage = document.querySelector("#resultsMessage");
const allBtn = document.querySelector("#allBtn");
const northBtn = document.querySelector("#northBtn");
const centralBtn = document.querySelector("#centralBtn");
const southBtn = document.querySelector("#southBtn");
function displayPlaces(placeList) {
  if (!placesContainer) {
    return;
  }
  const placeCards = placeList.map(
    (place) => `
      <article class="card place-card">
        <img
          src="${place.image}"
          alt="${place.alt}"
          loading="lazy"
          width="400"
          height="300"
        >
        <h3>${place.name}</h3>
        <p><strong>Region:</strong> ${place.region}</p>
        <p>${place.description}</p>
      </article>
    `
  );
  placesContainer.innerHTML = placeCards.join("");
}
function showResultsMessage(placeList, regionName) {
  if (!resultsMessage) {
    return;
  }
  if (placeList.length === 0) {
    resultsMessage.textContent = `No places were found for ${regionName}.`;
  } else {
    resultsMessage.textContent = `Showing ${placeList.length} place(s) in ${regionName}.`;
  }
}
function filterPlaces(region) {
  if (region === "All") {
    displayPlaces(places);
    if (resultsMessage) {
      resultsMessage.textContent = `Showing all ${places.length} places.`;
    }
  } else {
    const filteredPlaces = places.filter((place) => place.region === region);
    displayPlaces(filteredPlaces);
    showResultsMessage(filteredPlaces, region);
  }
}
if (allBtn) {
  allBtn.addEventListener("click", () => {
    filterPlaces("All");
  });
}
if (northBtn) {
  northBtn.addEventListener("click", () => {
    filterPlaces("North");
  });
}
if (centralBtn) {
  centralBtn.addEventListener("click", () => {
    filterPlaces("Central");
  });
}
if (southBtn) {
  southBtn.addEventListener("click", () => {
    filterPlaces("South");
  });
}
displayPlaces(places);
if (resultsMessage) {
  resultsMessage.textContent = `Showing all ${places.length} places.`;
}