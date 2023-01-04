import { TUser, TProduct, TPurchase } from "./types";

export const users: TUser[]=[
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
]

export const products: TProduct[] = [
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
]

export const purchases: TPurchase[] = [
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
]