class Manager {
    constructor(data) {
            this.name = data.manager.name || '';
            this.slug = data.manager.slug || '';
            this.shortName = data.manager.shortName || '';
            this.id = data.manager.id || 0;
            this.country = {
                alpha2: data.manager.country.alpha2 || ''
            };
    }
}