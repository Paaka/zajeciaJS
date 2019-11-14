document.addEventListener("DOMContentLoaded", appStart);

function appStart() {
    const opwApiKey = '50d53005c0fd5f556bb4ef15224c4209';
    const openWeatherUrl = `http://api.openweathermap.org/data/2.5/weather?q=Cracow&APPID=${opwApiKey}`;
    const weather = fetch(openWeatherUrl);



    weather
    .then((respObject)=>{return respObject.json()})
    .then(pogoda=>{
        const p = document.createElement("p");
        const temp = document.createTextNode(`Tempreure outside is ${pogoda.main.temp}`)
        
        document.querySelector('.root').appendChild(p.appendChild(temp));
    })
    .catch((e)=>{console.error('Catched exception: ', e)})
}