const User = require('../models/users.model.js');
const jwt = require('jsonwebtoken')

const bcrypt = require('bcryptjs')

const createUser = async (req, res, next) => {
    try {
        req.body.password = await bcrypt.hash(req.body.password, 10);
        const user = await User.create(req.body)
        res.json(user)
    } catch (error) {
        next(error)
    }
}

const login = async (req, res, next) => {

    try {
        //¿Existe el email en la BBDD? Esto me da un usuario o un nulo
        const user = await User.findOne({
            email: req.body.email
        })
        if (!user) {
            return res.status(401).json({ message: 'Email o contraseña incorrectos' })
        }

        //¿Coinciden las passwords?
        const passwordIguales = await bcrypt.compare(req.body.password, user.password)

        if (!passwordIguales) {
            return res.status(401).json({ message: 'Email o contraseña incorrectos' })
        }
        res.json({
            message: 'Login correcto',
            token: jwt.sign({ user_id: user._id }, 'abrete sesamo')
        })

    } catch (error) {
        next(error)
    }

}

const addProduct = async (req, res, next) => {

    const { _id } = req.params
    try {
        req.user.cart.push(_id);
        await req.user.save()
        res.json(req.user)
    } catch (error) {
        next(error)
    }
}

module.exports = {
    createUser, login, addProduct
}