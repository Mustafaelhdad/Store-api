const getAllProductsStatic = async (req, res) => {
  res.status(200).json({ msg: "products testing route static" })
}

const getAllProducts = async (req, res) => {
  res.status(200).json({ msg: "products testing route 22" })
}

module.exports = { getAllProductsStatic, getAllProducts }
