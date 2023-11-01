const url = "https://api.openweathermap.org/data/2.5/";
const key = "f50811e55434ef4a22c29fe5c5f97f08";
const getValue = () => {
  const cityName = document.getElementById("searchBar").value;
  return getResult(cityName);
};
const getResult = (cityName) => {
  let query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=en`;
  fetch(query)
    .then((weather) => {
      return weather.json();
    })
    .then(displayResult);
};

const displayResult = (result) => {
    let city = document.querySelector(".city");
    city.innerText = `${result.name}, ${result.sys.country}`;
    let temp = document.querySelector(".temp");
    temp.innerText = `${Math.round(result.main.temp)}°C`;
    let status = document.querySelector(".status");
    status.innerText = result.weather[0].description;
    let average = document.querySelector(".average");
    average.innerText = `${Math.round(result.main.temp_min)}°C / ${Math.round(
      result.main.temp_max
    )}°C`;
    };
