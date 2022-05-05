const mongoose = require("mongoose");
const Joi = require("joi");

const productSchema = mongoose.Schema({
    name: {type: String, require: true, minLength: 2, maxLength: 30 },
    catagory: {type: String, require: true, minLength: 3, maxLength: 40},
    price: {type: Number, require: true, default: 00 },
    discription: {type: String, minLength: 3, maxLength: 500},
});

const validateProduct= (product) => {
    const schema = Joi.object({
        name: Joi.string().min(2).max(30).required(),
        catagory: Joi.string().min(3).max(40).required(),
        discription: Joi.string().min(3).max(500).required(),
        

    })
}


//sends schema to product DB
const myDB = mongoose.connection.useDb('Product');
const Product = myDB.model('Product', productSchema )
module.exports.Product = Product;
module.exports.productSchema = productSchema;
module.exports.validateProduct = validateProduct;
