// server.js
import express from 'express';
import fetch from 'node-fetch';
import esm from 'esm';

// Enable 'esm' for dynamic imports
esm(module);

const app = express();
const port = 5500; // Change the port to 5000 or any other desired port
app.use(cors());
app.use(express.static('public'));

app.get('/weather/:city', async (req, res) => {
  const city = req.params.city;
  const apiKey = '88e3f844ed928c0720bf352de16e7f45'; // Replace with your API key

  // Make a request to the weather API
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
  const data = await response.json();

  // Send the weather data back to the client
  res.json(data);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
