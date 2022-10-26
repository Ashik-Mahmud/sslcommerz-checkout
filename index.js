const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { initSSLCommerz } = require("./controllers/payment.controller");
const app = express();
const bodyParser = require("body-parser");
//middle wares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));


const port  = process.env.PORT || 5000;
//routes
app.get("/", (req, res) => {
  res.send({
    success: true,
    message: "Welcome to SSLCommerz NodeJS SDK",
  });
});

// payment routes
app.get("/api/payment/init", initSSLCommerz);

//payment success route
app.post("/success", (req, res) => {
  console.log(
    req.body?.bank_tran_id,
    req.body?.status,
    req?.body?.amount,
    req.body?.card_type
  );

  res.redirect(`http://127.0.0.1:5500/index.html`);
});

//listen this app
app.listen(port, () => {
  console.log("server is running on port 5000");
});

console.log(
  "%cStop!",
  "color:red;font-family:system-ui;font-size:4rem;-webkit-text-stroke: 1px black;font-weight:bold"
);
