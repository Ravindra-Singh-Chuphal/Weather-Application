const button = document.getElementById("search-button");
const input = document.getElementById("cityInput");
const cityName = document.getElementById("city");
const description = document.getElementById("description");
const cityTemp = document.getElementById("temp");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const weatherinfo = document.getElementById("weatherInfo")

console.log(input.value);
async function getData(cityName) {
    const promise = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=55d043b1361b402a94e61931243011&q=${cityName}&aqi=yes`
    );
    return await promise.json()
}
console.log(input.value)
button.addEventListener("click", async () => {
    const value = input.value;
    const result = await getData(value);
    cityName.innerText = result.location.name
    description.innerText = result.current.condition.text
    cityTemp.innerText = `${result.current.temp_c}°C`;
    humidity.innerText = result.current.humidity
    wind.innerText = result.current.wind_kph
    weatherinfo.style.display = "block"
});


input.addEventListener("keypress", async (event) => {

    if (event.key === "Enter") {

        if (weatherinfo.style.display === "block") {
            weatherinfo.style.display = "none";
            input.value = "";
            return;
        }

        const value = input.value;
        const result = await getData(value);
        cityName.innerText = result.location.name
        description.innerText = result.current.condition.text
        cityTemp.innerText = `${result.current.temp_c}°C`;
        humidity.innerText = result.current.humidity
        wind.innerText = result.current.wind_kph
        weatherinfo.style.display = "block"


    }



})
