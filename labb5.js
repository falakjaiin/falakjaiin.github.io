document.addEventListener('DOMContentLoaded', function() {
  const apiKey = '4e3b9bb5fc53438b82903536240202'; 
              
  const citiesSelect = document.getElementById('citySelect');
  const currentWeather = document.getElementById('weathercurrent');
  const forecastWeather = document.getElementById('forecast');

  async function fetchWeatherData(selectedCity) 
  {
    const apidata = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${selectedCity}&aqi=no`;
    console.log('API URL:', apidata); 

    try {
      const response = await fetch(apidata);
      const data = await response.json();
      console.log('Response Data:', data); 

      const location = data.location.name + ', ' + data.location.region + ', ' + data.location.country;
      const temperature = data.current.temp_c + '°C';
      const condition = data.current.condition.text;

      currentWeather.innerHTML = `
        <h2>Current Weather</h2>
        <p><strong>Location:</strong> ${location}</p>
        <p><strong>Temperature:</strong> ${temperature}</p>
        <p><strong>Condition:</strong> ${condition}</p>
      `;
    } catch (error) {
      console.error('Error fetching weather data:', error);
      currentWeather.innerHTML = '<p>Failed to fetch weather data. Please try again later.</p>';
    }
  }
  

  async function fetchWeatherforecast(selectedCity) {
    const apidataa = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${selectedCity}&days=7&aqi=no&alerts=no`;
    console.log('API URL:', apidataa); 

    try {
      const responsee = await fetch(apidataa);
      const datta = await responsee.json();
      console.log('Response Data:', datta); 

      const date = datta.forecast.forecastday[0].date;
      const temperature = datta.forecast.forecastday[0].day.maxtemp_c  + '°C';
      const condition = datta.forecast.forecastday[0].day.condition.text;

      forecastWeather.innerHTML = `
        <h2>7-Days Weather Forecast</h2>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Temperature:</strong> ${temperature}</p>
        <p><strong>Condition:</strong> ${condition}</p>
      `;
    } catch (error) {
      console.error('Error fetching weather data:', error);
      forecastWeather.innerHTML = '<p>Failed to fetch weather forecast data for 7 days. Please try again later.</p>';
    }
  }
  

  citiesSelect.addEventListener('change', function() 
  {
    const selectedCity = this.value;
    fetchWeatherData(selectedCity);
    fetchWeatherforecast(selectedCity);
  });

  const defaultCity = citiesSelect.value;
  fetchWeatherData(defaultCity);
  fetchWeatherforecast(defaultCity);
});
