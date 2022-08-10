const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    firstname:{type: 'string', required: true},
    lastname:{type: 'string', required: true},
    email:{type: 'string', required: true},
    password:{type: 'string', required: true},
})

const UserDb = mongoose.model('UserDb', UserSchema);

module.exports = UserDb;