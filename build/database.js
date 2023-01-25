"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.purchases = exports.products = exports.users = void 0;
exports.users = [
    {
        id: "caio",
        email: "caio1801@gmail.com",
        password: "marleydog30"
    },
    {
        id: "jessica",
        email: "JessicaBenzano@gmail.com",
        password: "thorfofo2012"
    }
];
exports.products = [
    {
        id: "c001",
        name: "Fiat Mobi",
        price: 70.000,
        category: "Hatch",
    },
    {
        id: "c002",
        name: "Honda Civic 2023",
        price: 220.000,
        category: "Sedan",
    }
];
exports.purchases = [
    {
        userId: "caio",
        productId: "c001",
        quantity: 1,
        totalPrice: 70.000
    },
    {
        userId: "jessica",
        productId: "c002",
        quantity: 2,
        totalPrice: 440.000
    }
];
//# sourceMappingURL=database.js.map