// cuando haya cargado la pagina
document.addEventListener('DOMContentLoaded', function () {
    
    fetch("https://api.open-meteo.com/v1/forecast?latitude=-34.603851&longitude=-58.381775&current=temperature_2m,wind_speed_10m,precipitation")
    .then(response => response.json())
    .then(data => {
        let weatherInfo = document.getElementById("weather-info");
        weatherInfo.innerHTML = `
            <p>Temperatura actual: ${data.current.temperature_2m}°C</p>
            <p>Velocidad del viento: ${data.current.wind_speed_10m} km/h</p>
            <p>Humedad relativa: ${data.current.relative_humidity_2m}%</p>
            <p>Llueve: ${data.current.precipitation ? "Sí" : "No"}%</p>
        `
    });
});
