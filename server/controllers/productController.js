const path = require('path');
const uuid = require('uuid');
const {Product} = require('../models/models');
const {where} = require("sequelize");
0

class ProductController {
    async add(req, res) {
        const {id, name, productTypeId, description} = req.body;
        const {image} = req.files;
        const image_name = `${uuid.v4()}.png`;
        image.mv(path.resolve(__dirname, '..', 'static', image_name))
        const product = await Product.create({name, description, productTypeId, image:image_name})
        return res.json(product);
    }

    async get(req, res) {
        let {productTypeId, page, rows} = req.query
        let products;
        page = page || 1;
        rows = rows || 5;
        let offset = page * rows - rows;

        if(!productTypeId) {
            products = await Product.findAll({rows, offset});
        } else {
            products = await Product.findAll({where: {productTypeId}, rows, offset});
        }
        return res.json(products);
    }

    async remove(req, res) {

    }
}

module.exports = new ProductController();