import { TUser, TProduct, TPurchase } from "./types";

export const users: TUser[]=[
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
]

export const products: TProduct[] = [
    {
        id: "c001",
        name: "Fiat Mobi",
        price: 70000,
        category: "Hatch",
    },
    {
        id: "c002",
        name: "Honda Civic 2023",
        price: 220000,
        category: "Sedan",
    }
]

export const purchases: TPurchase[] = [
    {
        userId: "caio",
        productId: "c001",
        quantity: 1,
        totalPrice: 70000
    },  
    {
        userId: "jessica",
        productId: "c002",
        quantity: 2,
        totalPrice: 440000
    }
]