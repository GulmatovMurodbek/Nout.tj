const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");

const app = express();
const PORT = 3001;
const filePath = path.join(__dirname, "data", "db.json");
app.use(express.json());
app.use(cors());

app.get("/Brend", (req, res) => {
  try {
    const data = fs.readFileSync(filePath, "utf8");
    const jsonData = JSON.parse(data);
    res.status(200).json(jsonData.Brend);
  } catch (error) {
    res.status(500).json({ message: "Error reading db.json", error });
  }
});
app.get("/products",(req,res)=>
{
  fs.readFile(filePath,"utf8",(err,data)=>
  {
    if(err)
    {
      res.status(500).json({ error: "Маълумотро хонда натавонистем!" })
    }
    else
    {
      let jsonData=JSON.parse(data)
      res.json(jsonData.product)
    }
  })
})
app.get("/product/:id", (req, res) => {
  try {
    let data = fs.readFileSync(filePath, "utf8");
    let jsonData = JSON.parse(data);

    if (!jsonData.product) {
      return res
        .status(500)
        .json({ message: "Массиви products дар db.json пайдо нашуд" });
    }

    let productbyid = jsonData.product.find(
      (product) => product.id == req.params.id
    );
    if (!productbyid) {
      return res.status(404).json({ message: "Маҳсулот пайдо нашуд" });
    }

    res.status(200).json(productbyid);
  } catch (error) {
    res.status(500).json({ message: "Хатогӣ дар хониши db.json", error });
  }
});
app.get("/brend/:id", (req, res) => {
  try {
    let data = fs.readFileSync(filePath, "utf8");
    let jsonData = JSON.parse(data);

    if (!jsonData.Brend) {
      return res
        .status(500)
        .json({ message: "Массиви products дар db.json пайдо нашуд" });
    }

    let productbyid = jsonData.Brend.find(
      (product) => product.id == req.params.id
    );
    if (!productbyid) {
      return res.status(404).json({ message: "Маҳсулот пайдо нашуд" });
    }

    res.status(200).json(productbyid);
  } catch (error) {
    res.status(500).json({ message: "Хатогӣ дар хониши db.json", error });
  }
});
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})

