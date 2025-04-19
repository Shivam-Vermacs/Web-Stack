const dateE = document.getElementById("date");
const city = document.getElementById("city");
const temperature = document.getElementById("temperature");
const tempImg = document.getElementById("tempImg");
const description = document.getElementById("description");
const minTemperature = document.getElementById("minTemperature");
const maxTemperature = document.getElementById("maxTemperature");
const searchBarInput = document.getElementById("searchBarInput");
const searchBtn = document.getElementById("searchbtn");

function displayDate() {
  const today = new Date();
  const options = { day: "numeric", month: "long", year: "numeric" }; // Format: Day Month Year
  const formattedDate = today.toLocaleDateString("en-US", options); // Example: "19 April 2025"
  dateE.textContent = formattedDate;
}
displayDate();

const getWeather = async (cityName) => {
  try {
    const weatherDataFetch = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=1dd2244ab91b619baa1a57475116004b&units=metric`,
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
    const weatherData = await weatherDataFetch.json();

    if (weatherData.cod === "404") {
      alert("City not found. Please try again.");
      return;
    }

    console.log(weatherData);

    // Display city name
    city.innerHTML = `${weatherData.name}`;

    // Display weather description
    description.innerHTML = `${weatherData.weather[0].main}`;

    // Display weather icon
    const icon = weatherData.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;
    tempImg.innerHTML = `<img src="${iconUrl}" alt="Weather Icon">`;

    // Display temperature
    temperature.innerHTML = `${Math.round(weatherData.main.temp)}°C`;

    // Display max and min temperatures
    maxTemperature.innerHTML = `Max: ${weatherData.main.temp_max}°C`;
    minTemperature.innerHTML = `Min: ${weatherData.main.temp_min}°C`;
  } catch (error) {
    console.error(error);
    alert("An error occurred while fetching the weather data.");
  }
};

// Add event listener to the search button
searchBtn.addEventListener("click", () => {
  const cityName = searchBarInput.value.trim();
  if (cityName) {
    getWeather(cityName);
  } else {
    alert("Please enter a city name.");
  }
});

// Add event listener for the Enter key
searchBarInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    const cityName = searchBarInput.value.trim();
    if (cityName) {
      getWeather(cityName);
    } else {
      alert("Please enter a city name.");
    }
  }
});
