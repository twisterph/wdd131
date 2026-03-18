

const currentYear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");
const temperatureElement = document.querySelector("#temperature");
const windSpeedElement = document.querySelector("#windspeed");
const windChillElement = document.querySelector("#windchill");

const temperature = 10;
const windSpeed = 5;

currentYear.textContent = new Date().getFullYear();
lastModified.textContent = `Last Modified: ${document.lastModified}`;

function calculateWindChill(temp, speed) {
  return (13.12 + 0.6215 * temp - 11.37 * speed ** 0.16 + 0.3965 * temp * speed ** 0.16).toFixed(1);
}

temperatureElement.textContent = temperature;
windSpeedElement.textContent = windSpeed;

if (temperature <= 10 && windSpeed > 4.8) {
  windChillElement.textContent = `${calculateWindChill(temperature, windSpeed)} °C`;
} else {
  windChillElement.textContent = "N/A";
}