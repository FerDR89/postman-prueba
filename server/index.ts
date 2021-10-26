import * as express from "express";

const app = express();
const port = process.env.PORT || 3000;

app.get("/products/:userId", (req, res) => {
  res.json({
    userName: "Jose",
    userProductsList: [
      {
        aa115544: {
          productId: "aa115544",
          productName: "arroz",
          productPrice: 55,
          productStock: 100,
        },
      },
      {
        aa556655: {
          productId: "aa556655",
          productName: "fideos",
          productPrice: 100,
          productStock: 100,
        },
      },
      {
        cc880012: {
          productId: "cc880012",
          productName: "porotos",
          productPrice: 200,
          productStock: 1000,
        },
      },
    ],
  });
});

app.post("/products/:userId", (req, res) => {
  res.json({
    userProductsList: [],
    productId: "11aa5523",
    productName: "Tomate",
    productPrice: 200,
    productStock: 1000,
    message: "Your product was successfuly added",
  });
});

app.patch("/products/:userId/:productId", (req, res) => {
  res.json({
    productId: "11aa5523",
    productName: "Tomate",
    productPrice: 200,
    productStock: 1000,
    message: "Your product was successfuly modified",
  });
});

app.delete("/products/:userId/:productId", (req, res) => {
  res.status(201).json({
    message: "Your product was successfuly deleted",
  });
});

app.listen(port, () => {
  console.log(`la app esta corriendo en el puerto ${port}`);
});
