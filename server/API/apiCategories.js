const express = require("express");
const { Category } = require("../db/models");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const getAllCategories = await Category.findAll();
    res.json(getAllCategories);
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;
