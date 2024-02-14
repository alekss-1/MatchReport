class Sport {
    constructor(data) {
            this.name = data.sport.name || '',
            this.slug = data.sport.slug || '',
            this.id = data.sport.id || 0
    }
}