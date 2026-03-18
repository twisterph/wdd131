const currentYear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");
const windChillElement = document.querySelector("#windchill");
const temperature = 8; // Celsius
const windSpeed = 12; // km/h
currentYear.textContent = new Date().getFullYear();
lastModified.textContent = `Last Modified: ${document.lastModified}`;
function calculateWindChill(tempC, speedKmH) {
  return (
    13.12 +
    0.6215 * tempC -
    11.37 * Math.pow(speedKmH, 0.16) +
    0.3965 * tempC * Math.pow(speedKmH, 0.16)
  ).toFixed(1);
}
if (temperature <= 10 && windSpeed > 4.8) {
  windChillElement.textContent = `${calculateWindChill(temperature, windSpeed)} °C`;
} else {
  windChillElement.textContent = "N/A";
}