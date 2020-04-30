const express = require("express");
const app = express();
const { Client } = require("pg");
require("dotenv").config();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(express.json())

const client = new Client({
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  host: process.env.HOST,
  port: process.env.PGPORT,
  database: process.env.PGDB
});

const connect = async () => {
  try {
    await client.connect();
  } catch (e) {
    console.error(`Filed to connect ${e}`);
  }
};

const readProducts = async () => {
  try {
    const results = await client.query(`select * from public.products`);
    return results.rows;
  } catch (e) {
    console.error(`somthing went wrong`);
    return [];
  }
};


const readProduct = async product_id => {
  try {
    const results = await client.query("select * from public.products where product_id = $1", [product_id]);
    return results.rows;
  } catch (e) {
    console.error(`somthing went wrong`);
    return [];
  }
};

const createProduct = async product => {

  try {
    const { tittle, price, img, about, product_id } = product
    await client.query("insert into public.products (tittle, price, img, about, product_id) values ($1, $2, $3, $4, $5)", 
    [tittle, price, img, about, product_id]);
    return true
  } catch (e) {
    
    console.error(e)
    return false;
  }
};

const deleteProduct = async product_id => {
  try {
    await client.query(`delete from public.products where product_id = $1`, [product_id]);
    return true;
  } catch (e) {
    return false;
  }
};

const start = async () => {
  await connect();
};
start();

app.get("/products/", async (req, res) => {
  const rows = await readProducts();
  res.setHeader("content-type", "application/json");
  res.send(JSON.stringify(rows));
});


app.get("/product/:product_id", async (req, res) => {
  const rows = await readProduct(req.params.product_id);
  res.setHeader("content-type", "application/json");
  res.send(JSON.stringify(rows));
});

app.post("/products", async (req, res) => {
  const result = {}
  try {
    const reqJson = req.body;
    await createProduct(reqJson.product)
    result.success= true;
  } catch(e) {
    result.success = false
    console.error(`Error. ${e}`)
  }
  finally{
    res.setHeader("content-type", "application/json");
    res.send(JSON.stringify(result));
  }
});

const port = process.env.port || 5000;
const host = process.env.host || "127.0.0.1"
app.listen(port, host, () => console.log(`Biegam na http://${host}:${port}`));

