require('dotenv').config();

const mongoose = require('mongoose');

mongoose
    .connect(process.env.MONGO_DB, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('connected');
    })
    .catch(() => console.log('failed'));

// Declaration of how document in collection should look like
// And also the name of collection (product[s])
const Product = new mongoose.Schema({
    name: String,
    price: Number,
});

const ProductsModel = mongoose.model('Product', Product);

const product = new ProductsModel({
    name: 'Toy',
    price: 99.99
});

product.save()
    .then(() => {
        console.log('saved');
    })
    .catch(err => {
        console.log('err');
    })
    .finally(() => {
        console.log('finally done');
    });

ProductsModel
    .findById('5f06ea4febe8f5b7b37d9c4a')
    .exec()
    .then(doc => console.log(doc))
    .catch(err => console.log(err.message))