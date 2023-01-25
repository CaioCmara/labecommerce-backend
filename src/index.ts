import {
  queryProductsByName,
  getAllPurchasesFromUserId,
  getAllUsers,
  getAllProducts,
  users,
  products,
  purchases,
  getProductById,
} from "./database";
import { TUser, TProduct, TPurchase } from "./types";
import express, { Request, Response } from "express";
import cors from "cors";

// console.log(queryProductsByName("Fiat Mobi"));
// console.log(createPurchase("Pedro", "c001", 1, 70000));

const app = express();
app.use(express.json());
app.use(cors());

app.listen(3003, () => {
  console.log("Porta 3003 rodando");
});

app.get("/ping", (req: Request, res: Response) => {
  res.send("Pong!");
});

app.get("/users", (req: Request, res: Response) => {
  res.status(200).send(users);
});

app.get("/products", (req: Request, res: Response) => {
  res.status(200).send(products);
});

app.get("/purchases", (req: Request, res: Response) => {
  res.status(200).send(purchases);
});

app.get("/product/search", (req: Request, res: Response) => {
  const q = req.query.q as string;
  const getProduct = products.filter((product) =>
    product.name.toLowerCase().includes(q.toLowerCase())
  );
  res.status(200).send(getProduct);
});

app.post("/users", (req: Request, res: Response) => {
  const id = req.body.id as string;
  const email = req.body.email as string;
  const password = req.body.password as string;

  const newUser:TUser={
    id:id,
    email:email,
    password:password,
}

    users.push(newUser)

  res.status(201).send("Cadastro feito com sucesso");
});

app.post('/products',(req:Request, res:Response)=>{
    const id = req.body.id
    const name = req.body.name
    const price = req.body.price
    const category = req.body.category

    const newProduct:TProduct = {
        id: id,
        name: name,
        price: price,
        category: category,
    }
    products.push(newProduct)
    res.send('Produto cadastrado com sucesso!')
})

app.post('/purchase',(req:Request, res:Response)=>{
    const userId = req.body.userId
    const productId = req.body.productId
    const quantity = req.body.quantity
    const totalPrice = req.body.totalPrice
    
    const newPurchase:TPurchase={
        userId:userId,
        productId:productId,
        quantity:quantity,
        totalPrice:totalPrice,
    }

    purchases.push(newPurchase)
    res.send('Compra cadastrada com sucesso!')
})
