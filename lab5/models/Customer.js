import { User } from "./User.js";

export class Customer extends User {
    constructor(name) {
        super(name);
        this.orders = [];
    }

    addOrder(order) {
        this.orders.push(order);
    }

    getOrders() {
        return this.orders;
    }
}
