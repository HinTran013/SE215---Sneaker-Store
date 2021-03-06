const express = require("express");
const productController = require("../controllers/product.controller.js");

const router = express.Router();

router.get("/", productController.getAllProduct);
router.get("/suggest", productController.getSuggestProducts);
router.get("/:id", productController.getOneProduct);

module.exports = router;
