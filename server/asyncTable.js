const { Client } = require("pg");
require("dotenv").config();

const client = new Client({
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  host: process.env.HOST,
  port: process.env.PGPORT,
  database: process.env.PGDB
});


async function execute() {
  try {
    await client.connect();
    console.log("connected");
    const {rows} = await client.query("select * from public.products");
    console.table(rows);
  } catch (ex) {
    console.log(`somthing went wrong ${ex}`);
  } finally {
    await client.end();
    console.log("disconected");
  }
}

execute();
