const form = document.querySelector("#tripForm");
const savedData = document.querySelector("#savedData");

// Guardar datos
function saveFormData(name, email, region, season, comments) {
  const trip = {
    name,
    email,
    region,
    season,
    comments
  };

  localStorage.setItem("tripData", JSON.stringify(trip));
}

// Mostrar datos guardados
function displaySavedData() {
  const data = localStorage.getItem("tripData");

  if (data) {
    const trip = JSON.parse(data);

    savedData.innerHTML = `
      Name: ${trip.name} <br>
      Region: ${trip.region} <br>
      Season: ${trip.season}
    `;
  } else {
    savedData.textContent = "No saved data yet.";
  }
}

// Evento submit
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  const region = document.querySelector("#region").value;
  const season = document.querySelector("#season").value;
  const comments = document.querySelector("#comments").value;

  // Condicional (requisito)
  if (!region || !season) {
    alert("Please select a region and season.");
    return;
  }

  saveFormData(name, email, region, season, comments);
  displaySavedData();

  form.reset();
});

// Cargar datos al iniciar
displaySavedData();