const button =document.getElementById("location");

function gotLocation(position){

    const latitude = position.coords.latitude;
    const longitude =position.coords.longitude;

    const geoApiUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
    fetch(geoApiUrl)
    .then(res => res.json())
    .then(data => {
        //console.log(data);
        let continent =data.continent;
        let country =data.countryName;        ;
        let city=data.city;
        let locality =data.locality;
       // console.log(continent,country,city,locality);
       document.getElementById("continent").innerHTML ="The Continent is " +continent;
       document.getElementById("country").innerHTML ="The Country is " +country;
       document.getElementById("city").innerHTML ="The City is "+ city;
       document.getElementById("locality").innerHTML ="The Locality is " +locality;
    })
};
function faildToGet() {
    console.log("There Was Some Issue");
}

button.addEventListener('click', async ()=> {
    const result =navigator.geolocation.getCurrentPosition(gotLocation,faildToGet );
})



