import { queryProductsByName, createPurchase } from "./database";

console.log(queryProductsByName("Fiat Mobi"));
console.log(createPurchase("Pedro", "c001", 1, 70000));