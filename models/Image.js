
const mongoose = require('../db/connection');
const Schema = mongoose.Schema;

const Comment = new Schema({
    content: String,
    dateCreated: {
        type: Date,
        default: Date.now()
    },
    author: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ]
});

const Image = new Schema({
    image: String,
    description: String,
    dateCreated: {
        type: Date,
        default: Date.now()
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    comments: [Comment]
});

module.exports = {
    Comment: mongoose.model('Comment', Comment),
    Image: mongoose.model('Image', Image)
};
