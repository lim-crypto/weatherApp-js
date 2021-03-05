const loc = new Location();  
const storage = new Storage(); 
const userLocation = storage.getLocationData();
const weather = new Weather(userLocation.city,  userLocation.country_code);
const ui = new UI();
if(localStorage.getItem('city') === null) { 
  getLocation();
}else{
  getWeather();
}  

document.getElementById('myloc').addEventListener('click', getLocation );
document.getElementById('form').addEventListener('submit', (e) => {
 
const city = document.getElementById('city').value;
const country = document.getElementById('country').value;
  weather.changeLocation(city, country);
 
  storage.setLocationData(city, country);
 
  getWeather();  
});

function getWeather(){
  weather.getWeather()
.then(results => {
  if(results.message == 'city not found'){ 
      ui.cityNotFound(); 
   } else {
     ui.paint(results);
   }
})
.catch(err => console.log(err)); 
 
}

function getLocation(){
  loc.getLocation()
  .then(userLocations => {   
    console.log(userLocations);
   weather.changeLocation(userLocations.city,  userLocations.country_code);
   storage.setLocationData(userLocations.city,  userLocations.country_code);
   getWeather();
 })
   .catch(err => console.log(err) +  getWeather() );
}
