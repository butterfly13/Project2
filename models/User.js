const mongoose = require('../db/connection');
//const bcrypt = require('bcrypt-nodejs');
const bcrypt = require('bcrypt')
const Schema = mongoose.Schema;

const User = new Schema({
    username: {type: String, require: true },
    password: {type: String, require: true},
    email: {type: String, require},
    dateCreated: {
        type: Date,
        default: Date.now()
    },
    images: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Image'
        }
    ]
});

User.methods.encrypt = function(password){
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

User.methods.validPassword = function(password){
    return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('User', User);