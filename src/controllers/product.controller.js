const Product = require("../models/product.model");

//Palindomo
export function palindromeChecker(str) {
  const newStr = str.replace(/[\W_]/g, "").toLowerCase();
  const strReversed = newStr.split("").reverse().join("");

  return newStr === strReversed ? true : false;
}
// Create and Save a new product
exports.create = (req, res) => {
   // Validate request
   if (!req.body.idProduct) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }
  // Create a product
  const product = new Product({
    idProduct: req.body.idProduct,
    description: req.body.description,
    brand: req.body.brand ,
    price:req.body.price
  });
  // Save product in the database
  product
    .save(product)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the product."
      });
    });
};
// Retrieve all products from the database.
exports.findAll = (req, res) => {

  Product.find()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving products."
      });
    });
};
// Find a single product with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
    Product.findById(id)
      .then(data => {
        console.log(data)
        if (!data)
   
          res.status(404).send({ message: "Not found product with id " + id });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving product with id=" + id });
      });
};


// Find all published products
exports.findIdProduct = (req, res) => {

  const idProduct = req.params.idProduct;
    Product.findOne({idProduct : idProduct})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving products."
      });
    });

 
};

exports.findSerch = (req, res) => {

 console.log(req.params.serch.length)
  if (!req.params.serch || req.params.serch.length <= 3) {
    res.status(400).send({ message: "The number of characters is not enough!" });
    return;
  }

        Product.find()
        .then(data => {
          console.log(data.description)
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving products."
          });
        });  
};


exports.findPalindomo = (req, res) => {

  let brand =  req.body.brand;
   if (palindromeChecker(brand) == false) {
     res.status(400).send({ message: "The number of characters is not enough!" });
     return;
   }

const filter = { brand: brand };
const update = { price: req.body.price };


         Product.findByIdAndUpdate(filter,update)
         .then(data => {
           res.send(data);
         })
         .catch(err => {
           res.status(500).send({
             message:
               err.message || "Some error occurred while retrieving products."
           });
         });  
 };