const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const apiCategoriesRouer = require("./API/apiCategories");
const cors = require("cors");
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3002;

app.use(
  cors({
    credentials: true,
    origin: true,
  })
);
app.use(morgan("dev"));

app.use("/api/categories", apiCategoriesRouer);

app.listen(PORT, () => console.log(`Server started on ${PORT} port`));
