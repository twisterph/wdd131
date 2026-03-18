
const currentYear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");
const temperatureElement = document.querySelector("#temperature");
const windSpeedElement = document.querySelector("#windspeed");
const windChillElement = document.querySelector("#windchill");
const temperature = 8;
const windSpeed = 12;

function calculateWindChill(temp, speed) {
  return (13.12 + 0.6215 * temp - 11.37 * speed ** 0.16 + 0.3965 * temp * speed ** 0.16).toFixed(1);
}
if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}
if (lastModified) {
  lastModified.textContent = `Last Modified: ${document.lastModified}`;
}
if (temperatureElement) {
  temperatureElement.textContent = temperature;
}
if (windSpeedElement) {
  windSpeedElement.textContent = windSpeed;
}
if (windChillElement) {
  if (temperature <= 10 && windSpeed > 4.8) {
    windChillElement.textContent = `${calculateWindChill(temperature, windSpeed)} °C`;
  } else {
    windChillElement.textContent = "N/A";
  }
}