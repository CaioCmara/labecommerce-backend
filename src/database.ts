 
    import { TUser, TProduct, TPurchase, PRODUCT_CATEGORY } from "./types";

    export const users: TUser[] = [
      {
        id: "caio",
        email: "caio1801@gmail.com",
        password: "marleydog30",
      },
      {
        id: "jessica",
        email: "JessicaBenzano@gmail.com",
        password: "thorfofo2012",
      },
    ];
    
    export const products: TProduct[] = [
      {
        id: "c001",
        name: "Fiat Mobi",
        price: 70000,
        category: PRODUCT_CATEGORY.HATCH,
      },
      {
        id: "c002",
        name: "Honda Civic 2023",
        price: 220000,
        category: PRODUCT_CATEGORY.SEDAN,
      },
    ];
    
    export const purchases: TPurchase[] = [
      {
        userId: "caio",
        productId: "c001",
        quantity: 1,
        totalPrice: 70000,
      },
      {
        userId: "jessica",
        productId: "c002",
        quantity: 2,
        totalPrice: 440000,
      },
    ];
    
    export function createUser(
      id: string,
      email: string,
      password: string
    ): string {
      users.push({
        id,
        email,
        password,
      });
      return "Cadastro realizado com sucesso";
    }
    
    export function getAllUsers(): TUser[] {
      return users;
    }
    
    export function createProduct(
      id: string,
      name: string,
      price: number,
      category: PRODUCT_CATEGORY
    ): string {
      products.push({
        id,
        name,
        price,
        category,
      });
      return "Produto criado com sucesso";
    }
    
    export function getAllProducts(): TProduct[] {
      return products;
    }
    
    export function getProductById(id: string): undefined | TProduct {
      return products.find((product) => product.id === id);
    }
    
    export function queryProductsByName(q: string): TProduct[] {
      return products.filter((product) =>
        product.name.toLowerCase().includes(q.toLowerCase())
      );
    }
    
    export function createPurchase(
      userId: string,
      productId: string,
      quantity: number,
      totalPrice: number
    ): string {
      purchases.push({
        userId,
        productId,
        quantity,
        totalPrice,
      });
      return "Compra realizada com sucesso";
    }
    
    export function getAllPurchasesFromUserId(userIdToSearch: string): TPurchase[] {
      return purchases.filter((purchase) => purchase.userId === userIdToSearch);
    }