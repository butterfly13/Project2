const mongoose = require('../db/connection');
const bcrypt = require('bcrypt-nodejs');
const Schema = mongoose.Schema;

const User = new Schema({
    userName: {type: String, require: true },
    password: {type: String, require: true},
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