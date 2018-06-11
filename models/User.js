const mongoose = require('mongoose');
const Schema = mongoose.Schedma;

const User = new Schema({
    userName: {type: String, require: true },
    passWord: {type: String, require: true},
    dateCreated: {
        type: Date,
        default: now.Date()
    },
    comments: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Comment'
        }
    ]
});

module.exports = mongoose.model('User', User);