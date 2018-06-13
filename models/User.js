const mongoose = require('../db/connection');
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

module.exports = mongoose.model('User', User);