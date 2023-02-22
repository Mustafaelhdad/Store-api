const Product = require("../models/product");

const getAllProductsStatic = async (req, res) => {
  const search = "";
  const products = await Product.find({
    // featured: true,
    name: { $regex: search, $options: "i" },
  })
    .sort("-name price")
    .select("name price");
  res.status(200).json({ products, nbHits: products.length });
};

const getAllProducts = async (req, res) => {
  // console.log(req.query)
  const { featured, company, name, sort } = req.query;
  const queryObject = {};

  if (featured) {
    queryObject.featured = featured === "true" ? true : false;
  }

  if (company) {
    queryObject.company = company;
  }

  if (name) {
    // handling the search with names
    queryObject.name = { $regex: name, $options: "i" };
  }

  // console.log(queryObject);
  let result = Product.find(queryObject);

  if (sort) {
    // products = products.sort()
    // console.log(sort);
    const sortList = sort.split(",").join(" ");
    result = result.sort(sortList);
  } else {
    result = result.sort("createdAt");
  }
  const products = await result;

  res.status(200).json({ products, nbHits: products.length });
};

module.exports = { getAllProductsStatic, getAllProducts };
