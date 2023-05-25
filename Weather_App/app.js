
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'cb00a33e5amsh64867915f281b1dp17806ajsn8867d89b2956',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getWeather = (city)=> {
    cityName.innerHTML = city;
    const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city;
fetch(url,options)
    .then(response =>response.json())
    .then((response)=> {
        
        temp.innerHTML =response.temp
        temp2.innerHTML =response.temp
        feels_like.innerHTML =response.feels_like
        humidity.innerHTML =response.humidity
        humidity2.innerHTML =response.humidity
        min_temp.innerHTML=response.min_temp;
        max_temp.innerHTML=response.max_temp;
        wind_speed.innerHTML =response.wind_speed;
        wind_speed2.innerHTML =response.wind_speed;
        wind_degrees.innerHTML =response.wind_degrees;
        sunrise.innerHTML = getLocaltime(response.sunrise);
        sunset.innerHTML=getLocaltime(response.sunset);
        
    })
    .catch(err =>console.error(err)); 
}

const getLocaltime =(timestamp) => {
    var sec = timestamp;
    var date = new Date(sec * 1000);
    var timestr = date.toLocaleTimeString();
    return timestr;

}

submit.addEventListener('click',(e)=> {
    e.preventDefault();
    getWeather(city.value);
});


function gotLocation(position){

    const latitude = position.coords.latitude;
    const longitude =position.coords.longitude;

    const geoApiUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
    
    fetch(geoApiUrl)
    .then(response =>response.json())
    .then((response)=> {
        
      let city=response.city;
      getWeather(city);
        
    })
    .catch(err =>console.error(err)); 
};

navigator.geolocation.getCurrentPosition(gotLocation);
