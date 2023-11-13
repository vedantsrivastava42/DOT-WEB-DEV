const api_key = "168771779c71f3d64106d8a88376808a";

async function showWeather(){
    let city="goa";
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`);
   const data = await response.json();
   console.log("Weather data->", data);

   let newPara = document.createElement('p');
   newPara.textContent = `${data?.main?.temp.tofixed(2)} °C`;
   document.body.appendChild(newPara);
}
