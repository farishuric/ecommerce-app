import express from "express";
import data from './dataSlider.js';
import productsData from './ProductsData.js';



const app = express();

app.get('/api/data-slider', (req, res) => {
  res.send(data);
});

app.get('/api/products-data', (req, res) => {
  res.send(productsData)
});

app.get("/", (req, res) => {
  res.send("Server is ready!");
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`);
});