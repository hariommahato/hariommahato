const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyparser = require('body-parser');
const path = require('path');
const app = express();
require("dotenv").config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

app.use(bodyparser.json({limit:'100MB'})); 
app.use(bodyparser.urlencoded({extended:true, limit:'50mb'})); 

const aboutroutes = require("./routes/AboutRoute");
const projectroutes=require("./routes/ProjectRoute");

app.use("/about", aboutroutes);
app.use('/project',projectroutes)
app.use(express.static('../client/public'));
// app.use('/uploads', express.static('uploads'));

mongoose
  .connect(process.env.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Mongodb Connected..."))
  .catch((err) => console.error(err));

app.listen(process.env.PORT, () => console.log("Server running on port "+process.env.PORT));
