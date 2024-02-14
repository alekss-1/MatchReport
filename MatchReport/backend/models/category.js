class Category {
    constructor(data) {
        this.name = data.category.name || '';
        this.slug = data.category.slug || '';
        this.id = data.category.id || 0;
        this.flag = data.category.flag || '';
        this.alpha2 = data.category.alpha2 || '';
    }
}