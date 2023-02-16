const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "product must has a name!"],
  },
  price: {
    type: Number,
    required: [true, "product must has a price!"],
  },
  featured: {
    type: Boolean,
    default: false,
  },
  rating: {
    type: Boolean,
    default: 3.5,
  },
})
