class ProductManager {
    constructor() {
        this.products = [];
        this.props = ['title', 'price', 'thumbnail', 'code', 'stock'];
    }

    getProducts() {
        return this.products;
    }

    getProduct(id) {
        return this.products.find(product => product.id == id);

    }
    isValidate(product) {
        return this.props.every(prop => product.hasOwnProperty(prop));
    }

    addProduct(product) {
        if (this.isValidate(product)) {
            product.id = this.products.length + 1;
            this.products.push(product);
            return product;
        }
        return null;
    }
}

  

