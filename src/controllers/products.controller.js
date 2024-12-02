const Product = require('../models/products.model')



const getAll = async (req, res, next) => {
    try {
        const products = await Product.find().populate('creator', '-_id username email')
        res.json(products);
    } catch (error) {
        next(error)
    }
}

const getById = async (req, res, next) => {
    const { _id } = req.params
    try {
        const product = await Product.findById(_id);
        res.json(product);

    } catch (error) {
        next(error)
    }
}

const getByPrice = async (req, res, next) => {
    const { min, max } = req.params
    try {

        const products = await Product.find({
            price: {
                $gt: min,
                $lte: max
            }
        })
        res.json(products)
    } catch (error) {
        next(error)
    }
}

const getByStock = async (req, res, next) => {

    try {
        const products = await Product.find({
            stock: { $gte: 10 },
            available: true
        })
        res.json(products)

    } catch (error) {
        next(error)
    }
}

const create = async (req, res, next) => {
    req.body.creator = req.user._id

    try {
        const product = await Product.create(req.body)
        res.json(product)
    } catch (error) {
        next(error)
    }
}

const update = async (req, res, next) => {
    const { _id } = req.params
    try {
        const product = await Product.findByIdAndUpdate(_id, req.body, { new: true })
        res.json(product)
    } catch (error) {
        next(error)
    }
}

const deleteProd = async (req, res, next) => {
    const { _id } = req.params

    try {
        const product = await Product.findByIdAndDelete(_id)
        res.json(product)
    } catch (error) {
        next(error)
    }

}

module.exports = {
    getAll, getById, getByPrice, getByStock, create, update, deleteProd
}