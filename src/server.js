// importing dependencies
const express = require("express");
const mongoose = require("mongoose");
const helmet = require("helmet");
const compression = require("compression");
const dotenv = require("dotenv");
const Consola = require("consola");

// importing env variables
dotenv.config();

// app instantiation
const app = express();

// mongoDB connection
try {
  mongoose.connect(process.env.DB);
  Consola.success("Connected to DB...");
} catch (err) {
  Consola.error(new Error(`DB Error: ${err}`));
}

// app configuration
const port = Number(process.env.PORT || 8000); // Number() to convert env variables to Number type in JS
app.use(helmet());
app.use(compression()); // compressing request body to obtain high performance
app.use(express.json()); //json body parser

// importing routes
const productRoute = require("./routes/product.routes");

app.use("/product", productRoute);

// app listening at $port
app.listen(port, function () {
  Consola.info(`Server running on port. ${port}`);
});
