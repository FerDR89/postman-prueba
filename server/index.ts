import * as express from "express";

const app = express();
const port = process.env.PORT || 3000;

app.get("/users", (req, res) => {
  res.json({
    userList: [],
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

app.post("/users/newUser", (req, res) => {
  res.json({
    userId: "1234",
    created: true,
  });
});

app.post("/products/userId/:newProduct", (req, res) => {
  res.json({
    userProductsList: [],
  });
});

app.listen(port, () => {
  console.log(`la app esta corriendo en el puerto ${port}`);
});
