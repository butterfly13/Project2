const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Comment = new Schema({
    content: String,
    dateCreated: {
        type: Date,
        default: now.Date()
    },
    author: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ]
});

const Image = new Schema({
    content: url,
    description: String,
    dateCreated: {
        type: Date,
        default: now.Date()
    },
    comments: [comment]
});

module.exports = {
    Comment: mongoose.model('Comment', Comment),
    Image: mongoose.model('Image', Image)
};
