const url = "https://api.openweathermap.org/data/2.5/";
const key = "6fe958e6243b2dafe94f753032dd1e70";
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