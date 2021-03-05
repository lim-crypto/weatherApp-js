class Location{
    constructor(){
        this.apikey="85249190-4601-11eb-9067-21b51bc8dee3";
    }

    async getLocation(){
        const getresponse = await fetch(`https://geolocation-db.com/json/${this.apikey}`);
        const response = await getresponse.json();
        return response;
    }
}