const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    username: String,
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: String,
    role: {
        type: String,
        enum: ['regular', 'admin']
    },
    //Meto cart en un array porque voy a meter muchos objetos
    cart: [{
        type: Schema.Types.ObjectId,
        ref: 'product'
    }]


},
    {
        timestamps: true, versionKey: false
    })

const User = model('user', userSchema)

module.exports = User;
