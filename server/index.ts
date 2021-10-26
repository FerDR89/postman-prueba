import * as express from "express";

const app = express();
const port = process.env.PORT || 3000;

app.post("/signup/:userEmail", (req, res) => {
  res.json({
    userName: "Hector",
    userId: "11223344",
    newUser: true,
  });
});

app.post("/auth/:userEmail", (req, res) => {
  res.json({
    userName: "Hector",
    userId: "11223344",
  });
});

app.get("/users/:userEmail", (req, res) => {
  res.json({
    userName: "Hector",
    userId: "11223344",
  });
});

app.get("/products/:userId", (req, res) => {
  res.json({
    userName: "Jose",
    userProductsList: [],
  });
});

app.post("/products/userId/:newProduct", (req, res) => {
  res.json({
    userProductsList: [],
    message: "Your product was successfuly added",
  });
});

app.patch("/products/userId/productId", (req, res) => {
  res.json({
    userProductsList: [],
    message: "Your product was successfuly modified",
  });
});

app.delete("/products/userId/productId", (req, res) => {
  res.json({
    userProductsList: [],
    message: "Your product was successfuly deleted",
  });
});

app.listen(port, () => {
  console.log(`la app esta corriendo en el puerto ${port}`);
});
