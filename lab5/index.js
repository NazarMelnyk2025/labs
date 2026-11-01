import { Product } from "./models/Product.js";
import { Customer } from "./models/Customer.js";
import { Order } from "./models/Order.js";

const mouse = new Product("Миша", 800, "Комп'ютерні аксесуари");
const keyboard = new Product("Клавіатура", 1500, "Комп'ютерні аксесуари");
const customer = new Customer("Олександр");
const order = new Order([mouse, keyboard]);

customer.addOrder(order);

console.log("ЛР №5. Варіант 2 — Онлайн-магазин");
console.log(customer.getInfo());
console.log(`Товар 1: ${mouse.name}, ${mouse.category}, ${mouse.price} грн`);
console.log(`Товар 2: ${keyboard.name}, ${keyboard.category}, ${keyboard.price} грн`);
console.log(`Кількість замовлень: ${customer.getOrders().length}`);

customer.getOrders().forEach((currentOrder, index) => {
    const names = currentOrder.products.map((product) => product.name).join(", ");
    console.log(`Замовлення ${index + 1}: ${names}; загальна сума: ${currentOrder.total} грн`);
});
