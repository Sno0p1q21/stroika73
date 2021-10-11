const {ProductType} = require('../models/models')

class TypeController {
    async add(req, res) {
        const {name} = req.body;
        const type = await ProductType.create({name});
        return res.json(type);
    }

    async get(req, res) {
        const types = await ProductType.findAll();
        res.json(types);
    }

    async remove(req, res) {

    }
}

module.exports = new TypeController();