//import express from "express";
const dotEnv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bookRoutes = require("./routes/bookroutes");
const app = express();
app.use(express.json());
const PORT = process.env.port || 3300;
dotEnv.config();
/*app.get("/", (req, res) => {
  console.log(req);
  return res.status(234).send("welcome to stack");
});*/
app.use(cors());
app.use("/books", bookRoutes);
mongoose
  .connect(process.env.MONGOOSE_URL)
  .then((res) => {
    console.log("mongoDB connecton success");
  })
  .catch((err) => {
    console.log(err);
  });
app.listen(PORT, () => {
  console.log("server runned");
});
