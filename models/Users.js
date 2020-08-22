const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema(
    {
        username: { 
            type: String 
        },
        password: { 
            type: String,
            required: true,
            unique: true
        },
        email: {
            type: String
        }
    },

    {strict: false}
)

module.exports = User = mongoose.model('Users', UserSchema) 