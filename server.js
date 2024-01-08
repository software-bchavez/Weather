import express from 'express';
import fetch from 'node-fetch';
import esm from 'esm';
import cors from 'cors';

//  'esm' dynamic import
esm(module);

const app = express();
const port = 5500; 
app.use(cors());
app.use(express.static('public'));

app.get('/weather/:city', async (req, res) => {
  const city = req.params.city;
  const apiKey = '88e3f844ed928c0720bf352de16e7f45';

  // request
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
  const data = await response.json();

  // sends the weather data back 
  res.json(data);
});

app.listen(port, () => {
  console.log(`Benjamin Chavez Camarena made this. ${port}`);
});
