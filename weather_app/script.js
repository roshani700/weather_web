const apiKey="b28a304cb62fde57d09ad19e2d97f789";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox=document.querySelector(".search input")
const searchBtn=document.querySelector(".search button")

const weatherIcon=document.querySelector('.weather-icon')
async function fetching(city) {
    const response=await fetch(apiUrl+ city +`&appid=${apiKey}`);

    if(response.status==404){
        $('.error').css("display","block");
        $('.weather').css("display","none");

    }else{

        var data=await response.json();
        console.log(data)
        document.querySelector('.city').innerHTML=data.name;
        $('.temp').innerHTML=Math.round(data.main.temp)+" °c";
        document.querySelector('.humidity').innerHTML=data.main.humidity+" %";
        document.querySelector('.wind').innerHTML=data.wind.speed+" km/h";
    
        if(data.weather[0].main=="Clouds"){
            weatherIcon.src="./weather-app-img/images/clouds.png"
        }else if(data.weather[0].main=="Clear"){
            weatherIcon.src="./weather-app-img/images/clear.png"
        }else if(data.weather[0].main=="Rain"){
            weatherIcon.src="./weather-app-img/images/rain.png"
        }else if(data.weather[0].main=="Drizzle"){
            weatherIcon.src="./weather-app-img/images/drizzle.png"
        }else if(data.weather[0].main=="Mist"){
            weatherIcon.src="./weather-app-img/images/mist.png"
        }
    
        $('.weather').css("display","block")
        $('.error').css("display","none");
    }
   }

searchBtn.addEventListener("click",()=>{
    fetching(searchBox.value);
})
 
