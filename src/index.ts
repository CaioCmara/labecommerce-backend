import { queryProductsByName, createPurchase } from "./database";

console.log(queryProductsByName("screen"));
console.log(createPurchase("Pedro", "c001", 1, 70000));