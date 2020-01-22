const mongoose = require ('mongoose')

const UserSchema = mongoose.Schema({
    username: { 
        type: String,
        require: true,
        trim: true
    },
    password: {
        type: String,
        require: true,
        trim: true,
        unique: true
    }
})

module.exports = mongoose.model('User', UserSchema)