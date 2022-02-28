module.exports = app => {
    const products = require("../controllers/product.controller");
    var router = require("express").Router();
    // Create a new Tutorial
    router.post("/", products.create);
    // Retrieve all Tutorials
    router.get("/", products.findAll);
    // Retrieve all published Tutorials

    // Retrieve a single Tutorial with id
    router.get("/:idProduct", products.findIdProduct);
    // Update a Tutorial with id

    router.get("/serch/:serch", products.findSerch);
    // Update a Tutorial with id

    app.use('/api/products', router);
  };