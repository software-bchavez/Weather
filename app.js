async function getWeather() {
    const cityInput = document.getElementById('cityInput').value;
    const weatherInfo = document.getElementById('weatherInfo');
    const temperature = document.getElementById('temperature');
    const description = document.getElementById('description');
  
    // Fetch weather data from your backend server
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
    const data = await response.json();

  //('https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${88e3f844ed928c0720bf352de16e7f45}`);
    
  
  
  // Display weather information
    temperature.textContent = `Temperature: ${data.main.temp}°C`;
    description.textContent = `Description: ${data.weather[0].description}`;
    
    // Show the weather information container
    weatherInfo.classList.remove('display');
  }
  