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
import { TUser, TProduct, TPurchase, PRODUCT_CATEGORY } from "./types";
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
  try {
    res.status(200).send(users);
  } catch (error: any) {
    res.status(500);
    console.log(error);
    res.send(error.message);
  }
});

app.get("/products", (req: Request, res: Response) => {
  try {
    res.status(200).send(products);
  } catch (error: any) {
    res.status(500);
    console.log(error);
    res.send(error.message);
  }
});

app.get("/purchases", (req: Request, res: Response) => {
  try {
    res.status(200).send(purchases);
  } catch (error: any) {
    res.status(500);
    console.log(error);
    res.send(error.message);
  }
});

app.get("/product/search", (req: Request, res: Response) => {
  try {
    const q = req.query.q as string;
    const getProduct = products.filter((product) =>
      product.name.toLowerCase().includes(q.toLowerCase())
    );
    if (q.length < 1) {
      res.status(404);
      throw new Error("Você deve adicionar pelo menos 1 caractere");
    }
    res.status(200).send(getProduct);
  } catch (error: any) {
    res.status(500);
    console.log(error);
    res.send(error.message);
  }
});

app.post("/users", (req: Request, res: Response) => {
try {
  const id = req.body.id as string;
  const email = req.body.email as string;
  const password = req.body.password as string;

  if (password.length < 1 || email.length < 1 || id.length < 1) {
    res.status(404);
    throw new Error("Preencha todos os dados de usuário");
}



  const newUser: TUser = {
    id: id,
    email: email,
    password: password,
  };

  users.push(newUser);

  res.status(201).send("Cadastro feito com sucesso");
});

app.post("/products", (req: Request, res: Response) => {
  const id = req.body.id;
  const name = req.body.name;
  const price = req.body.price;
  const category = req.body.category;

  const newProduct: TProduct = {
    id: id,
    name: name,
    price: price,
    category: category,
  };
  products.push(newProduct);
  res.send("Produto cadastrado com sucesso!");
});

app.post("/purchase", (req: Request, res: Response) => {
  const userId = req.body.userId;
  const productId = req.body.productId;
  const quantity = req.body.quantity;
  const totalPrice = req.body.totalPrice;

  const newPurchase: TPurchase = {
    userId: userId,
    productId: productId,
    quantity: quantity,
    totalPrice: totalPrice,
  };

  purchases.push(newPurchase);
  res.send("Compra cadastrada com sucesso!");
});

// query para produtos por id

app.get("/products:id", (req: Request, res: Response) => {
  const id = req.params.id;

  const result = products.find((product) => product.id === id);

  res.status(200).send(result);
});

// compras por id

app.get("/products/:id", (req: Request, res: Response) => {
  const id = req.params.id;
  const result = products.find((product) => product.id === id);
  res.status(200).send(result);
});

// deletar usuario

app.delete("/users/:id", (req: Request, res: Response) => {
  const id = req.params.id;

  const indexToRemove = users.findIndex((user) => user.id === id);

  if (indexToRemove >= 0) {
    users.splice(indexToRemove, 1);
  }

  res.status(200).send("Usuário deletado com sucesso");
});

// deleter produto pelo id

app.delete("/products/:id", (req: Request, res: Response) => {
  const id = req.params.id;

  const indexToRemove = products.findIndex((product) => product.id === id);

  if (indexToRemove >= 0) {
    products.splice(indexToRemove, 1);
  }

  res.status(200).send("Produto apagado com sucesso");
});

app.put("/user/:id", (req: Request, res: Response) => {
  const id = req.params.id;
  const newId = req.body.id as string | undefined;
  const newEmail = req.body.email as string | undefined;
  const newPassword = req.body.password as string | undefined;

  const user = users.find((user) => user.id === id);

  if (user) {
    user.id = newId || user.id;
    user.email = newEmail || user.email;
    user.password = newPassword || user.password;
  }

  res.status(200).send("Cadastro atualizado com sucesso");
});

app.put("/product/:id", (req: Request, res: Response) => {
  const id = req.params.id;

  const newId = req.body.id as string | undefined;
  const newName = req.body.name as string | undefined;
  const newPrice = req.body.price as number | undefined;
  const newCategory = req.body.category as PRODUCT_CATEGORY | undefined;

  const product = products.find((product) => product.id === id);

  if (product) {
    product.id = newId || product.id;
    product.name = newName || product.name;
    product.price =
      newPrice !== undefined && !isNaN(newPrice) ? newPrice : product.price;
    product.category = newCategory || product.category;
  }

  res.status(200).send("Produto atualizado com sucesso");
});
