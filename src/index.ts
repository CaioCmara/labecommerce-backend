import { queryProductsByName, createPurchase } from "./database";

console.log(queryProductsByName("screen"));
console.log(createPurchase("1", "1", 3, 15));
