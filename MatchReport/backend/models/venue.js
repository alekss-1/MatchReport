class Venue {
    constructor(data) {
        this.city = {
            name: data.venue.city.name || ''
        };
        this.stadium = {
            name: data.venue.stadium.name || '',
            capacity: data.venue.stadium.capacity || 0
        };
        this.id = data.venue.id || 0;
        this.country = {
            alpha2: data.venue.country.alpha2 || '',
            name: data.venue.country.name || ''
        };
    }
}