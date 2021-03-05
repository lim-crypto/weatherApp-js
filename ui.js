class UI {
  constructor() {
    this.bg=document.getElementById('bg');
    // this.location = document.getElementById('location');
    this.city=document.getElementById('city');
    this.country=document.getElementById('country');
    this.desc = document.getElementById('desc');
    this.icon = document.getElementById('icon');
    this.string = document.getElementById('temperature'); 
    this.feelsLike = document.getElementById('feels-like');
    this.humidity = document.getElementById('humidity');
    this.visibility= document.getElementById('visibility');
    this.wind = document.getElementById('wind');
  
  }
  cityNotFound(){
    this.city.setAttribute('placeholder', 'City not Found'); 
  }
  paint(weather) {
    // console.log(weather); 
    const xhr = new XMLHttpRequest();  
    xhr.open("GET", `img/${weather.weather[0].id}${weather.weather[0].icon}.jpg`, true);
    let self = this;
    xhr.onload=function(){
        if(this.status ==200){ 
          self.bg.style.backgroundImage =  `url(img/${weather.weather[0].id}${weather.weather[0].icon}.jpg)`; 
        }else{ 
          self.bg.style.backgroundImage =  `url(img/${weather.weather[0].icon}.jpg)`;  
        }
    }  
    xhr.send();  
    // this.location.innerHTML = `<i class="fas fa-map-marker-alt"></i> ${weather.name}, ${weather.sys.country} <i class="fas fa-edit" id="editloc"></i>`;
    this.city.value=weather.name;
    this.country.value= weather.sys.country;
    this.desc.textContent = weather.weather[0].description;
    this.icon.setAttribute('src',  `http://openweathermap.org/img/wn/${weather.weather[0].icon}.png` );
    this.string.textContent = weather.main.temp + "°C";
    this.feelsLike.innerHTML = `<i class="fas fa-temperature-low"></i> Feels like: ${weather.main.feels_like}° Celsius`; 
    this.humidity.innerHTML = `<i class="fas fa-tint"></i> Humidity: ${weather.main.humidity}%`;
    this.visibility.innerHTML = `<i class="fas fa-eye"></i> Visibility: ${weather.visibility/1000} km`  ;
    this.wind.innerHTML = `<i class="fas fa-wind"></i> Wind: ${weather.wind.speed} m/s   ${this.degToCompass(weather.wind.deg) } ${weather.wind.deg}°   `;
      
  }

   degToCompass(num) {
    var val = Math.floor((num / 22.5) + 0.5);
    var arr = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
    return arr[(val % 16)];
    
}

 
}