"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.purchases = exports.products = exports.users = void 0;
exports.users = [
    {
        id: "caio",
        email: "caio1801@gmail.com",
        password: "azulverde"
    },
    {
        id: "bahia",
        email: "bahiacity@gmail.com",
        password: "libertadores"
    }
];
exports.products = [
    {
        id: "bdn",
        name: "blusa da nike",
        price: 130,
        category: "vestuário",
    },
    {
        id: "cta",
        name: "chuteira",
        price: 321,
        category: "calçados",
    }
];
exports.purchases = [
    {
        userId: "caio",
        productId: "bdn",
        quantity: 3,
        totalPrice: 390
    },
    {
        userId: "bahia",
        productId: "cta",
        quantity: 9,
        totalPrice: 2889
    }
];
//# sourceMappingURL=database.js.map