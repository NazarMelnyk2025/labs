export class Order {
    constructor(products) {
        this.products = products;
        this.total = products.reduce((sum, product) => sum + product.price, 0);
    }
}
