async function getWeather() {
  const cityInput = document.getElementById('cityInput').value;
  const temperature = document.getElementById('temperature');
  const description = document.getElementById('description');
  const apiKey = '88e3f844ed928c0720bf352de16e7f45'; 

  // fetch data
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}`);
  const data = await response.json();

  // convert temperature from Kelvin to Fahrenheit
  const tempInFahrenheit = (data.main.temp - 273.15) * 9/5 + 32;

  temperature.textContent = `Temperature: ${tempInFahrenheit.toFixed(2)}°F`; // Rounded to 2 decimal places
  description.textContent = `Description: ${data.weather[0].description}`;

}


