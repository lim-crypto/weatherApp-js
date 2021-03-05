class Weather {
    constructor(city, country){
        this.apikey="c13334f0b9663a4f13d07193fde717c3";
        this.city = city;
        this.country = country;
    }
    async getWeather(){
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&units=metric&appid=${this.apikey}`);
        const responseData = await response.json(); 

        return responseData;
    }
    changeLocation(city, country) {
        this.city = city;
        this.country = country;
      }
}